module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/weather-app/'   //任意
    : '/',
  outputDir: 'docs/'
}

// ページが真っ白なため上から変更
// module.exports = {
//     baseUrl: './',
//     outputDir: 'docs/'
// }
