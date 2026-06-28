@echo off
chcp 65001 >nul
echo ================================
echo   LWFYGBG 环境配置工具
echo ================================
echo.

:: Git 路径
set GIT_PATH=D:\Git\cmd

:: Node 路径（项目自带）
set NODE_PATH=D:\Ai_math\node

:: 检查 Git
if exist "%GIT_PATH%\git.exe" (
    echo [OK] Git 已找到: %GIT_PATH%
) else (
    echo [!!] 未找到 Git，请检查 D:\Git
)

:: 检查 Node
if exist "%NODE_PATH%\node.exe" (
    echo [OK] Node 已找到: %NODE_PATH%
) else (
    echo [!!] 未找到 Node
)

echo.
echo 正在添加到用户环境变量 PATH...
echo.

:: 获取当前用户 PATH
for /f "skip=2 tokens=3*" %%a in ('reg query HKCU\Environment /v Path 2^>nul') do set USER_PATH=%%a%%b

:: 检查并添加 Git 路径
echo "%USER_PATH%" | find /i "%GIT_PATH%" >nul
if errorlevel 1 (
    setx Path "%GIT_PATH%;%USER_PATH%" >nul
    if errorlevel 1 (
        echo [!!] 添加 Git 到 PATH 失败，请手动添加
    ) else (
        echo [OK] Git 已添加到 PATH
    )
) else (
    echo [OK] Git 已在 PATH 中
)

:: 重新获取更新后的 PATH
for /f "skip=2 tokens=3*" %%a in ('reg query HKCU\Environment /v Path 2^>nul') do set USER_PATH=%%a%%b

:: 检查并添加 Node 路径
echo "%USER_PATH%" | find /i "%NODE_PATH%" >nul
if errorlevel 1 (
    setx Path "%NODE_PATH%;%USER_PATH%" >nul
    if errorlevel 1 (
        echo [!!] 添加 Node 到 PATH 失败，请手动添加
    ) else (
        echo [OK] Node 已添加到 PATH
    )
) else (
    echo [OK] Node 已在 PATH 中
)

echo.
echo ================================
echo  配置完成！请重启终端生效
echo ================================
echo.
echo 验证方法：
echo   打开新终端，输入： git --version
echo   打开新终端，输入： node --version
echo.
echo 或直接打开 Git Bash（D:\Git\git-bash.exe）
echo.
pause
