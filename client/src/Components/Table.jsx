import { useEffect, useState } from "react";

const Table = ({ data }) => {
  const [dat, setData] = useState(data);
  const [visible, setVisible] = useState("w-full hidden");
  useEffect(() => {
    console.log("this is table comp. data is", data);
    setData(data);
    if (data.length > 0) {
      setVisible("w-full");
    }
  }, [data]);
  return (
    <>
      <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
        <div class="flex items-center justify-between pb-6">
          {/* <div>
      <h2 class="font-semibold text-gray-700">User Accounts</h2>
      <span class="text-xs text-gray-500">View accounts of registered users</span>
    </div> */}
          {/* <div class="flex items-center justify-between">
      <div class="ml-10 space-x-8 lg:ml-40">
        <button class="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
          </svg>

          CSV
        </button>
      </div>
    </div> */}
        </div>
        <div class="overflow-y-hidden rounded-lg border">
          <div class="overflow-x-auto">
            <table class={visible}>
              <thead>
                <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                  <th class="px-5 py-3">#</th>
                  <th class="px-5 py-3">Url</th>
                  <th class="px-5 py-3">Google</th>
                  <th class="px-5 py-3">Bing</th>
                </tr>
              </thead>
              <tbody class="text-gray-500">
                {dat.map((dt, index, key) => (
                  <tr>
                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      <p class="whitespace-no-wrap">{index + 1}</p>
                    </td>
                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      {dt.url}
                    </td>
                    {dt.result.google ? (
                      <td class="border-b border-gray-200 bg-white px-5 py-5 text-green-600 text-sm">
                        indexed
                      </td>
                    ) : (
                      <td class="border-b border-gray-200 bg-white text-red-500 px-5 py-5 text-sm">
                        Not indexed
                      </td>
                    )}
                    {dt.result.bind ? (
                      <td class="border-b border-gray-200 bg-white text-green-600 px-5 py-5 text-sm">
                        indexed
                      </td>
                    ) : (
                      <td class="border-b border-gray-200 bg-white  text-red-500 px-5 py-5 text-sm">
                        Not indexed
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
