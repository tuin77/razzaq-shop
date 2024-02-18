<script setup lang="ts">
import { SfInput, SfButton } from "@storefront-ui/vue";
import useStore from "@/stores";
import Message from "@/components/message/index";
import { reactive } from "vue";
import router from "@/router";

// 获取会员 Store
const { member } = useStore();

const form = reactive({
  mobile: "15601691300@163.com",
  password: "buzhidao",
});
// 登录按钮
const login = () => {
  // 简单的非空校验
  if (form.mobile === "") {
    Message.text("用户名不能为空");
    return;
  }
  if (form.password === "") {
    Message.text({ type: "warn", text: "密码不能为空" });
    return;
  }
  // 调用发送登录请求
  member.login(form);
};
const toPageHome = () => {
  router.push({ name: "home" });
};
</script>
<template>
  <div class="flex flex-col justify-center px-6 py-12 lg:px-8">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[750px] login-form rounded-[10px]">
      <div class="">
        <img class="w-auto h-10 mx-auto" src="../assets/images/logo.svg" alt="Your Company" />
        <h2 class="mt-10 mb-[46px] font-bold text-center text-blod text-32">LOGIN</h2>
      </div>
      <div class="space-y-6">
        <div>
          <label for="email" class="text-lg leading-6 text-blod-100">* Username or email address</label>
          <div class="mt-5">
            <SfInput v-model="form.mobile" type="email" autocomplete="email" name="email" placeholder="Username or email address" required />
          </div>
        </div>

        <div>
          <label for="password" class="text-lg leading-6 text-blod-100">* Password</label>

          <div class="mt-5">
            <SfInput v-model="form.password" name="password" placeholder="password" type="password" required />
          </div>
        </div>

        <div>
          <SfButton
            aria-label="Close navigation menu"
            class="w-full py-3.5 !text-2xl !rounded-100 text-block"
            @click="login"
            @keydown.enter.space="login"
          >
            LOG IN
          </SfButton>
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
      </div>
    </div>
    <div class="flex justify-center sm:mx-auto sm:w-full sm:max-w-[750px] flex mt-10">
      <button class="flex items-center" @click="toPageHome">
        <img class="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75" src="../assets/images/login/icon-left-arrow.svg" alt="Your Company" />
        <span href="#" class="pl-5 text-2xl text-bold-100">Return to home page</span>
      </button>
    </div>
  </div>
</template>
<style>
.login-form {
  padding: 55px 80px;
  box-shadow: 0px 0px 20px 0px #0000001a;
}
</style>
