const unirest = require("unirest");
const cheerio = require("cheerio");
const express = require("express");
const cors = require("cors");
const rate = require("express-rate-limit");
const seachUrl = `https://www.google.com/search?q=`;
const bingSearchurl = `https://bing.com/search/?q=`;

const app = express();
app.use(cors());
app.use(express.json({ limit: "300mb" }));
const apiLimitter = rate({
  windowMs: 1000 * 60 * 24,
  max: 1000,
  message: "Only 10 Request / 1 Day allowed for free plan",
});

process.on("unhandledRejection", (error) => {
  console.log("unhandledrejection", error.message);
});
const selectRandom = () => {
  const userAgents = [
   
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6738.0  Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",

  ];
  var randomNumber = Math.floor(Math.random() * userAgents.length);
  return userAgents[randomNumber];
};


const getOrganicData = async (inspectionUrl) => {
  if (!inspectionUrl.endsWith("/")) {
    console.log("/ ile bitmemiş");
    inspectionUrl = inspectionUrl + "/";
  }
  let indexed = false;
  let user_agent = selectRandom();
  console.log("user agent is",user_agent);
  return unirest
    .get(seachUrl + inspectionUrl)
    .headers({
      "User-Agent": `${user_agent}`,
    })
    .then(async (response) => {
      console.log("full url is", seachUrl + inspectionUrl);
      //console.log("response is",response.body)
      let $ = cheerio.load(response.body);

      let titles = [];
      let links = [];
      let snippets = [];
      let displayedLinks = [];

      $(".g .yuRUbf h3").each((i, el) => {
        titles[i] = $(el).text();
      });
      $(".yuRUbf a").each((i, el) => {
        links[i] = $(el).attr("href");
      });
      $(".g .VwiC3b ").each((i, el) => {
        snippets[i] = $(el).text();
      });
      $(".g .yuRUbf .NJjxre .tjvcx").each((i, el) => {
        displayedLinks[i] = $(el).text();
      });
      const organicResult = [];
      titles.map((key, index) => {
        organicResult[index] = {
          title: titles[index],
          links: links[index],
          snippet: snippets[index],
          displayedLink: displayedLinks[index],
        };
      });

      organicResult.map((data) => {
        console.log("google url", data.links);
        console.log(inspectionUrl);
        // if (data.links==inspectionUrl||data.links+"/"==inspectionUrl) {
        //   console.log("google indexxed");

        //   indexed = true;
        // }
        if (data.links.includes(inspectionUrl)) {
          console.log("google indexed");
          indexed = true;
        }
      });
      return indexed;
    });
};
const getBingData = async (inspectionUrl) => {
  let indexed = false;
  if (!inspectionUrl.endsWith("/")) {
    console.log("bind url / ile bitmemiş");
    inspectionUrl = inspectionUrl + "/";
  }

  return unirest
    .get(bingSearchurl + inspectionUrl)
    .headers({
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
    })
    .then((response) => {
      let $ = cheerio.load(response.body);
      let links = [];
      $(".b_algo .b_tpcn a").each((i, el) => {
        links[i] = $(el).attr("href").split("#")[0];
      });

      links.map((link) => {
        console.log("bing links are", link);
        // if (inspectionUrl===link||inspectionUrl===link+"/") {
        //   indexed = true;
        //   console.log("bing indexed")
        // }
        if (link.includes(inspectionUrl)) {
          indexed = true;
          console.log("bing indexed");
        }
      });
      return indexed;
    });
};
const getIndexResults = async (url) => {
  let googleResult = false;
  let bingResult = false;
  googleResult = await getOrganicData(url);
  bingResult = await getBingData(url);

  return {
    results: {
      google: googleResult,
      bind: bingResult,
    },
  };
};
app.post("/api/indexResults", apiLimitter, async (req, res) => {
  try {
    const inspectionUrls = req.body.url;
    const splittedUrl = inspectionUrls.split(",");
    if (splittedUrl.length > 10) {
      throw new Error("Url count must be < 10");
    }

    let results = [];
    await Promise.all(
      splittedUrl.map(async (item, key) => {
        if (isValidUrl(item.trim())) {
          const result = await getIndexResults(item.trim());
          results.push({
            url: item,
            result: result.results,
          });
        } else {
          results.push({
            url: item,
            result: { google: false, bind: false },
          });
        }
      })
    );

    console.log("index result is", results);
    res.status(200).send(results);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

const isValidUrl = (url) => {
  const pattern = new RegExp(
    "^([a-zA-Z]+:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i"
  );
  return pattern.test(url);
};

app.listen("5630", () => console.log("server running on 5630"));
