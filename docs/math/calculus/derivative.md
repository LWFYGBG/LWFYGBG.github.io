<BackButton to="/math/calculus/" label="微积分" />

# 导数与微分

## 导数

导数刻画函数在某一点的瞬时变化率：

$$ f'(x) = \frac{df}{dx} = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h} $$

### 基本求导法则

| 函数 | 导数 |
|------|------|
| $x^n$ | $nx^{n-1}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $1/x$ |

**链式法则**：$(f(g(x)))' = f'(g(x)) \cdot g'(x)$

**乘积法则**：$(fg)' = f'g + fg'$

**商法则**：$\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}$

### 中值定理

若 $f$ 在 $[a, b]$ 连续、在 $(a, b)$ 可导，则存在 $c \in (a, b)$ 使得：

$$ f'(c) = \frac{f(b) - f(a)}{b - a} $$
