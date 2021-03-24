# 虚拟 DOM 和 DOM diff

- 虚拟 dom
  一个代表 dom 树的对象，通常含有标签名，标签上的属性，事件监听和子元素们，以及其他属性
- 虚拟 dom 的优点
  1. 可以减少不必要的 dom 操作
  2. 可以跨平台渲染，比如小程序，安卓，ios
- 虚拟 dom 缺点

  需要额外的创建函数，比如 react 中的 createElement，vue 中的 h, 可以通过 jsx 简化写成 XML 写法

- dom diff

  是一个函数，一般称为 patch, 通过这个函数我们可以对比两个新旧虚拟节点，到底优化过的 dom 操作

- dom diff 优点

  通过 dom diff 得到优化的 dom 操作，减少不必要的 dom 操作

- dom diff 问题

  在对比虚拟 dom 时，可能不太高效，比如使用 v-for 生成一组相似的节点时，对其中的某一个节点进行删除操作，如果不加 key，dom diff 会依此对比，遇到不同就修改节点，再把最后一个节点删除，这样会有大量不必要的 dom 操作，所以 v-for 时要加上 key
