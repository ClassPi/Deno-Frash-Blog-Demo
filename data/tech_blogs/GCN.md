---
type: tech
cover: https://ycqpicturebed.obs.cn-east-3.myhuaweicloud.com/MarkdownCover/wallhaven-exrj5r.jpg
---
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV" crossorigin="anonymous"/>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js" integrity="sha384-XjKyOOlGwcjNTAIQHIpgOno0Hl1YQqzUOEleOLALmuqehneUG+vnGctmUb0ZY0l8" crossorigin="anonymous"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" integrity="sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script>
    <script>
    document.addEventListener("DOMContentLoaded", function() {
        renderMathInElement(document.body, {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "\\[", right: "\\]", display: true},
                {left: "$", right: "$", display: false},
                {left: "\\(", right: "\\)", display: false},
                {left: "{", right: "}", display: false},
                {left: "\{", right: "\}", display: false}
            ]
        });
    });
    </script>
    <style>
    *{
        font-family: 'Arial Rounded MT', 'SimHei','Symbola',sans-serif;
    }
    .katex{
        background-color: #f0f0f0;
        /* font-size: .95rem; */
        margin-left: .1rem;
        margin-right: .1rem;
    }
    small{
        letter-spacing: .1rem;
        color: gray;
    }
    a:link{
        color: #06e348;
        font-weight: bold;
    }
    a:link: hover{
        color: #28bd28
    }
    strong{
        font-weight: bold;
    }
    ol li{
        margin-top:.3rem;
    }
    .c-blue{
        color:#00c0ff
    }
    </style>

</head>

# **GCN**

## **1. 诞生**

图的结构一般来说是十分不规则的, 可以认为是无限维的一种数据, 所以它没有图片一样平移不变性, 也没有文本数据的二维性质. 每一个节点的周围结构可能都是独一无二的, 这种结构的数据,就让传统的CNN,RNN瞬间失效.

GCN, 图卷积神经网络, 实际上跟CNN的作用一样, 就是一个特征提取器, 只不过它的对象是图数据. GCN精妙地设计了一种从图数据中提取特征的方法, 从而让我们可以使用这些特征去对图数据进行节点分类(node classification),图分类(graph classification), 边预测(link prediction), 还可以顺便得到图的嵌入表示(graph embedding), 可见用途广泛.

## **2. 由浅入深**

### **2.1 GCN核心公式**

假设我们有一些图数据, 其中有N个node, 每个节点都有自己的feature, 我么将这些feature组成一个$X^{N×D}$矩阵,然后各个节点之间的关系也构成一个$A^{N×N}$矩阵, 也被称为adjacency matrix<em class='c-blue'>邻接矩阵</em>. X矩阵和A矩阵便是GCN的输入了.
GCN也是神经网络, 他的层与层之间的传播方式是:
$$\qquad\qquad H^{(l+1)} = σ(\tilde{D}^{-\frac{1}{2}}\tilde{A}\tilde{D}^{-\frac{1}{2}}H^{(l)}W^{(l)})\qquad\qquad(1)$$
在这个公式中:

1. $\tilde{A} = A + E $. $E$ 为单位矩阵.
2. $\tilde{D}$是$\tilde{A}$的度矩阵.
3. $H$是每一层的特征, 对于输入层的话, H就是X
4. $\sigma$是非线性激活函数

我们可以观察到,(1)中$\tilde{D}^{-\frac{1}{2}}\tilde{A}\tilde{D}^{-\frac{1}{2}}$是已知的(计算而来), A也是我们的输入之一, 所以这个公式是可以被计算的.

### **2.2 从图理解GCN**

