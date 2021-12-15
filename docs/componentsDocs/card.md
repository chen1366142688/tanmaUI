# Card
卡片组件

### 示例

<t-card imgSrc="tanmaUI/1.jpg" summary="Card Summary"/>

### 代码
```html
<t-card imgSrc="/1.jpg" summary="Card Summary"/>
```

### Attributes

| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---  |  --- | --- |   ---   |  ---  |
| width | 卡片的宽度 | Number | false | - |
| imgSrc | 图片资源地址 | String | true | - |
| imgHeight | 图片高度 | Number | false | - |
| summary | 卡片概要 | String/Slot | false | - |
| footer | 卡片底部 | Slot | false | - |