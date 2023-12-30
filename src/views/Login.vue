<template>
  <div class="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[750px] login-form">
      <div class="">
        <img class="w-auto h-10 mx-auto" src="../assets/images/logo.svg" alt="Your Company" />
        <h2 class="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">LOGIN</h2>
      </div>
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">* Username or email address</label>
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">* Password</label>

          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            LOG IN
          </button>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <div class="flex items-center text-sm">
              <input
                id="checkbox-2"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label for="checkbox-2" class="text-sm font-medium text-gray-900 ms-2">Remember me</label>
            </div>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 underline underline-offset-4 hover:text-indigo-500">Lost your password?</a>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="sm:mx-auto sm:w-full sm:max-w-[750px] flex mt-10 text-sm text-gray-500">
      <img class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75" src="../assets/images/login/icon-left-arrow.svg" alt="Your Company" />
      <span href="#" class="pl-5 font-semibold leading-6 text-gray-400 group-hover:text-gray-900">Return to home page</span>
    </div>
  </div>
</template>
<style>
.login-form {
  padding: 55px 80px;
  box-shadow: 0px 0px 20px 0px #0000001a;
}
</style>
