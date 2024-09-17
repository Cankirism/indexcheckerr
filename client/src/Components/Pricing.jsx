const Pricing = ()=>{
    return(
        <>
        <div class="w-screen bg-white py-16">
  <div class="mx-auto px-3 md:max-w-screen-lg ">
  <div class="mt-8">
    <div class="mb-14 flex items-center justify-center text-gray-900">
      <div class="inline-flex items-center justify-center rounded-full border font-semibold bg-slate-100 p-2">
        <button class="inline-flex cursor-pointer items-center justify-center py-1 px-5 text-center font-sans text-sm normal-case">Monthly</button>
        <button class="inline-flex cursor-pointer items-center justify-center rounded-full bg-sky-400 py-1 px-5 text-center font-sans text-sm normal-case text-white" id="annually">Annually</button>
      </div>
    </div>
    <ul class="mb-6 space-y-3 text-gray-900 sm:space-y-0 md:grid md:grid-cols-3 md:gap-4 lg:gap-8 xl:col-span-10 xl:col-start-3">
      <li class="bg-white relative overflow-hidden rounded-lg border border-black shadow-md text-left">
        <div class="mt-8 w-full">
          <span class="absolute top-0 block h-8 w-full bg-slate-500"></span>
          <div class="p-5 text-center md:w-full lg:px-5 lg:py-8">
            <h3 class="font-serif text-xl font-bold lg:text-2xl lg:leading-7">Free</h3>
            <p class="mt-2 font-sans text-3xl font-bold leading-9 lg:text-5xl">0 $</p>
            <p class="mt-2 mb-4 font-sans text-base lg:text-base lg:leading-6">per day</p>
            <a href="#" class="mt-5 inline-flex cursor-pointer rounded-full bg-slate-500 px-8 py-2 font-sans text-sm text-white shadow-sm transition hover:translate-y-1 hover:shadow-md hover:shadow-slate-200">Get Started</a>
          </div>
          <span class="block w-full border-b"></span>
          <label for="viewmore-1">
            <input class="peer hidden" type="checkbox" id="viewmore-1" />
            <span class="my-8 mx-auto flex cursor-pointer select-none flex-col items-center text-center normal-case sm:hidden">
              View Features<svg width="16" height="7" viewBox="0 0 16 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="block align-middle text-gray-600">
                <path d="M15.7 5.67409L8.7 0.214485C8.6 0.13649 8.5 0.0584958 8.4 0.0584958C8.2 -0.0194986 7.9 -0.0194986 7.6 0.0584958C7.5 0.0584958 7.4 0.13649 7.3 0.214485L0.3 5.67409C-0.1 5.98607 -0.1 6.45404 0.3 6.76602C0.7 7.07799 1.3 7.07799 1.7 6.76602L8 1.85237L9 2.63231L14.3 6.76602C14.7 7.07799 15.3 7.07799 15.7 6.76602C16.1 6.45404 16.1 5.98607 15.7 5.67409Z" fill="currentColor" class="  "></path>
              </svg>
            </span>
            <div class="my-5 hidden px-5 text-center peer-checked:block sm:text-left md:block lg:my-8 lg:px-10">
              <ul class="">
                <li class="mb-2">
                  <p class="font-sans text-base lg:text-base lg:leading-6">✓<b class="  "> 10 Request</b></p>
                </li>
                <li class="mb-2">
                  <p class="font-sans text-base lg:text-base lg:leading-6">✓ 100 Url</p>
                </li>
               
              </ul>
            </div>
          </label>
        </div>
      </li>
      <li class="bg-white relative overflow-hidden rounded-lg border border-black shadow-md text-left">
        <div class="mt-8 w-full">
          <span class="absolute top-0 block h-8 w-full bg-blue-700"></span>
          <div class="p-5 text-center md:w-full lg:px-5 lg:py-8">
            <h3 class="font-serif text-xl font-bold lg:text-2xl lg:leading-7">Premium</h3>
            <p class="mt-2 font-sans text-3xl font-bold leading-9 lg:text-5xl">$5/ user</p>
            <p class="mt-2 mb-4 font-sans text-base lg:text-base lg:leading-6">per month, billed annually</p>
            <a href="#" class="mt-5 inline-flex cursor-pointer rounded-full bg-blue-700 px-8 py-2 font-sans text-sm text-white shadow-sm transition hover:translate-y-1 hover:shadow-md hover:shadow-blue-200">Get Started</a>
          </div>
          <span class="block w-full border-b"></span>
          <label for="viewmore-2">
            <input class="peer hidden" type="checkbox" id="viewmore-2" />
            <span class="my-8 mx-auto flex cursor-pointer select-none flex-col items-center text-center normal-case sm:hidden">
              View Features<svg width="16" height="7" viewBox="0 0 16 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="block align-middle text-gray-600">
                <path d="M15.7 5.67409L8.7 0.214485C8.6 0.13649 8.5 0.0584958 8.4 0.0584958C8.2 -0.0194986 7.9 -0.0194986 7.6 0.0584958C7.5 0.0584958 7.4 0.13649 7.3 0.214485L0.3 5.67409C-0.1 5.98607 -0.1 6.45404 0.3 6.76602C0.7 7.07799 1.3 7.07799 1.7 6.76602L8 1.85237L9 2.63231L14.3 6.76602C14.7 7.07799 15.3 7.07799 15.7 6.76602C16.1 6.45404 16.1 5.98607 15.7 5.67409Z" fill="currentColor" class="  "></path>
              </svg>
            </span>
            <div class="my-5 hidden px-5 text-center peer-checked:block sm:text-left md:block lg:my-8 lg:px-10">
              <ul class="">
                <li class="mb-2">
                  <p class="font-sans text-base lg:text-base lg:leading-6">✓<b class="  "> 100 Request </b></p>
                </li>
                <li class="mb-2">
                  <p class="font-sans text-base lg:text-base lg:leading-6">✓ 1000 Url</p>
                </li>
                <li class="mb-2">
                  <p class="font-sans text-base lg:text-base lg:leading-6">✓ Single Sign On (SSO)</p>
                </li>
                <li class="mb-2">
                  <p class="font-sans text-base lg:text-base lg:leading-6">✓ Dedicated Manager</p>
                </li>
                
              </ul>
            </div>
          </label>
        </div>
      </li>
      <li class="bg-white relative overflow-hidden rounded-lg border border-black shadow-md text-left">
        <div class="mt-8 w-full">
          <span class="absolute top-0 block h-8 w-full bg-slate-900"></span>
          <div class="p-5 text-center md:w-full lg:px-5 lg:py-8">
            <h3 class="font-serif text-xl font-bold lg:text-2xl lg:leading-7">Custom</h3>
            <p class="mt-2 font-sans text-3xl font-bold leading-9 lg:text-5xl">Request a Quote</p>
            <p class="mt-2 mb-4 font-sans text-base lg:text-base lg:leading-6">per month, billed annually</p>
            <a href="#" class="mt-5 inline-flex cursor-pointer rounded-full bg-black px-8 py-2 font-sans text-sm text-white shadow-sm transition hover:translate-y-1 hover:shadow-md hover:shadow-slate-300">Get Started</a>
          </div>
          <span class="block w-full border-b"></span>
          <label for="viewmore-3">
            <input class="peer hidden" type="checkbox" id="viewmore-3" />
            <span class="my-8 mx-auto flex cursor-pointer select-none flex-col items-center text-center normal-case sm:hidden">
              View Features<svg width="16" height="7" viewBox="0 0 16 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="block align-middle text-gray-600">
                <path d="M15.7 5.67409L8.7 0.214485C8.6 0.13649 8.5 0.0584958 8.4 0.0584958C8.2 -0.0194986 7.9 -0.0194986 7.6 0.0584958C7.5 0.0584958 7.4 0.13649 7.3 0.214485L0.3 5.67409C-0.1 5.98607 -0.1 6.45404 0.3 6.76602C0.7 7.07799 1.3 7.07799 1.7 6.76602L8 1.85237L9 2.63231L14.3 6.76602C14.7 7.07799 15.3 7.07799 15.7 6.76602C16.1 6.45404 16.1 5.98607 15.7 5.67409Z" fill="currentColor" class="  "></path>
              </svg>
            </span>
            <div class="my-5 hidden px-5 text-center peer-checked:block sm:text-left md:block lg:my-8 lg:px-10">
              <ul class="">
                <li class="mb-2">
                  <p class="font-sans text-base lg:text-base lg:leading-6">✓ <b class="  ">Everything in Premium</b></p>
                </li>
                <li class="mb-2">
                  <p class="font-sans text-base lg:text-base lg:leading-6">✓ Unlimited Outbound Calling.</p>
                </li>
                <li class="mb-2">
                  <p class="font-sans text-base lg:text-base lg:leading-6">✓ Single Sign On (SSO)</p>
                </li>
                <li class="mb-2">
                  <p class="font-sans text-base lg:text-base lg:leading-6">✓ Dedicated Manager</p>
                </li>
                <li class="mb-2">
                  <p class="font-sans text-base lg:text-base lg:leading-6">✓ Unlimited Outbound Calling.</p>
               </li>
              </ul>
            </div>
          </label>
        </div>
      </li>
    </ul>
  </div>
</div>

</div>
  

  

        </>
    )
}
export default Pricing ;