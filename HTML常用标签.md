# HTML 常用标签

1. a 标签 属性：href, target(\_blank 新标签页打开), download(下载网页，没有用), rel=noopener(防止 bug)

   1. href: //google.com 会自动选择使用 http 还是 https
   2. 伪协议: javascript:;为伪协议，mailto:, tel:
   3. id 协议：href="#id 值"
   4. target 值：\_blank, \_self(默认值，在当前页面打开), \_top(在最顶层打开标签), \_parent(在上级 iframe 打开标签)，xxx(创建一个新打开的页面名字为 xxx, 可以配合 iframe 的 name 属性使用)

2. iframe 标签

   1. src: iframe 展示的内容

3. table 标签

   1. ```html
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <td></td>
          </tr>
        </tfoot>
      </table>
      ```

   2. css: table-layout: auto（根据内容计算表格宽度）, fixed（表格宽度一样）

   3. border-collapse: collapse(合并表格边框) border-space: 0(边框之间距离)

4. img 标签: 发出 get 请求，展示图片

   1. src
   2. alt: 图片提示文字
   3. height, width 永远不要图片变
   4. 事件：onload，onerror
   5. 响应式：max-width: 100%
   6. 可替换元素

5. form 标签：发送 get, post 请求，刷新页面

   1. action: 跳转路径
   2. method: post/get
   3. autocomplete: on/off
   4. target: \_blank 等，button 与 input(type="submit")区别为 button(type="submit")可以套标签
   5. 事件：onsubmit

6. input 标签

   1. type: text, password, color, radio, checkbox, file, hidden, submit, button
   2. name
   3. type 为 file, multiple: 运行多选文件
   4. required
   5. onchange, onfocus, onblur

7. textarea 多行文本

8. select 嵌套 option 标签

   1. option： value 为要提交的值
