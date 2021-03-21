# 浅析 MVC

- mvc 三个对象分别为 m(model): 主要负责处理数据，v(view):视图层，负责展示界面，c(controller): 负责数据层和视图层之外的工作

```javascript
// 数据层
const Model = {
  data: {},
  create() {},
  delete() {},
  update() {},
  get() {},
};

// 视图层
const View = {
  template: ``,
  render() {},
};

// 控制层
const Controller = {
  bindEvents() {},
};
```

- Eventbus 为事件处理中心

```javascript
// 监听事件
Eventbus.on("eventName", fn);
// 触发事件
Eventbus.trigger("eventName", fn);
// 取消监听
Eventbus.off("eventName");
```

- 表驱动编程
  从表里面查找信息而不使用逻辑语句(if else 和 switch case)，减少代码冗余，使代码表达更简洁

```javascript
// 以键值对的形式将关键信息存储在表中，使用key进行访问
const ageKey = max(min(66, age), 17);
const rateTable = { 17: 0.2, 30: 0.4, 66: 0.4 };
const rate = rateTable[ageKey];
```

- 模块化

1. 模块化可以使代码解耦，在不改变接口的情况下，对一个模块内部进行修改，不会影响另一个模块
2. 利用模块化可以方便的对代码进行复用，快速搭建应用
