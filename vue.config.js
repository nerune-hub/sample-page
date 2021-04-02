module.exports = {
  // outputDir: './docs', //githubpages用 distの代わり
  publicPath: process.env.NODE_ENV === 'production'
    ? '/weather-app/'   //任意
    : '/'
}

// ページが真っ白なため上から変更
// module.exports = {
//     baseUrl: './',
//     outputDir: 'docs/'
// }
