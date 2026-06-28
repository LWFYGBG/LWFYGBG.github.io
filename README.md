# LWFYGBG 知识百科

个人知识百科站点，基于 **VitePress** 构建，托管于 **GitHub Pages**。

## 站点导航

| 页面 | 地址 |
|------|------|
| 个人主页 | `/` |
| 数学百科 | `/math/` |
| 物理百科 | `/physics/`（建设中） |

## 快速开始

```bash
npm install        # 安装依赖
npm run dev        # 启动本地开发服务器
npm run build      # 构建静态文件
npm run preview    # 本地预览构建结果
```

## 项目结构

```
├── docs/
│   ├── .vitepress/
│   │   ├── config.js           # 站点配置
│   │   └── theme/              # 主题定制
│   ├── public/                 # 静态资源
│   ├── index.md                # 个人主页
│   ├── math/                   # 数学百科
│   │   ├── basics/             # 数学基础
│   │   ├── algebra/            # 代数学
│   │   ├── geometry/           # 几何学
│   │   ├── analysis/           # 数学分析
│   │   ├── number-theory/      # 数论
│   │   ├── topology/           # 拓扑学
│   │   ├── probability-statistics/ # 概率与统计
│   │   └── history/            # 数学史
│   └── physics/                # 物理百科（占位）
├── .github/workflows/deploy.yml # GitHub Actions 自动部署
├── package.json
└── README.md
```

## 技术栈

- [VitePress](https://vitepress.dev/) — 静态站点生成器
- Markdown + LaTeX — 内容编写与数学公式渲染
- GitHub Actions — 自动构建与部署

## 许可证

MIT
