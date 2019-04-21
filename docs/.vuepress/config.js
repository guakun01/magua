module.exports = {
  title: '麻瓜',
  description: '快看, 麻瓜ui',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '仓库地址', link: 'https://github.com/guakun01/magua' },
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/'
        ],
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
        ],
      },
    ]
  }
}
