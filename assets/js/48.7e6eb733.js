(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{481:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("hr"),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("\tln"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":8080"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tconn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ln"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Accept")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fatal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleConnection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h3",{attrs:{id:"_1-请仔细阅读如上程序-当程序编译后运行在-linux-系统上时-是否会产生用户态与内核态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-请仔细阅读如上程序-当程序编译后运行在-linux-系统上时-是否会产生用户态与内核态"}},[t._v("#")]),t._v(" 1.请仔细阅读如上程序, 当程序编译后运行在 linux 系统上时，是否会产生用户态与内核态")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("的切换，并说明切换时 net.Listen ln.Accept 函数运行是用户态还是内核态\n")])])]),s("h4",{attrs:{id:"解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[t._v("#")]),t._v(" 解析")]),t._v(" "),s("blockquote",[s("p",[t._v("在这个程序中，当使用 net.Listen 函数创建网络监听服务时，会触发内核的 socket 相关操作，例如调用 socket、bind 和 listen 等函数，\n这些操作运行在内核态。当监听服务建立成功后，主线程进入无限循环等待客户端连接。当客户端连接请求到达时，主线程会从内核态切换到用户态，\n调用ln.Accept() 函数，等待客户端连接建立。此时，Accept() 函数会阻塞等待，直至网络连接建立完成或超时。当连接建立后，主线程会从\n用户态切换回内核态，等待下一个客户端连接请求。因此，在这个程序中，会产生用户态与内核态之间的切换。其中，net.Listen 函数运行在内核态，\n而ln.Accept() 函数运行在用户态。")])]),t._v(" "),s("h3",{attrs:{id:"_2-当net-listen运行后本进程的监听文件存储在什么位置-以及监听文件的信息有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-当net-listen运行后本进程的监听文件存储在什么位置-以及监听文件的信息有哪些"}},[t._v("#")]),t._v(" 2.当net.Listen运行后本进程的监听文件存储在什么位置? 以及监听文件的信息有哪些?")]),t._v(" "),s("h4",{attrs:{id:"解析-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析-2"}},[t._v("#")]),t._v(" 解析")]),t._v(" "),s("blockquote",[s("p",[t._v('回答之前先指出一个错误，这个问题中的 "监听文件" 不应该存在，因为在 Go 的 net 包中，监听器不会创建任何文件来存储相关信息，而是直接存在进程内存中。')]),t._v(" "),s("p",[t._v('当使用 net.Listen("tcp", ":8080") 这样的代码启动一个 TCP 监听器时，它将会在本地 IP 地址的 8080 端口上创建一个监听器，该监听器信息包括监听地址 (IP 地址) 和端口号。')]),t._v(" "),s("p",[t._v('因此，可以得出监听器的信息为: "TCP 监听器在本地 IP 地址的 8080 端口上监听连接请求"。但这些信息并没有被写入磁盘或文件系统，而是存在于进程内存中，等待客户端连接请求的到来。')])]),t._v(" "),s("h3",{attrs:{id:"_3-当和for运行接收到-100-个网络连接以后-是大会生成新文件-生成多少个文件-它们的连"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-当和for运行接收到-100-个网络连接以后-是大会生成新文件-生成多少个文件-它们的连"}},[t._v("#")]),t._v(" 3.当和for运行接收到 100 个网络连接以后, 是大会生成新文件? 生成多少个文件? 它们的连")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("接信息是怎么表示的?\n")])])]),s("h4",{attrs:{id:"解析-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析-3"}},[t._v("#")]),t._v(" 解析")]),t._v(" "),s("blockquote",[s("p",[t._v("这段代码不会生成任何文件。net.Listen() 函数和 ln.Accept() 函数都不会创建文件，它们只是在内存中创建和维护网络连接的数据结构。因此，当这段代码接受了 100 个网络连接后，并不会生成新文件。")]),t._v(" "),s("p",[t._v("网络连接的信息保存在 conn 变量中，包括连接的本地地址和端口号、远程地址和端口号等信息。这些信息都可以通过 conn 对象来访问，通常用于记录连接日志或者进行一些连接管理操作。")]),t._v(" "),s("p",[t._v("因此，在这个程序中，并不会生成新文件，也不会将连接信息写入到磁盘之类的持久化存储设备中。所有连接信息都是保存在内存中的，只要程序没有结束或者没有关闭这些连接，相关信息就会一直存在于内存中。")])]),t._v(" "),s("h3",{attrs:{id:"_4-当本程序运行时-游戏客户端发送了-10k-的报文-请问如何查看这-10k-的报文在-go-进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-当本程序运行时-游戏客户端发送了-10k-的报文-请问如何查看这-10k-的报文在-go-进程"}},[t._v("#")]),t._v(" 4.当本程序运行时，游戏客户端发送了 10K 的报文， 请问如何查看这 10K 的报文在 GO 进程")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("内部的存储和接收过程？ 以及数据大概存使在哪个内存哪个分区? 请画出go进程内存布局图。\n接信息是怎么表示的?\n")])])]),s("h4",{attrs:{id:"解析-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析-4"}},[t._v("#")]),t._v(" 解析")]),t._v(" "),s("blockquote",[s("p",[t._v("在这个示例中，我们定义了一个 buf 缓冲区，大小为 10K，用来存放接收到的数据。conn.Read() 函数会将客户端发送的数据读取到缓冲区中，并返回实际读取的字节数 n。然后我们将这些字节打印出来，以便查看接收到的报文内容。")])]),t._v(" "),s("blockquote",[s("p",[t._v("至于这些数据存储在哪个内存分区和地址，需要了解 GO 进程的内存布局。一般来说，GO 进程的内存布局包括以下几个区域：")]),t._v(" "),s("ol",[s("li",[t._v("静态数据区（static data segment）：存储程序的全局变量，不可修改")]),t._v(" "),s("li",[t._v("堆区（heap）：用于动态分配内存的区域，包括 GC 管理的堆和非 GC 管理的堆")]),t._v(" "),s("li",[t._v("栈区（stack）：用于存储函数调用时的局部变量和临时数据，每个线程都有自己的栈")]),t._v(" "),s("li",[t._v("其他区域：包括动态链接库的代码和数据区域、共享内存区域等")])])]),t._v(" "),s("blockquote",[s("p",[t._v("当我们使用 buf := make([]byte, 1024*10) 创建缓冲区时，这个缓冲区会被分配到堆区中。而 TCP 连接和缓冲区描述符等信息会被分配到栈区中。具体的内存布局图可以参考相关资料。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);