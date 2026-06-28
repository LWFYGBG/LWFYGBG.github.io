import { defineConfig } from 'vitepress'

export default defineConfig({
  // GitHub Pages 部署时取消注释下一行，将 repo-name 替换为仓库名
  // base: '/repo-name/',

  title: 'LWFYGBG',
  description: '探索数学与物理的奥秘 — 个人知识百科站点',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    logo: '/math-logo.svg',

    nav: [
      { text: '首页', link: '/' },
    ],

    sidebar: {
      '/math/': [
        { text: '努力不一定成功，但不努力一定很轻松', link: '/math/' },
        {
          text: 'Re:从0开始的数学生活',
          collapsed: true,
          items: [
            { text: '集合', link: '/math/basics/set' },
            { text: '自然数：皮亚诺公理', link: '/math/basics/natural-numbers' },
            { text: '越来越大的数学世界', link: '/math/basics/number-systems' },
          ],
        },
        {
          text: '微积分（学会本章高数可拿59分）',
          collapsed: true,
          items: [
            { text: '啥是微积分？', link: '/math/calculus/' },

          ],
        },
        { text: '代数学', link: '/math/algebra/' },
        { text: '几何学', link: '/math/geometry/' },
        { text: '数学分析', link: '/math/analysis/' },
        { text: '数论', link: '/math/number-theory/' },
        { text: '拓扑学', link: '/math/topology/' },
        { text: '概率与统计', link: '/math/probability-statistics/' },
        { text: '数学史', link: '/math/history/' },
      ],
      '/math/basics/': [
        {
          text: 'Re:从0开始的数学生活',
          collapsed: false,
          items: [
            { text: '集合', link: '/math/basics/set' },
            { text: '自然数：皮亚诺公理', link: '/math/basics/natural-numbers' },
            { text: '越来越大的数学世界', link: '/math/basics/number-systems' },
          ],
        },
      ],
      '/math/algebra/': [
        {
          text: '代数学',
          collapsed: false,
          items: [
            { text: '概述', link: '/math/algebra/' },
            { text: '初等代数', link: '/math/algebra/elementary-algebra' },
            { text: '线性代数', link: '/math/algebra/linear-algebra' },
            { text: '抽象代数', link: '/math/algebra/abstract-algebra' },
          ],
        },
      ],
      '/math/geometry/': [
        {
          text: '几何学',
          collapsed: false,
          items: [
            { text: '概述', link: '/math/geometry/' },
            { text: '欧几里得几何', link: '/math/geometry/euclidean' },
            { text: '解析几何', link: '/math/geometry/analytic-geometry' },
            { text: '微分几何', link: '/math/geometry/differential-geometry' },
          ],
        },
      ],
      '/math/calculus/': [
        { text: '直接开干微积分', link: '/math/calculus/' },
        {
          text: '映射与函数',
          collapsed: false,
          items: [
            { text: '映射', link: '/math/calculus/mapping/mapping' },
            { text: '函数', link: '/math/calculus/mapping/function' },
            { text: '函数的性质', link: '/math/calculus/mapping/function-properties' },
            { text: '基本初等函数', link: '/math/calculus/mapping/elementary-functions' },
          ],
        },
        { text: '极限',
          collapsed: false,
          items: [
            { text: '数列极限', link: '/math/calculus/limit/sequence-limit' },
            { text: '函数极限', link: '/math/calculus/limit/function-limit' },
          ],
        },
        { text: '导数与微分', link: '/math/calculus/derivative' },
        { text: '不定积分与定积分', link: '/math/calculus/integral' },
        { text: '无穷级数', link: '/math/calculus/infinite-series' },
        { text: '常微分方程', link: '/math/calculus/ode' },
      ],
      '/math/analysis/': [
        {
          text: '数学分析',
          collapsed: false,
          items: [
            { text: '概述', link: '/math/analysis/' },
            { text: '实分析', link: '/math/analysis/real-analysis' },
            { text: '复分析', link: '/math/analysis/complex-analysis' },
            { text: '泛函分析', link: '/math/analysis/functional-analysis' },
          ],
        },
      ],
      '/math/number-theory/': [
        {
          text: '数论',
          collapsed: false,
          items: [
            { text: '概述', link: '/math/number-theory/' },
          ],
        },
      ],
      '/math/topology/': [
        {
          text: '拓扑学',
          collapsed: false,
          items: [
            { text: '概述', link: '/math/topology/' },
          ],
        },
      ],
      '/math/probability-statistics/': [
        {
          text: '概率与统计',
          collapsed: false,
          items: [
            { text: '概述', link: '/math/probability-statistics/' },
          ],
        },
      ],
      '/math/history/': [
        {
          text: '数学史',
          collapsed: false,
          items: [
            { text: '概述', link: '/math/history/' },
            { text: '著名数学家', link: '/math/history/mathematicians' },
          ],
        },
      ],
    },

    search: {
      provider: 'local',
    },

    outline: false,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LWFYGBG' },
    ],

    footer: {
      message: 'LWFYGBG · 以知识之名',
      copyright: 'MIT Licensed',
    },

    editLink: false,

    lastUpdated: {
      text: '最后更新',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    darkModeSwitchLabel: '主题切换',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '语言',
  },

  markdown: {
    math: true,
  },

})
