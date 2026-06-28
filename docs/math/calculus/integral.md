<BackButton to="/math/calculus/" label="微积分" />

# 不定积分与定积分

### 不定积分

求导的逆运算：$\int f'(x) \, dx = f(x) + C$

### 定积分

$$ \int_a^b f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i^*) \Delta x $$

几何意义：曲线 $y = f(x)$ 与 $x$ 轴在 $[a, b]$ 上围成的"有向面积"。

### 微积分基本定理

连接微分与积分的桥梁：

1. $\frac{d}{dx} \int_a^x f(t) \, dt = f(x)$
2. $\int_a^b f(x) \, dx = F(b) - F(a)$，其中 $F' = f$

### 积分技巧

- 换元法：$\int f(g(x)) g'(x) \, dx = \int f(u) \, du$
- 分部积分：$\int u \, dv = uv - \int v \, du$
- 部分分式：有理函数积分