<a id='pic1'></a>
![GCN作者博客中的配图](https://raw.githubusercontent.com/ClassPi/PicBed/master/images/20240116191825.png)
<p style='text-align:center'><small>图1 GCN网络</small></p>

![GCN作者论文中的配图](https://raw.githubusercontent.com/ClassPi/PicBed/master/images/20240116192304.png)
<p style='text-align:center'><small>图2 GCN网络</small></p>

从上面两张图可以观察到, GCN网络的input和output都是拥有同样结构的图, 只是在经过多个隐藏层之后其每个node的feature由$X$转变为了$Z$.
所以说, 图的nodes之间的连接关系不变->node邻接矩阵不变->$A$不变->$A$是共享的.

以<a href='#pic1'>图1</a>举例, 其中有两层隐藏层, 其激活函数为ReLU函数:
$$ Z =  f(A,X) = ReLU\big(\hat{A}\ \small ReLU{(\hat{A}XW^{(0)})} \ W^{(1)}\big)$$

最后我们对所有带标签的节点计算交叉熵损失函数, 就可以训练一个node classification的模型了. GCN即使只有很少的node有Tag时也可以正常训练, 所以作者把他们的方法称为**半监督分类**.

>应用不同的损失函数,GCN也可以应用在graph classification, link prediction

### **2.3 从数学理解GCN**

我们知道了GCN的输入为邻接矩阵$A\small^{N×N}$和feature$ H\small ^{N×D}$, 结合最基本的神经网络 ,我们直接了当的将A,H,和参数矩阵W点乘在一起:
$$H^{(l+1)} = f(H^{(l)},A) = \sigma \big(A H^{(l)} W^{(l)} \big)$$
GCN作者在博客中使用事实证明了, 即使是这样一个简单的神经网络也是足够强大了. 但是这个网络还存在一些问题:
1. 单纯使用A的话, 由于A的对角线元素全是0(自身与自身没有连接), 导致A在与H相乘时得到的是**节点除自身外的所有邻居的特征加权和**, 把自己的特征给忽略掉了. 因此GCN作者搞了一个小小的改动, 给A加上一个单位矩阵E(相当于加了一个环边)
2. A是没有经过归一化的矩阵. 这样在与特征矩阵相乘的话会改变节点特征在同纬度下的分布, 就会出现不可预测的问题. 所以对A做一个标准化的处理: 首先让A的每一行相加为1, 可以乘一个$D^{-1}$ (D为度矩阵). 我们可以进一步把$D^{-1}$拆开与A相乘,得到一个对称且归一化的矩阵: $D\small^{-\frac{1}{2}}\ A \ D\small^{-\frac{1}{2}}$
   <br/>  
   > 什么是度矩阵: 对于一个有n个顶点的图, 度矩阵是一个n×n的对角矩阵, 其对角线上的元素$D_{ii}$等于顶点$i$的度数, 而所有非对角线上的元素都是0.


   >为什么将$D^{-1}$拆解开来: 由于无向图的邻接矩阵为对称阵, 为了保持这种对称性, 所以改变了归一化公式的形式

通过上面两种改动, 我们就得到了下面的公式
$$H^{(l+1)} = f(H^{(l)},A) = \sigma \big(D^{-\frac{1}{2}} A D^{-\frac{1}{2}} H^{(l)} W^{(l)} \big)$$
也就是我们的GCN核心公式了👍👍👍👍.

## **3. GCN的独特之处**

- 前文提到过, GCN可以做到半监督学习. 在GCN作者的博客中提到, 即使GCN模型不进行训练, 完全使用初始化的参数矩阵$W$进行模型输出, 也可以得到一个不错的结果. 在原作者的实验中, 同类别的node,经过GCN的提取出的embedding, 已经在空间上自动聚类了. 而这种聚类结果, 可以和DeepWalk,node2vec这种经过复杂训练得到的node embedding的效果媲美了. 那么如果给出给少量的标注信息,GCN的效果就会更加出色.

- 对于很多网络,我们可能没有节点的特征,这个时候可以使用GCN吗？答案是可以的,如论文中作者对那个俱乐部网络,采用的方法就是用单位矩阵 I 替换特征矩阵 X. 
- 我没有任何的节点类别的标注, 或者什么其他的标注信息, 可以使用GCN吗? 当然, 就如前面讲的, 不训练的GCN, 也可以用来提取graph embedding, 而且效果还不错.
- GCN网络的层数多少比较好? 论文的作者做过GCN网络深度的对比研究, 在他们的实验中发现, GCN层数不宜多, 2-3层的效果就很好了.