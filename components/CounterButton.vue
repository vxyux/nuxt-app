<template>
  <div>
    <div class="custom-number-input w-32 float-right rounded-xl">
      <div class="flex flex-row h-10 w-full relative bg-transparent">
        <button
          data-action="decrement"
          @click="$emit('changeQuantity', amount - 1)"
          class="bg-gray-300 px-2 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l-full cursor-pointer outline-none"
        >
          <span class="m-auto text-2xl font-thin">-</span>
        </button>
        <input
          type="number"
          class="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
          name="custom-input-number"
          readonly
          :value="amount"
          max="100"
        />
        <button
          data-action="increment"
          @click="$emit('changeQuantity', amount + 1)"
          class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r-full cursor-pointer"
        >
          <span class="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { initCustomFormatter } from "vue";

export type CounterButtonProps = {
  amount: number;
};

const props = defineProps<CounterButtonProps>();
</script>

<style scoped></style>
