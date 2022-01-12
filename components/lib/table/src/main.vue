<template>
  <div class="t-table-wrapper" :style="maxHeight ? {maxHeight: maxHeight + 'px'} : {maxHeight:'100%'}">
    <div class="addDelteBtnGroup">
      <button>增加列</button>
      <button style="margin-left:20px">删除列</button>
    </div>
    <table :id="tableId" :ref="tableId" :border="border?border : 1" :width="tableWidth?tableWidth:'100%'">
      <!-- 表头 -->
      <thead class="tHead">
        <tr>
          <th :style="{textAlign:textAlign}">表头1</th>
        </tr>
      </thead>
      <tbody class="tBody">
        <tr>
          <td :style="{textAlign:textAlign}">内容1</td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: 't-table',
  props: {
    tableId:{
      type: String,
      default: 'table-box'
    },
    border:{
      type:Number,
      default:1
    },
    maxHeight: { // 最大高度
      type: Number,
      default: 0
    },
    tableWidth:{
      type: Number,
      default:0
    },
    textAlign: {
      type: String,
      default: 'center'
    },
    // listColumns:{
    //   type: Array,
    //   default: []
    // }
  }
}
</script>