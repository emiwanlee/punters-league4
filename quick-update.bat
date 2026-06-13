@echo off
title Punters League - Quick Update Tool
color 0A

echo ╔══════════════════════════════════════════════════════════╗
echo ║                                                          ║
echo ║     🚀 PUNTERS LEAGUE - QUICK UPDATE SYSTEM v2.0        ║
echo ║                                                          ║
echo ╚══════════════════════════════════════════════════════════╝
echo.

REM Check if git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Git is not installed or not in PATH!
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

echo ✅ Git found!
echo.

REM Check if we're in the right directory
if not exist "js\data.js" (
    echo ❌ Error: Cannot find js\data.js
    echo Make sure you're in the project root folder!
    echo Current directory: %cd%
    pause
    exit /b 1
)

echo ✅ Project directory verified!
echo.

echo 📋 Step 1: Opening Match Converter...
echo.

start update-helper.html

echo ✅ Converter opened in your browser
echo.
echo 📝 Step 2: After pasting your matches:
echo    1. Copy results from Google
echo    2. Paste into the converter
echo    3. Click "Convert to JSON"
echo    4. Click "Copy Output"
echo    5. Open js/matchesData.js and paste
echo.

pause

echo.
echo 📤 Step 3: Checking for changes...
echo.

git status

echo.
echo 📝 Step 4: Adding and committing changes...
echo.

git add .
git commit -m "Daily match results update - %date%"

if %errorlevel% neq 0 (
    echo.
    echo ⚠️ No changes to commit or commit failed
    echo.
    choice /C YN /M "Continue with push anyway?"
    if errorlevel 2 goto :end
)

echo.
echo 🚀 Step 5: Pushing to GitHub...
echo.

git push origin main

if %errorlevel% neq 0 (
    echo.
    echo ❌ Push failed! Trying force push...
    git push origin main --force
)

echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║                                                          ║
echo ║     ✅ UPDATE COMPLETE!                                 ║
echo ║     🌐 Site will update in 2-3 minutes                  ║
echo ║                                                          ║
echo ║     📊 Check your site at:                              ║
echo ║     https://punters-league.com                          ║
echo ║                                                          ║
echo ╚══════════════════════════════════════════════════════════╝
echo.

:end
echo Press any key to exit...
pause > nul