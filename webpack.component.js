const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const glob = require('glob');
const list = {};
/**
 * @object {
 *  card: './components/lib/card/index.js',
 * }
 * 需要动态读取文件夹，不能逐个引入
 * **/
async function makeList(dirPath, list) { 
  const files = glob.sync(`${dirPath}/**/index.js`)
  for (let file of files) { 
    const component = file.split(/[/.]/)[2];
    console.log(component)
    list[component] = `./${file}`
  }
  console.log(list)
}

makeList('components/lib', list)

module.exports = {
  entry: list,
  mode: 'development',
  output: {
    filename: '[name].umd.js', //card.umd.js
    path: path.resolve(__dirname, 'dist'),
    library: 'tui',
    libraryTarget: 'umd'
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          }
        ]
      }
    ]
  }
};