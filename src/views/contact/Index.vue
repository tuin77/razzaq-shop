<template>
  <div class="px-4 mx-auto lg:px-6">
    <div class="relative flex items-center justify-center h-[350px] mx-auto max-w-1620">
      <img class="absolute w-full rounded-20" src="../../assets/images/contact/contact-bg.png" alt="" srcset="" />
      <p class="relative font-bold tracking-tight text-white text-48">How Can We Help?</p>
    </div>
    <div class="grid items-center grid-cols-1 px-4 mx-auto mt-120 gap-x-8 gap-y-16 sm:px-6 lg:grid-cols-2 max-w-1620">
      <div class="">
        <div class="font-bold text-32">RAZZAQUI LLC</div>
        <p class="mt-4 text-gray-500">PO BX 1976</p>
        <p class="mt-4 text-gray-500">CHINO HILLS, CA 91709</p>
        <p class="mt-4 text-gray-500">Email: xpetstore@razzaquiweb.com</p>
        <p class="mt-4 text-gray-500">Ph: +1 9099255218</p>
        <p class="mt-4 text-gray-500">Customer Service: 1300 237 672</p>
        <img
          src="../../assets/images/contact/contact-example.png"
          alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
          class="bg-white rounded-lg"
        />
        <div>
          <img
            src="../../assets/images/contact/media-icon.png"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            class="bg-gray-100 rounded-lg"
          />
        </div>
      </div>
      <form action="#" method="POST" class="">
        <div class="font-bold tracking-tight text-gray-900 text-l">CONTACT US FOR ANY QUESTIONS</div>
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div class="sm:col-span-2">
            <label for="Your name" class="block text-sm font-semibold leading-6 text-gray-900">Your name</label>
            <div class="mt-2.5">
              <input
                type="text"
                name="Your name"
                id="Your-name"
                autocomplete="organization"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Your email</label>
            <div class="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="Your name" class="block text-sm font-semibold leading-6 text-gray-900">Subject</label>
            <div class="mt-2.5">
              <input
                type="text"
                name="Your name"
                id="Your-name"
                autocomplete="organization"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Your message (optional)</label>
            <div class="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows="4"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <button
            type="submit"
            class="block w-m rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
