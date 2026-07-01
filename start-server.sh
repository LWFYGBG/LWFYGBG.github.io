#!/bin/bash

NODE_PATH="/d/workspace/node/node-v20.16.0-win-x64"
GIT_PATH="/d/workspace/git/bin"
PROJECT_DIR="/d/workspace/LWFYGBG.github.io"
SERVER_PORT="5173"
PID_FILE="$PROJECT_DIR/.server.pid"

export PATH="$NODE_PATH:$GIT_PATH:$PATH"

check_server_status() {
    if [ -f "$PID_FILE" ]; then
        pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            echo "服务器状态: 运行中"
            echo "PID: $pid"
            echo "端口: $SERVER_PORT"
            echo "访问地址: http://localhost:$SERVER_PORT/"
            return 0
        else
            echo "服务器状态: 进程已终止，正在清理..."
            rm -f "$PID_FILE"
            return 1
        fi
    else
        echo "服务器状态: 未运行"
        return 1
    fi
}

start_server() {
    if check_server_status; then
        echo ""
        echo "服务器已在运行！"
        return
    fi

    echo ""
    echo "正在启动开发服务器..."
    
    cd "$PROJECT_DIR"
    "$NODE_PATH/npm.cmd" run dev &
    pid=$!
    echo "$pid" > "$PID_FILE"

    echo "服务器启动中，请稍候..."
    sleep 10

    if ps -p "$pid" > /dev/null 2>&1; then
        echo ""
        echo "服务器启动成功！"
        echo "PID: $pid"
        echo "访问地址: http://localhost:$SERVER_PORT/"
    else
        echo ""
        echo "服务器启动失败，请检查日志！"
        rm -f "$PID_FILE"
    fi
}

stop_server() {
    if ! check_server_status; then
        echo ""
        echo "服务器未运行！"
        return
    fi

    pid=$(cat "$PID_FILE")
    echo ""
    echo "正在停止服务器 (PID: $pid)..."
    kill -9 "$pid" 2>/dev/null
    sleep 2

    rm -f "$PID_FILE"
    echo "服务器已停止"
}

restart_server() {
    echo ""
    echo "正在重启服务器..."
    stop_server
    start_server
}

open_browser() {
    echo ""
    echo "正在打开浏览器..."
    start http://localhost:$SERVER_PORT/
}

while true; do
    clear
    echo "========================================="
    echo "    LWFYGBG 知识站点 - 服务器管理"
    echo "========================================="
    echo ""
    check_server_status
    echo ""
    echo "【1】启动服务器"
    echo "【2】关闭服务器"
    echo "【3】重启服务器"
    echo "【4】打开浏览器"
    echo "【5】查看状态"
    echo "【0】退出"
    echo ""
    echo "========================================="
    read -p "请选择操作 [0-5]: " choice

    case $choice in
        1) start_server ;;
        2) stop_server ;;
        3) restart_server ;;
        4) open_browser ;;
        5) check_server_status ;;
        0) 
            echo ""
            echo "退出程序"
            exit 0
            ;;
        *) 
            echo ""
            echo "无效选项，请重新选择！"
            ;;
    esac

    echo ""
    read -p "按任意键继续..." -n 1 -s
    echo ""
done