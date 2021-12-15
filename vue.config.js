module.exports = { //更改src文件夹名称后找不到启动文件src/main.js,故而需要重新什么声明启动项目目录结构
  pages: {
    index: {
      entry: 'examples/main.js',
      templates: 'public/index.html',
      filename: 'index.html'
    }
  }
}