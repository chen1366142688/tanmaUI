# 快速开始

#### 安装组件库

```bash
npm i tanma-ui
```

#### 引用组件库

> 在main.js中引用组件库

```javascript
// 全部引入
import 'tanma-ui/dist/css/index.css'
import TUI from 'tanma-ui'
Vue.use(TUI)

// 按需引入
import 'tanma-ui/dist/css/demo.css'
import { Demo } from 'tanma-ui'
Vue.use(Demo)
```