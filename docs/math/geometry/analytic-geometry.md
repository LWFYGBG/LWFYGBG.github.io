<BackButton to="/math/geometry/" label="几何学" />

# 解析几何

解析几何由笛卡尔（René Descartes）和费马（Pierre de Fermat）在17世纪创立，用代数方法研究几何问题。

## 基本思想

在平面上建立坐标系，将几何点与有序数对一一对应：

$$ \text{点} P \longleftrightarrow \text{坐标} (x, y) $$

几何图形则对应为代数方程：

$$ \text{曲线} = \{(x, y) \in \mathbb{R}^2 \mid F(x, y) = 0\} $$

## 直线

### 方程形式

| 形式 | 方程 | 说明 |
|------|------|------|
| 点斜式 | $y - y_0 = k(x - x_0)$ | $k$ 为斜率 |
| 斜截式 | $y = kx + b$ | — |
| 一般式 | $Ax + By + C = 0$ | — |
| 截距式 | $\frac{x}{a} + \frac{y}{b} = 1$ | $a, b$ 为截距 |
| 参数式 | $\begin{cases} x = x_0 + t\cos\theta \\ y = y_0 + t\sin\theta \end{cases}$ | $t$ 为参数 |

### 距离公式

点 $(x_0, y_0)$ 到直线 $Ax + By + C = 0$ 的距离：

$$ d = \frac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}} $$

## 圆锥曲线

圆锥曲线是平面截取圆锥面得到的曲线，由统一的二次方程描述：

$$ Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0 $$

### 圆

圆心在 $(a, b)$、半径为 $r$：

$$ (x - a)^2 + (y - b)^2 = r^2 $$

### 椭圆

中心在原点、半长轴 $a$、半短轴 $b$：

$$ \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \quad (a > b > 0) $$

焦点坐标 $(\pm c, 0)$，其中 $c^2 = a^2 - b^2$，离心率 $e = \frac{c}{a} < 1$

### 双曲线

$$ \frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 $$

焦点 $(\pm c, 0)$，$c^2 = a^2 + b^2$，离心率 $e = \frac{c}{a} > 1$，渐近线 $y = \pm \frac{b}{a}x$

### 抛物线

$$ y^2 = 4px \quad \text{或} \quad y = ax^2 + bx + c $$

焦点 $(p, 0)$，准线 $x = -p$，离心率 $e = 1$

## 空间解析几何

### 三维坐标系

点的坐标 $(x, y, z)$，球面方程：

$$ x^2 + y^2 + z^2 = r^2 $$

### 向量运算

向量 $\mathbf{a} = (a_1, a_2, a_3)$，$\mathbf{b} = (b_1, b_2, b_3)$：

- 点积：$\mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 = \|\mathbf{a}\|\|\mathbf{b}\|\cos\theta$
- 叉积：$\mathbf{a} \times \mathbf{b} = (a_2 b_3 - a_3 b_2, a_3 b_1 - a_1 b_3, a_1 b_2 - a_2 b_1)$

### 平面方程

$$ Ax + By + Cz + D = 0 $$

法向量 $\mathbf{n} = (A, B, C)$。

## 坐标变换

### 平移

$$ \begin{cases} x' = x - a \\ y' = y - b \end{cases} $$

### 旋转

绕原点逆时针旋转 $\theta$ 角：

$$ \begin{cases} x' = x\cos\theta - y\sin\theta \\ y' = x\sin\theta + y\cos\theta \end{cases} $$

矩阵形式：$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}$
