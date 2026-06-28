---
layout: home

hero:
  name: 知识世界
  text: 选择一个领域开始探索
  tagline: 每个学科都是一扇通往新世界的大门
  image:
    src: /math-logo.svg
    alt: 探索
  actions:
    - theme: brand
      text: 返回首页
      link: /
---

<div class="home-content">

## 知识目录

<div class="world-grid">

<a href="/math/" class="world-card" style="--card-accent: #7c3aed;">
  <div class="world-icon">∑</div>
  <h3>数学世界</h3>
  <p>人急了什么都能做出来，只有数学不会，因为数学不会就是不会</p>
  <span class="world-badge">进入世界 →</span>
</a>

<a href="/physics/" class="world-card" style="--card-accent: #dc2626;">
  <div class="world-icon">⚛</div>
  <h3>物理世界</h3>
  <p>经典力学、电磁学、量子力学、相对论、宇宙学</p>
  <span class="world-badge">建设中</span>
</a>

</div>

<div class="more-coming">
  <p>✦ 更多世界正在开启中 ✦</p>
</div>

</div>

<style>
.home-content {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px 3rem;
}

.home-content h2 {
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  border-bottom: none;
  text-align: center;
  letter-spacing: 2px;
}

.world-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 0.5rem 0;
}

.world-card {
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 2rem 1.5rem;
  background: var(--vp-c-bg-soft);
  transition: all 0.35s ease;
  text-decoration: none !important;
  color: var(--vp-c-text-1) !important;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.world-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--card-accent);
}

.world-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
}

.world-icon {
  font-size: 2.8rem;
  line-height: 1;
  margin-bottom: 0.8rem;
}

.world-card h3 {
  margin: 0 0 0.6rem 0 !important;
  font-size: 1.25rem !important;
  font-weight: 600 !important;
  border: none !important;
  padding: 0 !important;
  color: var(--card-accent) !important;
}

.world-card p {
  margin: 0 0 1rem 0 !important;
  font-size: 0.88rem;
  line-height: 1.6;
  opacity: 0.75;
}

.world-badge {
  display: inline-block;
  font-size: 0.8rem;
  padding: 3px 12px;
  border-radius: 20px;
  background: var(--card-accent);
  color: #fff !important;
  opacity: 0.85;
}

.more-coming {
  text-align: center;
  margin-top: 3rem;
  opacity: 0.5;
  font-size: 0.95rem;
  letter-spacing: 3px;
}

@media (max-width: 640px) {
  .world-grid {
    grid-template-columns: 1fr;
  }
}
</style>
