(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{334:function(a,s,t){"use strict";t.r(s);var e=t(25),r=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_0-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-介绍","aria-hidden":"true"}},[a._v("#")]),a._v(" 0. 介绍")]),a._v(" "),t("p",[a._v("对于 Linux 系统有一定了解的可以跳过介绍。")]),a._v(" "),t("p",[a._v("一个文件具有权限和归属的特性。")]),a._v(" "),t("p",[a._v("文件的读、写、执行权限可以分别简写为 rwx，亦可以分别使用数字 421。")]),a._v(" "),t("p",[a._v("一个文件对不同的用户会具有不同的权限，从左往右分别是：文件所有者、文件所属组、其他用户。")]),a._v(" "),t("p",[a._v("举个例子：760，意味着这个文件的所有者具有可读、可写、可执行的权限；文件所属组拥有可读、可写的权限；其他用户则不具备权限。")]),a._v(" "),t("h3",{attrs:{id:"普通文件（-）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#普通文件（-）","aria-hidden":"true"}},[a._v("#")]),a._v(" 普通文件（-）")]),a._v(" "),t("p",[t("strong",[a._v("可读（r）")])]),a._v(" "),t("p",[a._v("表示可以读取文件的实际内容。")]),a._v(" "),t("p",[t("strong",[a._v("可写（w）")])]),a._v(" "),t("p",[a._v("表示可以修改文件的内容（包括修改为空文件）。")]),a._v(" "),t("p",[t("strong",[a._v("可执行（x）")])]),a._v(" "),t("p",[a._v("表示可以作为一个脚本执行。")]),a._v(" "),t("h3",{attrs:{id:"目录文件（d）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录文件（d）","aria-hidden":"true"}},[a._v("#")]),a._v(" 目录文件（d）")]),a._v(" "),t("p",[t("strong",[a._v("可读（r）")])]),a._v(" "),t("p",[a._v("表示可以读取目录内的文件列表。")]),a._v(" "),t("p",[t("strong",[a._v("可写（w）")])]),a._v(" "),t("p",[a._v("表示可以在目录内新增、删除、重命名文件。")]),a._v(" "),t("p",[t("strong",[a._v("可执行（x）")])]),a._v(" "),t("p",[a._v("表示可以进入该目录。")]),a._v(" "),t("h2",{attrs:{id:"_1-用户组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-用户组","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 用户组")]),a._v(" "),t("h3",{attrs:{id:"创建用户组-admin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建用户组-admin","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建用户组 admin")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("groupadd")]),a._v(" admin\n")])])]),t("h3",{attrs:{id:"查看用户组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看用户组","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看用户组")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/group\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# admin:x:1000:")]),a._v("\n")])])]),t("h2",{attrs:{id:"_2-用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-用户","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 用户")]),a._v(" "),t("h3",{attrs:{id:"添加用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加用户","aria-hidden":"true"}},[a._v("#")]),a._v(" 添加用户")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# shanyuhai 也可以设定为你喜欢的名字")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("useradd")]),a._v(" shanyuhai\n")])])]),t("h3",{attrs:{id:"查看用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看用户","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看用户")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/passwd "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" shanyuhai\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# shanyuhai:x:1000:1001::/home/shanyuhai:/bin/bash")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 自动在 /home 下创建目录 /shanyuhai")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" /home/ -l\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# drwx------ 2 shanyuhai shanyuhai 4096 Mar  7 16:46 shanyuhai")]),a._v("\n")])])]),t("h3",{attrs:{id:"添加用户密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加用户密码","aria-hidden":"true"}},[a._v("#")]),a._v(" 添加用户密码")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("passwd")]),a._v(" shanyuhai\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# New password: # 输入密码即可")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Retype new password:  # 重复密码即可")]),a._v("\n")])])]),t("h3",{attrs:{id:"将用户添加到用户组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将用户添加到用户组","aria-hidden":"true"}},[a._v("#")]),a._v(" 将用户添加到用户组")]),a._v(" "),t("p",[t("strong",[a._v("将用户添加到 admin 组")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("usermod")]),a._v(" -a -G admin shanyuhai\n")])])]),t("p",[t("strong",[a._v("查看是否加入 admin 用户组")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/group "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" shanyuhai\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# admin:x:1000:shanyuhai")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# shanyuhai:x:1001:")]),a._v("\n")])])]),t("h3",{attrs:{id:"修改用户权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改用户权限","aria-hidden":"true"}},[a._v("#")]),a._v(" 修改用户权限")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("visudo\n")])])]),t("p",[a._v("修改文件：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## The COMMANDS section may have other options added to it.")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## Allow root to run any commands anywhere")]),a._v("\nroot    ALL"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ALL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("       ALL\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 你需要新增的内容")]),a._v("\nshanyuhai ALL"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ALL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("       ALL\n")])])]),t("p",[a._v("保存后退出。")]),a._v(" "),t("h2",{attrs:{id:"_3-删除用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-删除用户","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 删除用户")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -r 同时删除用户及用户目录")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -f 强制删除用户")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("userdel")]),a._v(" -rf xxx\n")])])])])},[],!1,null,null,null);s.default=r.exports}}]);