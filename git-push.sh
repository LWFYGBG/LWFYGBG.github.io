#!/usr/bin/env bash
cd "$(dirname "$0")" || exit

# 设置 Git 路径
export PATH="/d/Git/cmd:$PATH"

echo "=== 推送至 GitHub ==="

# 检查是否有提交信息参数
if [ -z "$1" ]; then
    echo "用法: ./git-push.sh \"提交信息\""
    echo "例如: ./git-push.sh \"更新数学基础页面\""
    exit 1
fi

# 显示状态
echo ""
echo "【1/4】检查变更状态..."
git status

echo ""
echo "【2/4】暂存所有变更..."
git add -A

echo ""
echo "【3/4】提交..."
git commit -m "$1"

echo ""
echo "【4/4】推送至 GitHub..."
git push

echo ""
echo "=== 完成！==="
echo "推送后等待几分钟，访问 https://github.com/LWFYGBG/LWFYGBG.github.io 查看"
