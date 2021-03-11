# JS 对象基本用法

- 声明对象的两种语法

  ```javascript
  let a = {
    name: "小明",
  };

  let b = new Object({ name: "小明" });
  ```

- 删除对象属性

```javascript
delete obj.name;
```

- 查看对象属性

```javascript
obj.name;
obj["name"];
let name = "name";
obj[name];
```

- 修改，增加属性

```javascript
// 如果是已经有的属性，直接修改，如果没有，就是增添新属性
obj.age = 18;
// 批量增加
Object.assign(obj, { p1: 1, p2: 2, p3: 3 });
```

- 'name' in obj 和 obj.hasOwnProperty('name') 的区别

```javascript
'name' in obj 会判断obj自身及其原型链上是否有'name'属性
obj.hasOwnProperty('name') 只会判断obj自身是否有'name'属性
```
