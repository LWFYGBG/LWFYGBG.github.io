<BackButton to="/math/algebra/" label="代数学" />

# 抽象代数

抽象代数研究群、环、域、模等代数结构的公理性质，是现代数学的核心分支之一。

## 群论

**群** $(G, \ast)$ 是一个集合 $G$ 连同二元运算 $\ast$，满足：
1. **封闭性**：$a \ast b \in G$
2. **结合律**：$(a \ast b) \ast c = a \ast (b \ast c)$
3. **单位元**：存在 $e \in G$ 使 $e \ast a = a \ast e = a$
4. **逆元**：对每个 $a$ 存在 $a^{-1}$ 使 $a \ast a^{-1} = e$

若还满足交换律 $a \ast b = b \ast a$，则称为**交换群**（阿贝尔群）。

### 例子

- $(\mathbb{Z}, +)$：整数加法群（阿贝尔群）
- $S_n$：$n$ 个元素的置换群，$|S_n| = n!$
- $D_n$：正 $n$ 边形的二面体群（对称群）
- $GL_n(\mathbb{R})$：$n \times n$ 可逆实矩阵群

### 子群与陪集

$H \leq G$ 是子群。$aH = \{ah \mid h \in H\}$ 是 $H$ 的左陪集。

**拉格朗日定理**：若 $G$ 是有限群，则 $|H|$ 整除 $|G|$。

### 正规子群与商群

子群 $N \trianglelefteq G$ 是正规子群，若对所有 $g \in G$ 有 $gNg^{-1} = N$。

商群 $G/N$ 由陪集构成，运算是 $(aN)(bN) = (ab)N$。

### 同态基本定理

若 $\phi: G \to H$ 是群同态，则：

$$ G / \ker \phi \cong \operatorname{Im} \phi $$

## 环论

**环** $(R, +, \cdot)$ 是一个集合 $R$ 连同两种运算，满足：
- $(R, +)$ 是阿贝尔群
- $\cdot$ 满足结合律
- 分配律：$a(b+c) = ab + ac$，$(a+b)c = ac + bc$

### 重要类型

| 环类型 | 定义 | 例子 |
|--------|------|------|
| 交换环 | 乘法可交换 | $\mathbb{Z}$ |
| 整环 | 无零因子 | $\mathbb{Z}$ |
| 域 | 非零元有乘法逆 | $\mathbb{R}, \mathbb{C}$ |

### 理想与商环

$I \subseteq R$ 是**理想**，若 $(I, +)$ 是子群且 $ri, ir \in I$ 对所有 $r \in R$。

商环 $R/I$ 由陪集 $\{r + I\}$ 构成。

## 域论

**域**是交换除环。$(\mathbb{F}, +, \cdot)$ 中非零元构成乘法群。

### 域扩张

若 $\mathbb{F} \subseteq \mathbb{K}$ 是域扩张，记 $\mathbb{K}/\mathbb{F}$。扩张次数 $[\mathbb{K} : \mathbb{F}] = \dim_{\mathbb{F}} \mathbb{K}$。

### 伽罗瓦理论

伽罗瓦理论建立了域扩张的中间域与伽罗瓦群的子群之间的一一对应。

对于多项式 $f(x)$ 的分裂域 $E/\mathbb{F}$，其伽罗瓦群 $G = \operatorname{Gal}(E/\mathbb{F})$ 是 $\mathbb{F}$-自同构群。对于 $f(x)$ 可根式解当且仅当 $G$ 是可解群。

这意味着**五次及以上的一般多项式没有求根公式**（阿贝尔-鲁菲尼定理）。

## 同调代数

同调代数使用链复形和同调群来研究代数结构。它提供了强大的不变量，在拓扑学、代数几何和表示论中至关重要。

$$ \cdots \to C_{n+1} \xrightarrow{\partial_{n+1}} C_n \xrightarrow{\partial_n} C_{n-1} \to \cdots $$

$$ H_n(C_\bullet) = \ker \partial_n / \operatorname{Im} \partial_{n+1} $$
