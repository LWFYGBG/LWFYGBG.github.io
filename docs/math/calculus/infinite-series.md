<BackButton to="/math/calculus/" label="微积分" />

# 无穷级数

### 泰勒级数

将函数表示为幂级数：

$$ f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(a)}{n!} (x - a)^n $$

常见展开式：

$$ e^x = \sum_{n=0}^\infty \frac{x^n}{n!}, \quad \sin x = \sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{(2n+1)!}, \quad \cos x = \sum_{n=0}^\infty \frac{(-1)^n x^{2n}}{(2n)!} $$

### 傅里叶级数

将周期函数表示为三角级数：

$$ f(x) = \frac{a_0}{2} + \sum_{n=1}^\infty \left(a_n \cos\frac{2\pi n x}{T} + b_n \sin\frac{2\pi n x}{T}\right) $$

其中系数通过积分确定。
