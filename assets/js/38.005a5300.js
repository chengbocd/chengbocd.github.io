(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{101:function(i,t,_){"use strict";_.r(t);var v=_(0),a=Object(v.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var i=this,t=i.$createElement,_=i._self._c||t;return _("div",{staticClass:"content"},[_("h2",{attrs:{id:"关联git本地和远端仓库步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关联git本地和远端仓库步骤","aria-hidden":"true"}},[i._v("#")]),i._v(" 关联git本地和远端仓库步骤")]),i._v(" "),_("ol",[_("li",[_("p",[i._v("打开git，输入mkdir newProject 新建一个文件夹。")])]),i._v(" "),_("li",[_("p",[i._v("git init 初始化本地文件夹为一个可以管理的git仓库。")])]),i._v(" "),_("li",[_("p",[i._v("关联本地仓库和远端仓库："),_("code",[i._v("git remote add origin http://${path}.git.")])])]),i._v(" "),_("li",[_("p",[i._v("把文件放入本地仓库")]),i._v(" "),_("ul",[_("li",[i._v("git status          // 列出没有被git管理或者修改但还没有未被提交的文件")]),i._v(" "),_("li",[i._v("git add .           // 将未被管理的文件添加到git")]),i._v(" "),_("li",[i._v('git commit -am "提交文件"')])])]),i._v(" "),_("li",[_("p",[i._v("把本地库推送到远端仓库")]),i._v(" "),_("ul",[_("li",[_("code",[i._v("git push -u origin master")])]),i._v(" "),_("li",[i._v("ps：当远端仓库使用Readme文件初始化项目，需要先"),_("code",[i._v("git pull origin master")]),i._v("，有固定格式时需手动编辑，按i修改，:wq退出")])])]),i._v(" "),_("li",[_("p",[i._v("切换本地开发分支并管理远端分支")]),i._v(" "),_("ul",[_("li",[_("code",[i._v("git checkout -b topic")]),i._v("      // 创建并切换到topic新分支，相当于git branch topic 和git checkout topic 组合")]),i._v(" "),_("li",[_("code",[i._v("git push origin topic:topic")]),i._v("      // 关联本地topic分支和远端topic分支 （没有将自动创建topic分支并关联）")])])])]),i._v(" "),_("h2",{attrs:{id:"git-常用命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-常用命令","aria-hidden":"true"}},[i._v("#")]),i._v(" git 常用命令")]),i._v(" "),_("h3",{attrs:{id:"开发四部曲。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发四部曲。","aria-hidden":"true"}},[i._v("#")]),i._v(" 开发四部曲。")]),i._v(" "),_("ol",[_("li",[i._v("git add .")]),i._v(" "),_("li",[_("code",[i._v('git commit -a "commit" / git commit -am "commit"')])]),i._v(" "),_("li",[_("code",[i._v("git pull origin master")])]),i._v(" "),_("li",[_("code",[i._v("git push origin master")])])]),i._v(" "),_("h3",{attrs:{id:"代码冲突。"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代码冲突。","aria-hidden":"true"}},[i._v("#")]),i._v(" 代码冲突。")]),i._v(" "),_("ol",[_("li",[i._v("解决冲突")]),i._v(" "),_("li",[_("code",[i._v("git add .")]),i._v("\n3."),_("code",[i._v("git rebase --continue")]),i._v(" （或者再次git commit）")]),i._v(" "),_("li",[_("code",[i._v("git push origin master")])])]),i._v(" "),_("h3",{attrs:{id:"git-分支管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-分支管理","aria-hidden":"true"}},[i._v("#")]),i._v(" git 分支管理")]),i._v(" "),_("ol",[_("li",[_("code",[i._v("git fetch （-p）")]),i._v("              // branch在服务器上的最新状态")]),i._v(" "),_("li",[_("code",[i._v("git branch (-a)")]),i._v("                // 查看所有branch")]),i._v(" "),_("li",[_("code",[i._v("git branch newBranch")]),i._v("    // 本地创建branch")]),i._v(" "),_("li",[_("code",[i._v("git checkout branch")]),i._v("        // 切换branch")]),i._v(" "),_("li",[_("code",[i._v("git checkout -b topic")]),i._v("     // 创建并切换到topic新分支")]),i._v(" "),_("li",[_("code",[i._v("git push origin topic:topic")]),i._v("       // 关联本地topic分支和远端topic分支")]),i._v(" "),_("li",[_("code",[i._v("git branch --set-upstream-to=origin/topic topic")]),i._v("     //设置本地topic的上游及远端分支（设置之后git pull将默认从远端topic分支可拉取代码，git push将默认推送代码到远端topic分支）")]),i._v(" "),_("li",[i._v("......")])]),i._v(" "),_("h3",{attrs:{id:"git版本管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git版本管理","aria-hidden":"true"}},[i._v("#")]),i._v(" git版本管理")]),i._v(" "),_("ul",[_("li",[_("code",[i._v("git reset --hard HEAD^")]),i._v("           // 回退上一个版本")]),i._v(" "),_("li",[_("code",[i._v("git reset --hard HEAD~3")]),i._v("           // 回退上三个版本")]),i._v(" "),_("li",[_("code",[i._v("git reset --hard 版本号")]),i._v("           // 回退指定版本")])]),i._v(" "),_("h3",{attrs:{id:"git远端版本回退"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git远端版本回退","aria-hidden":"true"}},[i._v("#")]),i._v(" git远端版本回退")]),i._v(" "),_("ol",[_("li",[_("code",[i._v("git checkout target_branch")]),i._v("             // 切换到需要回滚的分支")]),i._v(" "),_("li",[_("code",[i._v("git pull")]),i._v("\t\t                                                    //更新代码")]),i._v(" "),_("li",[_("code",[i._v("git branch target_branch_copy")]),i._v("            //备份一下这个分支当前的情况")]),i._v(" "),_("li",[_("code",[i._v("git reset --hard target_commit_id")]),i._v("    //把target_branch本地回滚到target_commit_id")]),i._v(" "),_("li",[_("code",[i._v("git push origin :target_branch")]),i._v("             //删除远程 target_branch")]),i._v(" "),_("li",[_("code",[i._v("git push origin target_branch")]),i._v("          //用回滚后的本地分支重新建立远程分支")]),i._v(" "),_("li",[_("code",[i._v("git push origin :target_branch_copy")]),i._v("      //如果前面都成功了，删除这个备份分支")])]),i._v(" "),_("h3",{attrs:{id:"git-大小写不敏感问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-大小写不敏感问题","aria-hidden":"true"}},[i._v("#")]),i._v(" git 大小写不敏感问题")]),i._v(" "),_("ul",[_("li",[_("p",[i._v("修改配置项")]),i._v(" "),_("ul",[_("li",[i._v("项目根目录下，ll -a")]),i._v(" "),_("li",[i._v("cd .git/ 进入.git/文件下，ll -a")]),i._v(" "),_("li",[i._v("修改config配置文件 vim config")]),i._v(" "),_("li",[i._v("ignorecase = false")]),i._v(" "),_("li",[i._v(":wq退出保存")]),i._v(" "),_("li",[i._v("修改文件名，提交。")]),i._v(" "),_("li",[i._v("ps:多人协作时不建议使用，大小写不统一时更新会报错。建议提交后再把配置项修改为true。")])])]),i._v(" "),_("li",[_("p",[i._v("重命名")]),i._v(" "),_("ul",[_("li",[i._v("git mv oldName newName")]),i._v(" "),_("li",[i._v("git status")]),i._v(" "),_("li",[i._v("可以看到rename的提示，此时正常提交即可。")])])])])])}],!1,null,null,null);a.options.__file="2018-11-9-git.md";t.default=a.exports}}]);