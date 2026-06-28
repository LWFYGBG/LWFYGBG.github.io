# LWFYGBG 知识百科站点 - 项目状态

## 项目结构
- 个人主页：`docs/index.md`（LWFYGBG 介绍 + "探索知识世界"按钮 → 探索页）
- 探索页：`docs/explore/index.md`（知识世界目录，含数学世界、物理世界入口）
- 数学百科：`docs/math/` 目录下，8 大分支
- 物理百科：`docs/physics/index.md`（占位）
- 导航栏：仅「首页」
- 右侧大纲：已关闭（`outline: false`）
- Edit this page：已关闭（`editLink: false`）

## 数学基础目录（已重写为入门风格）
- `docs/math/basics/set.md` — 集合（从零基础开始）
- `docs/math/basics/natural-numbers.md` — 自然数：皮亚诺公理（含加法/乘法/序的定义与证明）
- `docs/math/basics/number-systems.md` — 越来越大的数学世界（数系扩张 N→Z→Q→R→C）

## 技术配置
- 框架：VitePress，构建命令 `npm run build`
- 部署：GitHub Actions（`.github/workflows/deploy.yml`），推送后自动构建
- 远程仓库：`https://github.com/LWFYGBG/LWFYGBG.github.io`
- 本地 Node：`D:\Ai_math\node\node.exe`
- 本地 Git：`D:\Git\cmd\git.exe`
- 需要在 GitHub 仓库 Settings → Pages → Source 选 GitHub Actions

## 自定义组件
- `BackButton.vue`：返回上级按钮（已注册全局）
- `CategoryCard.vue`：分类卡片（用于数学百科首页）

## 编辑流程
1. 改 `.md` 文件
2. `npm run dev` 本地预览（http://localhost:5173）
3. `git push` → GitHub Actions 自动部署