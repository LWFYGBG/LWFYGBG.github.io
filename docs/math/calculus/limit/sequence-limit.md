# 数列极限（终于进入正题了）

## 什么是数列？

根据高中数学知识，数列就是一列数（废话）：

$$
a_1, a_2, a_3, \ldots, a_n, \ldots
$$

其中 $a_n$ 称为数列的第 $n$ 项。

## 数列极限的直观理解

所谓极限，从直观上来看，它必然是在某一个过程中才能体现出来的，不能够脱离这个过程谈论极限，这是微积分与初等数学截然不同的地方，这也就是微积分在大学课程中被称为"高等数学"的原因。

对于数列极限，谈论的过程是 $n$ 越来越大的过程（即趋近于无穷大），此时数列的第 $n$ 项 $a_n$ 会逐渐接近某个常数。

### 一个例子：阿喀琉斯追🐢 的故事：
阿喀琉斯是荷马史诗《伊利亚特》的主角，他的故事很多也很有趣，其中一个与我们话题相关的故事是阿喀琉斯追乌龟。

**一些设定：**
- 阿喀琉斯速度：$v_A = 10$ m/s
- 乌龟速度：$v_T = 1$ m/s
- 乌龟提前出发，初始领先距离：$d_0 = 10$ m

**第 1 阶段：**
阿喀琉斯跑到乌龟的起点需要时间：
$$t_1 = \frac{d_0}{v_A} = \frac{10}{10} = 1 \text{秒}$$
这段时间乌龟爬了：$d_1 = v_T \cdot t_1 = 1 \cdot 1 = 1$ m

**第 2 阶段：**
阿喀琉斯再跑这段新距离需要时间：
$$t_2 = \frac{d_1}{v_A} = \frac{1}{10} = 0.1 \text{秒}$$
这段时间乌龟又爬了：$d_2 = v_T \cdot t_2 = 1 \cdot 0.1 = 0.1$ m

**第 3 阶段：**
$$t_3 = \frac{d_2}{v_A} = \frac{0.1}{10} = 0.01 \text{秒}$$
$$d_3 = v_T \cdot t_3 = 0.01 \text{米}$$

**第 n 阶段：**
$$t_n = \frac{d_{n-1}}{v_A} = \frac{10 \cdot \left(\frac{1}{10}\right)^{n-1}}{10} = \frac{1}{10^{n-1}} = \left(\frac{1}{10}\right)^{n-1}$$

**追赶时间数列：**
$$\{t_n\} = \left\{1, \frac{1}{10}, \frac{1}{100}, \frac{1}{1000}, \ldots, \left(\frac{1}{10}\right)^{n-1}, \ldots\right\}$$

此时，一个叫芝诺的人发现，如果这样算下去，阿喀琉斯应该永远追不上乌龟，即$\left(\frac{1}{10}\right)^{n-1}$虽然会越来越小，但还是一个非0的数值，这与实际并不相符，因为阿喀琉斯肯定能追上乌龟，这被称为是芝诺悖论，芝诺悖论引发了第二次数学危机，即牛顿和莱布尼茨对于极限的定义是不够清楚的，需要进行更严格的定义。

## 数列极限的精确定义（ε-N 语言）

设 $\{a_n\}$ 为一个数列，若存在一个常数 $A$，对于**任意**给定的正数 $\varepsilon$，总存在正整数 $N$，使得当 $n > N$ 时，恒有

$$
|a_n - A| < \varepsilon
$$

则称数列 $\{a_n\}$ **收敛于** $A$，记作

$$
\lim_{n \to \infty} a_n = A
$$

或

$$
a_n \to A \quad (n \to \infty)
$$
如果一个数列存在极限，那么这个数列称为收敛的，或者说它收敛到极限A，如果不存在极限，那么这个数列称为发散的。
::: tip 解读
以上的定义方法称为**ε-N 定义**，它是微积分严格化定义的基石，它用简单的数学语言描述了达到极限的过程：对于一个任意要求的精度$\varepsilon$ ，我都能找到一个$N$，从那之后所有的项与极限的差值都满足这一精度要求，由于精度可以无限精确，也就是数列的项可以无限接近极限。
:::

## 例子

### 例 1：阿喀琉斯的追赶时间$\{t_n\}$
如果阿喀琉斯可以追上乌龟，那么应该有
$$
\lim_{n \to \infty} t_n = 0
$$
实际上，在后面无穷级数的部分可以看到，这是能够追上乌龟的必要条件。

**采用数列极限的严格定义**：$\left| t_n - 0 \right|=\frac{1}{10^{n-1}} < \varepsilon \Rightarrow 10^{n-1} > \frac{1}{\varepsilon} \Rightarrow n > 1 -\lg\varepsilon$，因此对于任意 $\varepsilon > 0$，取 $N = \lfloor  1 -\lg\varepsilon \rfloor + 1$，则当 $n > N$ 时：

