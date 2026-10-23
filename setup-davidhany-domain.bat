@echo off
echo ========================================================
echo   Configuring Local Domain: http://davidhany.local:3000
echo ========================================================
echo.

findstr /C:"davidhany.local" "%WINDIR%\System32\drivers\etc\hosts" >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] davidhany.local is ALREADY registered in your hosts file!
) else (
    echo Adding '127.0.0.1 davidhany.local' to %WINDIR%\System32\drivers\etc\hosts ...
    echo 127.0.0.1 davidhany.local>> "%WINDIR%\System32\drivers\etc\hosts"
    if %ERRORLEVEL% EQU 0 (
        echo [SUCCESS] Domain registered successfully!
    ) else (
        echo [ERROR] Please right-click this file and choose "Run as administrator".
    )
)

echo.
echo Now you can open: http://davidhany.local:3000
echo ========================================================
pause
