# الفصل السابع: Python والبرمجة

## 7.1 تشغيل Python

```bash
python3 --version
# عرض الإصدار

python3 script.py
# تشغيل ملف

python3
# تشغيل Python interactive
```

## 7.2 pip - إدارة الحزم

```bash
pip3 install package_name
# تثبيت حزمة

pip3 install --upgrade package_name
# ترقية

pip3 uninstall package_name
# إلغاء التثبيت

pip3 list
# عرض الحزم المثبتة

pip3 show package_name
# معلومات عن الحزمة

pip3 freeze > requirements.txt
# تصدير الحزم

pip3 install -r requirements.txt
# تثبيت من ملف
```

## 7.3 Virtual Environments

```bash
python3 -m venv myenv
# إنشاء بيئة افتراضية

source myenv/bin/activate
# تفعيل البيئة

deactivate
# إيقاف البيئة

# أو باستخدام venv
python3 -m venv env
source env/bin/activate
```

## 7.4 تشغيل برمجيات

```bash
# تشغيل program
./program

# تشغيل shell script
chmod +x script.sh
./script.sh

# تشغيل node
node script.js

# تشغيل java
java MainClass
```

## 7.5 صلاحيات التنفيذ

```bash
chmod +x script.sh
# جعل الملف قابل للتنفيذ

chmod 755 script.sh
# صلاحيات كاملة

ls -la script.sh
# التأكد من الصلاحيات
```

## 7.6 tmux - شاشات متعددة

```bash
tmux
# بدء جلسة

tmux new -s name
# جلسة باسم

tmux attach -t name
# الاتصال بجلسة

tmux ls
# عرض الجلسات

tmux kill-session -t name
# حذف جلسة

# أوامر tmux (داخل الجلسة):
# Ctrl+b, d: disconnect
# Ctrl+b, c: new window
# Ctrl+b, n: next window
# Ctrl+b, p: previous window
```

## 7.7 screen - بديل tmux

```bash
screen
# بدء جلسة

screen -S name
# جلسة باسم

screen -r name
# الاتصال بجلسة

screen -ls
# عرض الجلسات

# أوامر screen:
# Ctrl+a, d: detach
# Ctrl+a, c: new window
# Ctrl+a, n: next window
```
