<template>
  <span class="string" role="treeitem" :aria-level="ariaLevel" :id="id">
    <span class="key">{{ name }}</span>
    <span v-if="name !== ''" class="separator">:&nbsp;</span>
    <span class="quotes">"</span>
    <span class="value">{{ data }}</span>
    <span class="quotes">"</span>
  </span>
</template>

<script>
import { objectToString } from "../util";

export default {
  inheritAttrs: false,
  props: {
    data: {
      required: true,
      validator(data) {
        return objectToString(data) === "String";
      },
    },
    name: {
      required: true,
      type: String,
    },

    id: {
      required: true,
      type: String,
    },
    ariaLevel: {
      required: true,
      type: Number,
    },
  },
};
</script>
