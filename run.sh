# 确保脚本抛出遇到的错误
set -e

# 运行npm run dev并检查其退出状态
npm run dev &
echo "npm run dev已在后台启动。"

# 给npm run dev一些时间来确保服务启动，可根据实际情况调整等待时间
sleep 5 #

# 检查当前是否为dev分支 提交代码到dev分支
current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" = "dev" ]; then
    echo "当前位于dev分支，开始提交代码..."
    
    # 打包生成静态文件（根据需要可选）
    # npm run build

    # 添加并提交所有改动
    git add .
    git commit -m "自动提交 dev 分支的更改"

    # 推送到远程dev分支
    git push origin dev
    
    echo "dev分支代码提交并推送完成。"
else
    echo "当前不在dev分支，不执行提交操作。"
fi    

# 打包生成静态文件 推送到远程
npm run build

# 进入打包好的文件夹
cd public
# 确保本地有 master 分支，如果没有则创建并关联到远程 master
git checkout -b master origin/master || git checkout master
git pull origin master --rebase # 获取最新远程 master 分支的变动

# 创建git的本地仓库，提交修改
git init
git add -A
git commit -m 'deploy'

# 覆盖式地将本地仓库发布至github，因为发布不需要保留历史记录
# 格式为：git push -f git@github.com:'用户名'/'仓库名'.git master
git push -f git@github.com:chengbocd/chengbocd.github.io.git master


