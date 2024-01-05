<template>
  <table class="table-fixed">
    <thead>
      <tr>
        <th>PRODUCT</th>
        <th>PRICE</th>
        <th>QUANTITY</th>
        <th>SUBTOTAL</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div>
            <p>Wall Suction Soft Durable Bath Massage Brush – BlueFrom wishlist:Default wishlist</p>
          </div>
        </td>
        <td>HK$272.95</td>
        <td>
          <div>HK$272.95</div>
          <div>
            <SfThumbnail size="xl" class="flex items-center justify-center bg-gray-100">
              <SfIconFavorite />
            </SfThumbnail>
            Save for later
          </div>
        </td>
      </tr>
      <tr>
        <td>Witchy Woman</td>
        <td>The Eagles</td>
        <td>1972</td>
      </tr>
      <tr>
        <td>Shining Star</td>
        <td>Earth, Wind, and Fire</td>
        <td>1975</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { SfThumbnail, SfIconFavorite } from "@storefront-ui/vue";
import { ref } from "vue";
// https://tailwind.nodejs.cn/docs/table-layout
</script>