$$
\left| t_n - 0 \right| = \frac{1}{10^{n-1}} < \frac{1}{10^N} \leq \varepsilon
$$
即
$$
\lim_{n \to \infty} t_n = 0
$$
### 例 2：追赶总时间的极限 $\{S_n\}$
每一阶段的时间构成等比数列：

$$
\{t_n\} = \left\{1, \frac{1}{10}, \frac{1}{100}, \ldots, \frac{1}{10^{n-1}}, \ldots\right\}
$$

这是一个首项 $t_1 = 1$，公比 $q = \frac{1}{10}$ 的等比数列。根据等比数列求和公式：

$$
{S_n} = \sum_{n=1}^{} t_n = \frac{1-q^n}{1-q} 
$$
由于阿喀琉斯必然能够追上乌龟，所以在 $n \to \infty$ 时，$q^n$ 的极限必然为 $0$，即
$$
\lim_{n \to \infty} q^n = 0
$$
这一极限的证明与上个例子完全相同，因此阿喀琉斯追赶乌龟的总时间：
$$
T = \sum_{n=1}^{ \infty} t_n = \frac{1}{1-q} = \frac{1}{1-\frac{1}{10}} = \frac{10}{9} \text{秒}
$$
因此阿喀琉斯必然可以追上乌龟，且时间为1.1秒，符合我们直观上的结论。
::: tip 注意
这个例子的计算过程中，我们只求了 $\lim\limits_{n \to \infty}q^n$ 而不是 $\lim\limits_{n \to \infty}S_n$ ，这是因为其余的部分不涉及极限过程，属于常数，这可以理解为数列极限的一个性质，即如果一个数列相当于另一个数列乘上一个非0的常数，那么二者的极限也是这个关系。
:::
## 收敛数列的性质

### 性质 1：唯一性

**内容**：若数列 $\{a_n\}$ 收敛，则极限值唯一。
::: tip 这一点很容易理解，既然是极限，那就肯定是唯一的，否则其中一个极限的条件必然会包含另一个极限的条件，也就是说另一个极限实际上并不是真正的极限。
:::
**证明**（反证法）：假设 $\{a_n\}$ 有两个不同的极限 $A$ 和 $B$（$A \neq B$）。取 $\varepsilon = \frac{|A-B|}{3} > 0$。

由收敛定义：
- 存在 $N_1$，当 $n > N_1$ 时，$|a_n - A| < \varepsilon$
- 存在 $N_2$，当 $n > N_2$ 时，$|a_n - B| < \varepsilon$

取 $N = \max\{N_1, N_2\}$，当 $n > N$ 时：
$$
|A-B| = |(A-a_n) + (a_n-B)| \leq |a_n-A| + |a_n-B| < 2\varepsilon = \frac{2|A-B|}{3}
$$
矛盾！因此极限唯一。

### 性质 2：有界性

**内容**：若数列 $\{a_n\}$ 收敛，则 $\{a_n\}$ 一定有界。
::: tip 直观上肯定是这样，简要证明可以使用逆否命题，若无界则必然发散，使用定义证明是显然的。
:::
**证明**：设 $\lim\limits_{n \to \infty} a_n = A$。取 $\varepsilon = 1$，则存在 $N$，当 $n > N$ 时：
$$
|a_n - A| < 1 \Rightarrow |a_n| < |A| + 1
$$

取 $M = \max\{|a_1|, |a_2|, \ldots, |a_N|, |A|+1\}$，则对所有 $n$，$|a_n| \leq M$。因此 $\{a_n\}$ 有界。

### 性质 3：保号性

**内容**：若 $\lim\limits_{n \to \infty} a_n = A$ 且 $A > 0$，则存在 $N$，当 $n > N$ 时 $a_n > 0$。
::: tip 保号性是体现高等数学的高等性的第一个性质，因为它真正在反应n趋近于无穷大时数列的行为。
具体来讲，可以设想这样一个数列，它的值在n很小的时候以很大的幅度波动，波动的中心是极限值A，那么在肉眼可见的范围内，数列的项都可以既有正数也有负数，但是只要其极限值大于0，那么为了让它收敛到A，那么数列在趋近无穷大时的项必然都在A附近，自然也就大于0.
:::
**证明**：取 $\varepsilon = \frac{A}{2} > 0$，则存在 $N$，当 $n > N$ 时：
$$
|a_n - A| < \frac{A}{2} \Rightarrow A - \frac{A}{2} < a_n < A + \frac{A}{2} \Rightarrow a_n > \frac{A}{2} > 0
$$

同理，若 $A < 0$，则存在 $N$，当 $n > N$ 时 $a_n < 0$。

### 性质 4：保不等式性

