# 浅析 url

1. ip: internet protocol, 外网 Ip, 内网 ip
2. 内网设备可以互相访问
3. 127.0.0.1 表示自己, localhost 通过 hosts 指向自己，0.0.0.0 不表示任何设备
4. 端口：http(80) https(443) ftp(21) 一共有 65535 个端口
   1. 0 到 1023(2 的十次方-1) 给系统用
5. ip 定位设备，port 定位服务
6. 域名
   1. 一个域名对应不同的 ip: 负载均衡
   2. 一个 ip 可以对应不同的域名：共享主机
7. dns(domin name system)
   1. 连接域名与 ip
   2. www.xiedaimala.com 与 xiedaimala.com 不是同一个域名
   3. com 为顶级域名，xiedaimala.com 为二级域名(俗称一级域名)，www.xiedaimala.com为三级域名(俗称二级)
8. 请求不同的页面：改变路径
9. 同一个页面，不同的内容：通过查询参数决定
10. 同一个内容，不同的位置：通过锚点决定
    1. 锚点无法在 network 面板看到
    2. 锚点不会传给服务器，无法在 network 面板看到
11. url(同一资源定位符) = 协议 + 域名 + 端口 + 路径 + 请求参数 + 锚点
12. curl 命令
    1. curl -v 域名
13. http 规定请求的格式，响应的格式
