# jQuery使用

- 获取元素
```javascript
// css选择器
$('#myid')
// jQuery 特有表达式
$('a:first')  //选择网页第一个a元素
$('div:visible') // 选择可见的div元素
```

- jQuery的链式操作
原理为每一步jQuery操作，返回的都是一个jQuery对象，所以可以一直链式调用下去
```javascript
$('div').find('h3').eq(2).html('hello'); // 选择所有div元素，找到div中h3标签，将其中第三个h3标签的内容修改为'hello'
```

- 创建元素
```javascript
$('<p>hello</p>')
```
- 移动元素
```javascript
$('div').insertAfter($('p')) // 选中div元素，将其移动到p元素后面
$('p').after($('div')) // 把p元素加到div元素前面

// insertAfter()和after()：在现存元素的外部，从后面插入元素
// insertBefore()和.before()：在现存元素的外部，从前面插入元素
// appendTo()和append()：在现存元素的内部，从后面插入元素
// prependTo()和prepend()：在现存元素的内部，从前面插入元素
```

- 修改元素属性
```javascript
$('a').attr('href', 'http://baidu.com') // 将a标签的href属性设置为http://baidu.com
$('a').attr('href') // 获取href属性值
```