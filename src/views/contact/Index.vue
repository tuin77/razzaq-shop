<template>
  <div class="px-4 mx-auto lg:px-6">
    <div class="relative flex items-center justify-center h-[350px] mx-auto max-w-1620">
      <img class="absolute w-full rounded-20" src="../../assets/images/contact/contact-bg.png" alt="" srcset="" />
      <p class="relative font-bold tracking-tight text-white text-48">How Can We Help?</p>
    </div>
    <div class="grid grid-cols-1 mx-auto mt-120 mb-[150px] gap-x-5 gap-y-16 lg:grid-cols-2 max-w-1620">
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
          class="bg-white rounded-20 w-[600px] h-[422px] mt-[44px]"
        />

        <img
          src="../../assets/images/contact/media-icon.png"
          alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
          class="my-[50px] h-[40px] cursor-pointer"
        />
      </div>
      <form action="#" method="POST" class="">
        <div class="font-bold text-32">CONTACT US FOR ANY QUESTIONS</div>
        <div class="mt-10">
          <label for="Your name" class="text-lg text-gray-200">Your name</label>
          <div class="mt-2">
            <input
              type="text"
              name="Your name"
              id="Your-name"
              autocomplete="organization"
              class="block w-full rounded-md border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="mt-30px">
          <label for="email" class="text-lg text-gray-200">Your email</label>
          <div class="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="block text-xl w-full rounded-md border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="mt-30px">
          <label for="Your name" class="text-lg text-gray-200">Subject</label>
          <div class="mt-2">
            <input
              type="text"
              name="Your name"
              id="Your-name"
              autocomplete="organization"
              class="block text-lg w-full rounded-md border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="mt-30px">
          <label for="message" class="text-lg text-gray-200">Your message (optional)</label>
          <div class="mt-2">
            <textarea
              name="message"
              id="message"
              rows="14"
              class="block text-lg w-full rounded-md border-0 px-3.5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
        <div class="my-30px">
          <button
            type="submit"
            class="rounded-100 bg-primary-700 py-[18px] px-14 text-center text-lg text-white shadow-sm hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
