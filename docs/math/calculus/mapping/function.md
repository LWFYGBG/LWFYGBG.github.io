<BackButton to="/math/calculus/" label="微积分" />

# 函数
定义在非空数集上的映射称为函数，其中输入元素的数集称为定义域，输出元素的数集称为值域。
对于函数
$$
f:X\rightarrow Y
$$
在定义域中选择一个数 $x$ 作为代表，记对应法则的作用为 $f(x)$ ，输出为 $y$ ，则就有非常经典的函数表达式：
$$
y=f\left( x \right) 
$$

结合映射部分的讨论可知，函数最关键的两个要素是定义域和对应法则，而陪域往往就选取为值域，所以两个函数如果定义域和对应法则相同，则一般就认为是同一个函数，不过，如果非要规定不同的陪域，那么即使定义域和对应法则都相同，陪域不同的函数也不能算作是同一个函数。

## 恒等函数，复合函数，反函数
由于函数就是一种特殊的映射，所以当然也有恒等函数和复合函数。

对于复合函数，常常把外层函数的定义域规定为内层函数的值域，所以当讨论复合函数的定义域时，实际上讨论的是内层函数的定义域。


与映射不同，复合函数直接记为
$$
y=g\left[ f\left( x \right) \right] =gf\left( x \right) 
$$

有逆映射，自然也有逆函数，不过一个更加习惯性的称呼是反函数。
### 左逆条件和右逆条件
使用一个实际的函数可以方便理解逆映射中提到的左逆条件和右逆条件：

假设一个函数：
$$
f\left( x \right) =x^2:R\rightarrow R
$$

注意，这个函数的陪域是 $R$ ，但值域是 $[0,+\infty)$ 。

左逆条件：
$$
gf\left( x \right) =e\left( x \right) :R\rightarrow R
$$

容易知道，这样的左逆映射是不存在的，因为它的输入值只有 $[0,+\infty)$ ，所以左逆条件实际上要求函数是单射。

虽然在整个定义域上无法寻找其反函数，但可以选择单射区间。

注意，严格来说，选择单射区间为定义域的函数在定义上并不是原来的函数，所以“寻找某个函数在某个区间上的反函数”，这个说法并不准确。

假设函数：
$$
\tilde{f}\left( x \right) =x^2:\text{[0,}+\infty \text{)}\rightarrow R
$$

这个函数是单射，但不是满射，原因与之前相同。
容易知道，函数
$$
g\left( x \right) =\sqrt{x}:\text{[0,}+\infty \text{)}\rightarrow \text{[0,}+\infty \text{)}
$$

满足左逆条件，即：
$$
g\tilde{f}\left( x \right) =\sqrt{x^2}=x:\text{[0,}+\infty \text{)}\rightarrow \text{[0,}+\infty \text{)}
$$

再考虑右逆条件：
$$
\tilde{f}g\left( x \right) =e\left( x \right) :R\rightarrow R
$$
容易知道这样的右逆映射不存在，因为
$$
g\left( x \right) =\sqrt{x}:\text{[0,}+\infty \text{)}\rightarrow \text{[0,}+\infty \text{)}
$$
的定义域不是 $R$ ，必须要定义：
$$
\tilde{\tilde{f}}\left( x \right) =x^2:\text{[0,}+\infty \text{)}\rightarrow \text{[0,}+\infty \text{)}
$$
可以找到其反函数为：
$$
g\left( x \right) =\sqrt{x}:\text{[0,}+\infty \text{)}\rightarrow \text{[0,}+\infty \text{)}
$$
此时的右逆条件：
$$
\tilde{\tilde{f}}g\left( x \right) =\left( \sqrt{x} \right) ^2=x:\text{[0,}+\infty \text{)}\rightarrow \text{[0,}+\infty \text{)}
$$

在实际情况下，由于常常规定陪域就是值域，所以右逆条件是可以忽略的。

总结来看，左逆条件需要函数是单射，右逆条件需要函数是满射。
