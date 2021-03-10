# js 语法

- 表达式和语句
  表达式一般有值比如 1+1
  语句一般用来改变环境比如 var a = 1
  函数的返回值为调用此函数的值

  ```javascript
  function add(x,y) {
      return x + y;
  }

  add(1, 1)的值为2
  ```

- 标识符的规则
  第一个字符可以为 unicode 字母, $, \_, 汉字

  ```javascript
  var a;
  var _a;
  var $a;
  var 哈哈;
  ```

- if else 语句

  ```javascript
  if (a > 1) {
    console.log(a);
  }

  if (a > 1) {
    console.log("a > 1");
  } else {
    console.log("a <= 1");
  }
  // 当只有一个语句时可以省略花括号
  if (a > 1) console.log("a > 1");
  ```

- while for 语句

  ```javascript
  var a = 1;
  while (a < 4) {
    console.log(a);
    a++;
  }

  for (var b = 1; b < 4; b++) {
    console.log(b);
  }
  ```

- break, continue

  ```javascript
  // break会跳出整个循环
  for (var b = 1; b < 4; b++) {
    if (b > 2) {
      break;
    }
    console.log(b);
  }
  // continue会跳出当前这次循环
  for (var b = 1; b < 4; b++) {
    if (b > 2) {
      continue;
    }
    console.log(b);
  }
  ```

- label
  label 可以理解为给代码段贴上标签
  ```javascript
  foo: {
    console.log(1);
    break foo;
    console.log(2);
  }
  ```