**内容**：若 $\lim\limits_{n \to \infty} a_n = A$，$\lim\limits_{n \to \infty} b_n = B$，且存在 $N_0$，当 $n > N_0$ 时 $a_n \leq b_n$，则 $A \leq B$。
::: tip 保不等式性的原理是一样的，为了收敛，数列的项必然要去靠近极限值，那么在趋近于无穷的时候，如果项满足不等式关系，极限值也就一定满足。
:::
**证明**（反证法）：假设 $A > B$。取 $\varepsilon = \frac{A-B}{2} > 0$。

由收敛定义：
- 存在 $N_1$，当 $n > N_1$ 时，$a_n > A - \varepsilon = \frac{A+B}{2}$
- 存在 $N_2$，当 $n > N_2$ 时，$b_n < B + \varepsilon = \frac{A+B}{2}$

取 $N = \max\{N_0, N_1, N_2\}$，当 $n > N$ 时：
$$
a_n > \frac{A+B}{2} > b_n
$$
与 $a_n \leq b_n$ 矛盾！因此 $A \leq B$。

### 性质 5：子列收敛性

**内容**：若数列 $\{a_n\}$ 收敛于 $A$，则其任意子列 $\{a_{n_k}\}$ 也收敛于 $A$。
::: tip 这里的子数列必须有无穷多项，则必然包含原数列在n趋近于无穷大时的项，因此必然也收敛，下面的证明也是这个思路。
:::
**证明**：设 $\lim\limits_{n \to \infty} a_n = A$。对任意 $\varepsilon > 0$，存在 $N$，当 $n > N$ 时 $|a_n - A| < \varepsilon$。

由于子列下标 $n_k \geq k$，取 $K = N$，当 $k > K$ 时：
$$
n_k > k > K = N \Rightarrow |a_{n_k} - A| < \varepsilon
$$
因此 $\lim\limits_{k \to \infty} a_{n_k} = A$。

### 性质 6：四则运算性质

若 $\lim\limits_{n \to \infty} a_n = A$，$\lim\limits_{n \to \infty} b_n = B$，则：

1. **加法**：$\lim\limits_{n \to \infty} (a_n + b_n) = A + B$
2. **减法**：$\lim\limits_{n \to \infty} (a_n - b_n) = A - B$
3. **乘法**：$\lim\limits_{n \to \infty} (a_n \cdot b_n) = A \cdot B$
4. **除法**：若 $B \neq 0$，则 $\lim\limits_{n \to \infty} \frac{a_n}{b_n} = \frac{A}{B}$
::: tip 四则运算性质是极限最常用到的性质，但其证明十分繁琐，感兴趣的读者可以查阅课本上的证明。
:::

### 性质 7：夹逼准则（迫敛性）

**内容**：若存在 $N_0$，当 $n > N_0$ 时 $a_n \leq c_n \leq b_n$，且 $\lim\limits_{n \to \infty} a_n = \lim\limits_{n \to \infty} b_n = A$，则 $\lim\limits_{n \to \infty} c_n = A$。
::: tip 全体起立！这是极限中最为有名也有用的一个性质，它看起来是显然的，但在很多极限问题中，都需要使用这个性质。
:::
**证明**：对任意 $\varepsilon > 0$，由收敛定义：
- 存在 $N_1$，当 $n > N_1$ 时，$|a_n - A| < \varepsilon$，即 $A - \varepsilon < a_n$
- 存在 $N_2$，当 $n > N_2$ 时，$|b_n - A| < \varepsilon$，即 $b_n < A + \varepsilon$

取 $N = \max\{N_0, N_1, N_2\}$，当 $n > N$ 时：
$$
A - \varepsilon < a_n \leq c_n \leq b_n < A + \varepsilon \Rightarrow |c_n - A| < \varepsilon
$$
因此 $\lim\limits_{n \to \infty} c_n = A$。

## 数列极限审敛方法

### 方法 1：单调有界准则

**内容**：单调递增且有上界的数列必收敛；单调递减且有下界的数列必收敛。

::: tip 这个准则的直观理解是显然的，一个数列如果一直变大但是不能超过某个数，那么它必然会收敛到这个数附近，这个数也就是它的上确界。
:::

**证明**（以单调递增有上界为例）：设 $\{a_n\}$ 单调递增且有上界，由确界原理，存在上确界 $A$。

对任意 $\varepsilon > 0$，由于 $A$ 是上确界，存在 $N$，使得 $a_N > A - \varepsilon$。

又因为 $\{a_n\}$ 单调递增，当 $n > N$ 时：
$$
A - \varepsilon < a_N \leq a_n \leq A < A + \varepsilon
$$
即 $|a_n - A| < \varepsilon$，因此 $\lim\limits_{n \to \infty} a_n = A$。

### 方法 2：柯西收敛准则（柯西审敛原理）

