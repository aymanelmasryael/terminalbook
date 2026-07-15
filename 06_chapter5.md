# الفصل الخامس: الشبكات

## 5.1 curl - طلبات HTTP

```bash
curl https://api.example.com
# طلب GET

curl -o file.txt https://example.com/file.txt
# تحميل ملف

curl -O https://example.com/file.txt
# تحميل بنفس الاسم

curl -I https://example.com
# Headers فقط

curl -X POST -d "data=value" https://api.example.com
# طلب POST

curl -H "Content-Type: application/json" -d '{"key":"value"}' https://api.example.com
# POST مع JSON
```

## 5.2 wget - تحميل

```bash
wget https://example.com/file.txt
# تحميل ملف

wget -c https://example.com/large.iso
# استئناف التحميل

wget -r https://example.com/
# تحميل الموقع كاملاً
```

## 5.3 ping - فحص الاتصال

```bash
ping google.com
# فحص الاتصال

ping -c 4 google.com
# 4 محاولات فقط

ping -i 0.2 google.com
# كل 0.2 ثانية
```

## 5.4 ifconfig / ip - معلومات الشبكة

```bash
ifconfig
# معلومات جميع الواجهات

ifconfig en0
# معلومات واجهة en0

ip addr show
# Linux style
```

## 5.5 networksetup - إعدادات الشبكة

```bash
networksetup -getinfo Wi-Fi
# معلومات Wi-Fi

networksetup -setairportpower en0 on
# تفعيل Wi-Fi

networksetup -setairportpower en0 off
# إيقاف Wi-Fi
```

## 5.6 DNS

```bash
nslookup google.com
# بحث DNS

dig google.com
# معلومات DNS مفصلة

host google.com
# معلومات DNS بسيطة

dscacheutil -q host -a name google.com
# DNS على macOS
```

## 5.7 netstat - معلومات الاتصالات

```bash
netstat -an
# جميع الاتصالات

netstat -tuln
# المنافذ المفتوحة

netstat -r
# جدول التوجيه
```

## 5.8 lsof - الملفات المفتوحة

```bash
lsof -i
# الملفات المفتوحة عبر الشبكة

lsof -i :80
# المنفذ 80

lsof -u username
# ملفات مستخدم محدد

lsof -c process_name
# ملفات عملية محددة
```

## 5.9 ssh - الاتصال عن بعد

```bash
ssh user@hostname
# اتصال بسيط

ssh -p 2222 user@hostname
# منفذ محدد

ssh -i ~/.ssh/key.pem user@hostname
# بمفتاح SSH

ssh -L 8080:localhost:80 user@hostname
# Port Forwarding
```

## 5.10 scp - نسخ عبر الشبكة

```bash
scp file.txt user@hostname:/remote/path
# نسخ إلى الخادم

scp user@hostname:/remote/file.txt ./
# نسخ من الخادم

scp -r folder/ user@hostname:/remote/path
# نسخ مجلد
```

## 5.11 rsync عبر الشبكة

```bash
rsync -avz -e ssh folder/ user@hostname:/remote/path
# مزامنة عبر SSH

rsync -avz --delete folder/ user@hostname:/remote/path
# مزامنة مع حذف
```

## 5.12 nc (netcat) - اختبار المنافذ

```bash
nc -zv google.com 80
# اختبار المنفذ 80

nc -zv google.com 80-90
# اختبار نطاق منافذ
```
