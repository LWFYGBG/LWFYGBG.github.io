<BackButton to="/math/algebra/" label="代数学" />

# 初等代数

初等代数是代数学的基础部分，研究数系的基本性质和代数运算的规律。

## 数系

数的系统从自然数逐步扩展：

$$ \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C} $$

| 数系 | 符号 | 描述 |
|------|------|------|
| 自然数 | $\mathbb{N}$ | $\{0, 1, 2, 3, \ldots\}$ |
| 整数 | $\mathbb{Z}$ | $\{\ldots, -2, -1, 0, 1, 2, \ldots\}$ |
| 有理数 | $\mathbb{Q}$ | $\{\frac{p}{q} \mid p, q \in \mathbb{Z}, q \neq 0\}$ |
| 实数 | $\mathbb{R}$ | 有理数和无理数的全体 |
| 复数 | $\mathbb{C}$ | $\{a + bi \mid a, b \in \mathbb{R}, i^2 = -1\}$ |

## 多项式

多项式是形如以下形式的表达式：

$$ P(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0 $$

其中 $a_n \neq 0$，$n$ 称为多项式的**次数**。

### 一元二次方程

一元二次方程 $ax^2 + bx + c = 0$（$a \neq 0$）的求根公式为：

$$ x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$

判别式 $\Delta = b^2 - 4ac$ 决定根的性质：
- $\Delta > 0$：两个不等实根
- $\Delta = 0$：一个重根
- $\Delta < 0$：两个共轭复根

### 韦达定理

对于二次方程 $ax^2 + bx + c = 0$ 的两个根 $x_1, x_2$：

$$ x_1 + x_2 = -\frac{b}{a}, \quad x_1 x_2 = \frac{c}{a} $$

## 指数与对数

### 指数律

$$ a^m \cdot a^n = a^{m+n}, \quad (a^m)^n = a^{mn}, \quad a^{-n} = \frac{1}{a^n} $$

### 对数

$$ \log_a (MN) = \log_a M + \log_a N, \quad \log_a \frac{M}{N} = \log_a M - \log_a N $$
$$ \log_a M^n = n \log_a M, \quad \log_a b = \frac{\log_c b}{\log_c a} $$

自然对数 $\ln x = \log_e x$，其中 $e = 2.718281828\ldots$

## 数列与级数

### 等差数列

$$ a_n = a_1 + (n-1)d, \quad S_n = \frac{n(a_1 + a_n)}{2} $$

### 等比数列

$$ a_n = a_1 q^{n-1}, \quad S_n = a_1 \cdot \frac{1 - q^n}{1 - q} \quad (q \neq 1) $$

### 无穷等比级数

当 $|q| < 1$ 时：

$$ \sum_{k=0}^{\infty} a_1 q^k = \frac{a_1}{1 - q} $$
