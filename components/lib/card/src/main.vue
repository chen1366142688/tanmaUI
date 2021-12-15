<template>
  <div class="t-card" :style="width? {width: width + 'px'} : {}">
    <div class="t-card-img" :style="imgHeight? {height: imgHeight + 'px'} : {}">
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="t-card-summary">
      {{summary}}
    </div>
    <div v-else class="t-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 't-card',
  props: {
    width: { // 卡片宽度
      type: Number,
      default: 0
    },
    imgSrc: { //卡片图片资源
      type: String,
      default: '',
    },
    imgHeight: { //卡片图片的高度
      type: Number,
      default: 0
    },
    summary: { //卡片图片摘要
      type: String,
      degfault: ''
    }
  }
}
</script>