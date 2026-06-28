<BackButton to="/math/algebra/" label="代数学" />

# 线性代数

线性代数是研究向量空间和线性变换的数学分支。它是现代科学计算、数据科学和量子力学的核心数学工具。

## 向量空间

**向量空间**（或线性空间）$V$ 是在域 $\mathbb{F}$ 上定义了加法和标量乘法的集合，满足八条公理。

### 基本概念

- **向量**：空间中的元素，记为 $\mathbf{v}, \mathbf{w}$
- **标量**：域中的元素，记为 $a, b$
- **零向量**：$\mathbf{0}$ 满足 $\mathbf{v} + \mathbf{0} = \mathbf{v}$

### 线性组合

向量 $\mathbf{v}_1, \ldots, \mathbf{v}_n$ 的线性组合为：

$$ a_1 \mathbf{v}_1 + a_2 \mathbf{v}_2 + \cdots + a_n \mathbf{v}_n $$

- **线性无关**：只有当所有 $a_i = 0$ 时线性组合才等于 $\mathbf{0}$
- **张成（Span）**：所有线性组合的集合
- **基**：线性无关且张成整个空间的向量组
- **维数**：基中向量的个数，记为 $\dim V$

### 常见向量空间

- $\mathbb{R}^n$：$n$ 维实向量空间，$\dim \mathbb{R}^n = n$
- $\mathbb{F}^{m \times n}$：$m \times n$ 矩阵空间，维数 $mn$
- $P_n$：次数 $\leq n$ 的多项式空间，维数 $n+1$

## 线性变换

线性变换 $T: V \to W$ 满足：

$$ T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v}), \quad T(a\mathbf{v}) = aT(\mathbf{v}) $$

### 矩阵表示

选定基后，线性变换可以用矩阵表示。若 $T(\mathbf{v}) = A\mathbf{v}$，则：

$$ A = [T(\mathbf{e}_1) \; T(\mathbf{e}_2) \; \cdots \; T(\mathbf{e}_n)] $$

### 核与像

- 核（Kernel）：$\ker T = \{\mathbf{v} \in V \mid T(\mathbf{v}) = \mathbf{0}\}$
- 像（Image）：$\operatorname{Im} T = \{T(\mathbf{v}) \mid \mathbf{v} \in V\}$

**维数定理**：$\dim(\ker T) + \dim(\operatorname{Im} T) = \dim V$

## 特征值与特征向量

若 $A\mathbf{v} = \lambda \mathbf{v}$ 且 $\mathbf{v} \neq \mathbf{0}$，则 $\lambda$ 是**特征值**，$\mathbf{v}$ 是对应的**特征向量**。

特征方程：$\det(A - \lambda I) = 0$

## 内积与正交性

**内积空间**是带有内积的向量空间。在 $\mathbb{R}^n$ 中，标准内积为：

$$ \langle \mathbf{u}, \mathbf{v} \rangle = \mathbf{u}^T \mathbf{v} = \sum_{i=1}^n u_i v_i $$

### 范数与距离

$$ \|\mathbf{v}\| = \sqrt{\langle \mathbf{v}, \mathbf{v} \rangle}, \quad d(\mathbf{u}, \mathbf{v}) = \|\mathbf{u} - \mathbf{v}\| $$

**柯西-施瓦茨不等式**：$|\langle \mathbf{u}, \mathbf{v} \rangle| \leq \|\mathbf{u}\| \cdot \|\mathbf{v}\|$

### 格拉姆-施密特正交化

从一组线性无关的向量 $\{\mathbf{v}_1, \ldots, \mathbf{v}_n\}$ 构造正交基 $\{\mathbf{u}_1, \ldots, \mathbf{u}_n\}$：

$$ \mathbf{u}_1 = \mathbf{v}_1, \quad \mathbf{u}_k = \mathbf{v}_k - \sum_{i=1}^{k-1} \frac{\langle \mathbf{v}_k, \mathbf{u}_i \rangle}{\langle \mathbf{u}_i, \mathbf{u}_i \rangle} \mathbf{u}_i $$

## 应用：最小二乘法

对于超定方程组 $A\mathbf{x} \approx \mathbf{b}$，最小二乘解为：

$$ \mathbf{x}^* = (A^T A)^{-1} A^T \mathbf{b} $$

这是线性回归的数学基础。
