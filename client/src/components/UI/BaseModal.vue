<template>
  <div
    class="fixed top-1/2 left-[10%] z-50 mx-auto flex w-4/5 -translate-y-1/2 flex-col gap-8 rounded-md bg-white py-10 px-8"
  >
    <div>
      <slot name="title"></slot>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
    <div>
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script setup></script>