**内容**：数列 $\{a_n\}$ 收敛的充要条件是：对任意 $\varepsilon > 0$，存在 $N$，当 $m, n > N$ 时，恒有 $|a_m - a_n| < \varepsilon$。

::: tip 柯西收敛准则的意义在于，它只依赖数列自身的项，而不需要知道极限值。直观上，收敛数列的项在n很大时应该"靠得很近"。
:::

**证明**（必要性）：设 $\lim\limits_{n \to \infty} a_n = A$。对任意 $\varepsilon > 0$，取 $\varepsilon' = \frac{\varepsilon}{2}$，存在 $N$，当 $n > N$ 时 $|a_n - A| < \varepsilon'$。

当 $m, n > N$ 时：
$$
|a_m - a_n| = |(a_m - A) + (A - a_n)| \leq |a_m - A| + |a_n - A| < 2\varepsilon' = \varepsilon
$$

### 方法 4：比值判别法（达朗贝尔判别法）

**内容**：设 $\{a_n\}$ 为正项数列，若 $\lim\limits_{n \to \infty} \frac{a_{n+1}}{a_n} = L$，则：

1. 当 $L < 1$ 时，数列 $\{a_n\}$ 收敛于 0
2. 当 $L > 1$ 时，数列 $\{a_n\}$ 发散到 $\infty$
3. 当 $L = 1$ 时，判别法失效

### 方法 5：根值判别法（柯西判别法）

**内容**：设 $\{a_n\}$ 为非负数列，若 $\lim\limits_{n \to \infty} \sqrt[n]{a_n} = L$，则：

1. 当 $L < 1$ 时，数列 $\{a_n\}$ 收敛于 0
2. 当 $L > 1$ 时，数列 $\{a_n\}$ 发散到 $\infty$
3. 当 $L = 1$ 时，判别法失效

## （第二）重要极限

$\lim\limits_{n \to \infty} \left(1 + \dfrac{1}{n}\right)^n = e$

### 极限的证明

**证明**：设 $a_n = \left(1 + \frac{1}{n}\right)^n$，我们证明 $\{a_n\}$ 单调递增且有上界。

由二项式定理：
$$
\begin{align*}
a_n &= \sum_{k=0}^{n} \binom{n}{k} \cdot \frac{1}{n^k} \\
&= 1 + \sum_{k=1}^{n} \frac{n(n-1)\cdots(n-k+1)}{k! \cdot n^k} \\
&= 1 + \sum_{k=1}^{n} \frac{1}{k!} \cdot \left(1 - \frac{1}{n}\right)\left(1 - \frac{2}{n}\right)\cdots\left(1 - \frac{k-1}{n}\right)
\end{align*}
$$

同理：
$$
a_{n+1} = 1 + \sum_{k=1}^{n+1} \frac{1}{k!} \cdot \left(1 - \frac{1}{n+1}\right)\left(1 - \frac{2}{n+1}\right)\cdots\left(1 - \frac{k-1}{n+1}\right)
$$

比较 $a_n$ 和 $a_{n+1}$：
- $a_{n+1}$ 的项数比 $a_n$ 多一项（$k=n+1$），且该项为正
- 对于相同的 $k$，$a_{n+1}$ 中每个因子 $\left(1 - \frac{i}{n+1}\right) > \left(1 - \frac{i}{n}\right)$

因此 $a_n < a_{n+1}$，即 $\{a_n\}$ 单调递增。

再证明 $\{a_n\}$ 有上界：
$$
\begin{align*}
a_n &= 1 + \sum_{k=1}^{n} \frac{1}{k!} \cdot \left(1 - \frac{1}{n}\right)\cdots\left(1 - \frac{k-1}{n}\right) \\
&< 1 + \sum_{k=1}^{n} \frac{1}{k!} \\
&< 1 + \sum_{k=1}^{n} \frac{1}{2^{k-1}} \\
&= 1 + \frac{1 - \frac{1}{2^n}}{1 - \frac{1}{2}} \\
&= 3 - \frac{1}{2^{n-1}} < 3
\end{align*}
$$

由单调有界准则，$\{a_n\}$ 收敛，记极限为 $e$，即：
$$
\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e
$$

### 常数 e 的意义

$e$ 是自然对数的底数，是一个无理数，其近似值为：
$$
e \approx 2.718281828459045\cdots
$$

$e$ 在数学中具有重要地位：
- 自然对数 $\ln x = \log_e x$
- 指数函数 $e^x$ 的导数等于自身
- 复利计算的极限形式

### 重要变形

1. **连续变量形式**：
$$
\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e
$$

2. **另一种形式**：
$$
\lim_{x \to 0} (1 + x)^{\frac{1}{x}} = e
$$

3. **一般形式**：
$$
\lim_{n \to \infty} \left(1 + \frac{k}{n}\right)^n = e^k
$$

## 思考


