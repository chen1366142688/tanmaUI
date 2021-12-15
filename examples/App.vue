<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo />
    <div class="card-box">
      <t-card
      imgSrc="3.jpg"
      summary="这是一张美女图片"
      ></t-card>
      <t-card
        imgSrc="4.jpg"
        summary="这是一张美女图片，这也太美了吧"
      >
        <template v-slot:footer>
          <div class="footer">
            <div class="level">中国队.加油</div>
            <div class="price">来自China</div>
          </div>
        </template>
      </t-card>
      <t-card
        imgSrc="7.jpg"
        :width="370"
        :imgHeight="90"
        summary="这是一张美女图片，这也太美了吧,美的不要不要的，让人产生遐想"
      >
        这是一张美女图片，这也太美了吧,美的不要不要的，让人产生遐想
        <template v-slot:footer>
          <div class="footer">
            <div class="level">麻生香织.镁元素</div>
            <div class="price">来自China Man</div>
          </div>
        </template>
      </t-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.card-box {
  display: flex;
  justify-content: space-around;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199A1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}
</style>
