<template>
  <div id="app">
    <Demo />
    <t-card imgSrc="4.jpg" summary="Card Summary"/>
    <t-table :maxHeight="500" tableId="testTable" :border="1" textAlign="center"></t-table>
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
