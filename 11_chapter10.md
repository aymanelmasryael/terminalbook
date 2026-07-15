# الفصل العاشر: الخصائص المتقدمة

## 10.1 Process Management

```bash
ps
# العمليات الجارية

ps aux
# جميع العمليات

ps aux | grep process_name
# البحث عن عملية

top
# مراقبة العمليات

htop
# top محسّن (يحتاج تثبيت)

kill PID
# إنهاء عملية

kill -9 PID
# إنهاء بالقوة

killall process_name
# إنهاء جميع نسخ العملية

pkill process_name
# إنهاء بالاسم

jobs
# العمليات في الخلفية

bg
# تشغيل في الخلفية

fg
# تشغيل في المقدمة

Ctrl+Z
# إيقاف مؤقت

nohup command &
# تشغيل حتى بعد إغلاق Terminal
```

## 10.2 Disk Management

```bash
df -h
# مساحة الأقراص

du -sh folder/
# حجم مجلد

du -sh *
# حجم كل عنصر

diskutil list
# أقراص macOS

diskutil eraseVolume /dev/disk2
# تهيئة قرص
```

## 10.3 System Information

```bash
uname -a
# معلومات النظام

sw_vers
# إصدار macOS

system_profiler SPHardwareDataType
# معلومات المعدات

ioreg -l | grep "Capacity"
# سعة البطارية

pmset -g
# إعدادات الطاقة
```

## 10.4 Launchctl (macOS Services)

```bash
launchctl list
# الخدمات الجارية

launchctl stop com.apple.FolderActions.enabled
# إيقاف خدمة

launchctl start com.apple.FolderActions.enabled
# تشغيل خدمة

# المجلدات
/System/Library/LaunchDaemons/    # خدمات النظام
~/Library/LaunchAgents/           # خدمات المستخدم
```

## 10.5 Defaults (إعدادات macOS)

```bash
defaults read
# قراءة جميع الإعدادات

defaults read com.apple.finder
# إعدادات Finder

defaults write com.apple.finder AppleShowAllFiles YES
# إظهار الملفات المخفية

defaults write NSGlobalDomain KeyRepeat -int 0
# تعطيل تكرار المفتاح

# إعادة التشغيل
killall Finder
```

## 10.6 Spotlight Control

```bash
# تعطيل Spotlight مؤقتاً
sudo mdutil -a -i off

# تفعيل
sudo mdutil -a -i on

# إعادة بناء الفهرس
sudo mdutil -E /
```

## 10.7 Network Utilities

```bash
ifconfig en0
# معلومات الشبكة

networksetup -getinfo Wi-Fi
# معلومات Wi-Fi

system_profiler SPNetworkDataType
# معلومات الشبكة المفصلة

scutil --dns
# إعدادات DNS

networksetup -setdnsservers Wi-Fi 8.8.8.8 8.8.4.4
# تغيير DNS
```

## 10.8 Homebrew

```bash
# التثبيت
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# الأساسيات
brew install package_name
brew uninstall package_name
brew update
brew upgrade
brew list
brew search keyword
brew info package_name
```

## 10.9 SSH Keys

```bash
ssh-keygen -t ed25519 -C "your@email.com"
# إنشاء مفتاح

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
# بدء SSH agent وإضافة المفتاح

cat ~/.ssh/id_ed25519.pub
# عرض المفتاح العام
```

## 10.10 Security

```bash
# تشفير ملف
openssl enc -aes-256-cbc -in file.txt -out file.enc

# فك التشفير
openssl enc -d -aes-256-cbc -in file.enc -out file.txt

# إنشاء كلمة مرور
openssl rand -base64 32
```

## 10.11 Performance

```bash
# قياس أداء أمر
time command

# مراقبة الذاكرة
vm_stat

# مراقبة الأداء
sudo fs_usage
# استخدام الملفات

sudo dtrace -n 'syscall::read { @bytes = sum(arg2); }'
# مراقبة القراءة
```
