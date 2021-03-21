# css 知识总结

1. 布局
   1. 固定布局，用于电脑
   2. 不固定布局：利用文档流，用于手机
   3. 响应式布局：电脑固定，手机不固定
   4. 如果要兼容 ie9, 使用 float 布局
   5. float 布局：
      1. 子元素：float: left/right 和 width
      2. 父元素：加.clearfix
      3. 有经验的人会预留一些空间或最后一个不设置 width
      4. float 元素在 ie6,7 上 margin-left 设置的数值会加倍，可以将元素设置为 inline-block
      5. 消除图片下边空隙：vertical-align: top/middle
      6. outline 不占宽度
      7. 块级元素水平居中：宽固定，margin: 0 auto
      8. 平均布局：要使用负 margin
   6. flex 布局
      1. container:
         1. align-items: 一行次轴对齐方式
         2. align-content: 多行次轴对齐方式
      2. items:
         1. order: 0(默认)，越小越靠前
         2. flex-grow 分多余的空间，默认为 0
         3. flex-shrink: 控制如何变瘦，默认为 1，0 防止变瘦
         4. flex-basis: auto(默认)
         5. align-self: 控制自己次轴对齐方式
         6. 平均布局：要用-margin
   7. 草图软件：balsamiq, figma, 墨刀
   8. grid 布局
      1. container:
         1. display: grid;
         2. grid-template-columns
         3. grid-template-rows
         4. gird-template-areas
         5. grid-gap
         6. grid-column-gap
         7. grid-row-gap
      2. items:
         1. grid-area
         2. grid-column-start/end
         3. grid-row-start/end
2. css 定位

   1. 定位为垂直方向
   2. 背景色范围：区域为 border+padding+content
   3. 垂直方向：定位元素(z-index=0 , 1.....)> 内联子元素>浮动子元素>块级子元素> border> 背景> 定位元素(z-index=-1,-2.....)
   4. position: relative 不脱离文档流，absolute，fixed 脱离文档流(放在具有 transform 属性元素里面，会有问题，手机上尽量不要用)，sticky(兼容性很差)
   5. z-index 默认值为 auto，越大越靠上，可以为负值

3. 层叠上下文

   1. 每个层叠上下文就是一个新的小世界
   2. 哪些属性可以创建层叠上下文：z-index(不为 auto 的 absolute, relative), flex(z-index 不为 auto 的 flex items), opacity（值小于 1）, html, position 为 fixed, transform 不为 none
   3. z-index: -1, 不一定在 background 之后，要看有没有层叠上下文，有的话就在 background 之上

4. css 动画

   1. 帧：静止的画面
   2. 浏览器渲染过程

      1. 根据 html 构建 html 树(dom)
      2. 根据 css 构建 css 树(cssom)
      3. 将两颗树合并为渲染树（render tree）
      4. 根据 render tree 布局：文档流，盒模型，计算元素大小位置
      5. paint 绘制：边框颜色，文字颜色，阴影等画出来
      6. composite 合并（根据层叠关系展示画面）

   3. csstriggers 查看每个属性是否会 layout, paint, composite
   4. css 动画优化
      1. js 优化：requestAnimationFrame 代替 setTimeout 或 setInterval
      2. css 优化：will-change, translate
   5. transform
      1. translateX 与父元素 perspective 搭配使用
      2. translateX(50%)自己的 50%
      3. scale()
      4. rotate(180 deg) 沿垂直于屏幕方向旋转
      5. skew(15 deg) 倾斜
   6. transition: 过渡

      1. transition: 属性名 时长 过渡方式 延迟
      2. 过渡方式：linear, ease, ease-in, ease-out, ease-in-out,
      3. 时长：s, ms

   7. animation
      1. @keyframes 声明关键帧
      2. animation: 帧名 时间 过渡方式 延迟时间 次数 方向 填充模式 是否暂停
