<BackButton to="/math/geometry/" label="几何学" />

# 微分几何

微分几何运用微积分和线性代数研究曲线、曲面和高维流形的几何性质。它在广义相对论、计算机图形学和机器学习中有重要应用。

## 曲线论

### 曲线的参数化

空间曲线由参数方程 $\mathbf{r}(t) = (x(t), y(t), z(t))$ 描述。

切向量：$\mathbf{r}'(t) = \frac{d\mathbf{r}}{dt}$

弧长参数 $s$：$s(t) = \int_{t_0}^t \|\mathbf{r}'(\tau)\| \, d\tau$

### 曲率与挠率

使用弧长参数 $s$ 的单位切向量 $\mathbf{T} = \frac{d\mathbf{r}}{ds}$：

**曲率**：$\kappa = \left\|\frac{d\mathbf{T}}{ds}\right\| = \frac{\|\mathbf{r}' \times \mathbf{r}''\|}{\|\mathbf{r}'\|^3}$

**主法向量**：$\mathbf{N} = \frac{1}{\kappa} \frac{d\mathbf{T}}{ds}$

**副法向量**：$\mathbf{B} = \mathbf{T} \times \mathbf{N}$

**挠率**：$\tau = -\frac{d\mathbf{B}}{ds} \cdot \mathbf{N}$

### 弗雷内-塞雷公式

$$ \frac{d}{ds} \begin{pmatrix} \mathbf{T} \\ \mathbf{N} \\ \mathbf{B} \end{pmatrix} = \begin{pmatrix} 0 & \kappa & 0 \\ -\kappa & 0 & \tau \\ 0 & -\tau & 0 \end{pmatrix} \begin{pmatrix} \mathbf{T} \\ \mathbf{N} \\ \mathbf{B} \end{pmatrix} $$

这组方程完全描述了空间曲线的局部几何性质。

## 曲面论

### 第一基本形式

度量曲面上切向量的长度和角度。对于参数曲面 $\mathbf{r}(u, v)$：

$$ I = E \, du^2 + 2F \, du\,dv + G \, dv^2 $$

其中：
$$ E = \mathbf{r}_u \cdot \mathbf{r}_u, \quad F = \mathbf{r}_u \cdot \mathbf{r}_v, \quad G = \mathbf{r}_v \cdot \mathbf{r}_v $$

### 第二基本形式

度量曲面的弯曲程度：

$$ II = L \, du^2 + 2M \, du\,dv + N \, dv^2 $$

其中 $L = \mathbf{r}_{uu} \cdot \mathbf{n}$，$M = \mathbf{r}_{uv} \cdot \mathbf{n}$，$N = \mathbf{r}_{vv} \cdot \mathbf{n}$，$\mathbf{n}$ 是单位法向量。

### 高斯曲率

$$ K = \frac{LN - M^2}{EG - F^2} $$

高斯曲率是曲面最重要的内蕴不变量。

**高斯绝妙定理**（Theorema Egregium）：高斯曲率仅由第一基本形式（度量）决定，与曲面在空间中的嵌入方式无关。这意味着曲面的弯曲程度可以被生活在曲面上的"二维生物"测量出来！

## 黎曼几何

### 黎曼度量

在流形 $M$ 上，黎曼度量 $g$ 是每个切空间上的内积，光滑地依赖于点的位置。在局部坐标 $(x^1, \ldots, x^n)$ 下：

$$ g = \sum_{i,j} g_{ij} \, dx^i \otimes dx^j $$

### 测地线

测地线是"最短路径"的推广，满足测地线方程：

$$ \frac{d^2 x^k}{dt^2} + \sum_{i,j} \Gamma^k_{ij} \frac{dx^i}{dt} \frac{dx^j}{dt} = 0 $$

其中 $\Gamma^k_{ij}$ 是克里斯托费尔符号。

### 广义相对论

爱因斯坦场方程描述了时空弯曲与物质分布的关系：

$$ R_{\mu\nu} - \frac{1}{2} R g_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4} T_{\mu\nu} $$

其中 $R_{\mu\nu}$ 是里奇曲率张量，$R$ 是标量曲率，$T_{\mu\nu}$ 是能量-动量张量。
