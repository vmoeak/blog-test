# js 函数的执行时机

- 解释为什么会打印 6 个 6

  ```javascript
  let i = 0;
  for (i = 0; i < 6; i++) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  }

  // setTimeout中的函数会异步执行，会在同步语句执行完再执行，当for循环执行完之后，i为6
  // 然后才会执行6次打印，所以会打印6次6
  ```

- 写出让上面代码打印 0、1、2、3、4、5 的方法

```javascript
for (let i = 0; i < 6; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

- 除了使用 for let 配合，还有什么其他方法可以打印出 0、1、2、3、4、5

```javascript
for (var i = 0; i < 6; i++) {
  !(function (i) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  })(i);
}
```
