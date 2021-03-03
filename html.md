# html 入门笔记 1

1. html 为李爵士发明的用于展示网页内容的超文本标记语言
2. html 起手式

   ```html
   <!DOCTYPE html>
   <html lang="zh-CN">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Document</title>
     </head>
     <body></body>
   </html>
   ```

3. html 常用表示章节的标签

   - h1~h6 表示标题
   - section 表示章节
   - article 表示文章
   - main 表示主要内容
   - aside 表示旁支内容
   - header 顶部
   - footer 底部
   - p 段落

4. html 的全局属性

   - class
   - contenteditable 网页内容可编辑
   - hidden 隐藏标签
   - id
   - style 样式
   - title 鼠标放在标签上可以显示完整内容
   - tabIndex 表示输入 tab 键访问顺序，0 代表最后一个 -1 代表不能访问

5. html 内容标签
   - a 用于链接其他网站
   - strong 用于强调内容
   - em 语气强调
   - code 用于展示代码，将字体设置为等宽字体
   - pre html 无论输入多少空格默认只会展示一个空格，将内容包裹 pre 标签后可以展示空格，回车，tab
   - hr 分隔线
   - br 换行
   - ol 有序列表
   - ul 无序列表
   - dl 描述列表
   - quote 引用，不换行
   - blockquote 引用，换行
