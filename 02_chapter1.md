# الفصل الأول: الأساسيات

## 1.1 pwd - أين أنا؟

```bash
pwd
# المخرجات: /Users/aymanelmasry
```

**pwd = Print Working Directory**
تُظهر المجلد الحالي الذي أنت فيه

## 1.2 ls - ماذا يوجد هنا؟

```bash
ls
# يُظهر الملفات والمجلدات في المجلد الحالي
```

**خيارات مهمة:**
```bash
ls -la
# -l: تفاصيل (الحجم، التاريخ، الصلاحيات)
# -a: إظهار الملفات المخفية (التي تبدأ بـ .)

ls -lh
# -h: حجم مقروء (KB, MB, GB)

ls -lt
# -t: ترتيب حسب التاريخ (الأحدث أولاً)

ls -lS
# -S: ترتيب حسب الحجم
```

**مثال:**
```bash
ls -la
# drwxr-xr-x  5 aymanelmasry  staff   160 Jul 14 18:00 .
# drwxr-xr-x  3 aymanelmasry  staff    96 Jul 14 18:00 ..
# -rw-r--r--  1 aymanelmasry  staff  3136 Jul 14 18:00 file.txt
# drwxr-xr-x  2 aymanelmasry  staff    64 Jul 14 18:00 folder
```

## 1.3 cd - انتقل إلى

```bash
cd /Users        # انتقل إلى /Users
cd Documents     # انتقل إلى Documents
cd ..            # ارجع مجلد واحد للأعلى
cd ~             # ارجع إلى Home
cd -             # ارجع إلى المجلد السابق
cd               # ارجع إلى Home (بدون مسار)
```

**أمثلة:**
```bash
cd ~/Documents         # انتقل إلى Documents في Home
cd ../Projects         # انتقل إلى Projects (جاري)
cd /Applications       # انتقل إلى Applications
cd -                   # ارجع إلى المجلد الذي كنت فيه
```

## 1.4 clear - مسح الشاشة

```bash
clear
# أو
Cmd + K
```

## 1.5 history - سجل الأوامر

```bash
history
# يُظهر جميع الأوامر التي كتبتها

history | grep "cd"
# يبحث عن أوامر تحتوي "cd"

!100
# يُ executing الأمر رقم 100
```

## 1.6 man - دليل الأمر

```bash
man ls
# يُظهر الدليل الكامل لـ ls

man -k search
# يبحث عن أوامر تحتوي كلمة search
```

## 1.7 which - أين هذا البرنامج؟

```bash
which python3
# /usr/bin/python3

which git
# /usr/bin/git
```

## 1.8 echo - طباعة نص

```bash
echo "Hello World"
# Hello World

echo $PATH
# /usr/local/bin:/usr/bin:/bin:...

echo "Hello" > file.txt
# يكتب Hello في file.txt

echo "World" >> file.txt
# يضيف World في نهاية file.txt
```

## 1.9 touch - إنشاء ملف

```bash
touch file.txt
# يُنشأ ملف فارغ

touch file1.txt file2.txt
# يُنشأ عدة ملفات

touch -t 202401011200 file.txt
# يُنشئ ملف بتاريخ محدد
```

## 1.10 mkdir - إنشاء مجلد

```bash
mkdir folder
# يُنشأ مجلد

mkdir -p a/b/c
# يُنشأ مجلدات متداخلة

mkdir folder1 folder2
# يُنشأ عدة مجلدات
```

## 1.11 rm - حذف

```bash
rm file.txt
# يحذف ملف

rm -r folder
# يحذف مجلد وجميع محتوياته

rm -ri folder
# يطلب تأكيد قبل الحذف

rm -f file.txt
# يحذف بدون تأكيد (خطر!)
```

**تحذير:** Terminal لا يطلب تأكيد قبل الحذف! كن حذراً

## 1.12 cp - نسخ

```bash
cp file.txt backup.txt
# ينسخ file.txt إلى backup.txt

cp -r folder backup_folder
# ينسخ مجلد وكل محتوياته

cp -i file.txt folder/
# يطلب تأكيد إذا كان الملف موجوداً
```

## 1.13 mv - نقل/إعادة تسمية

```bash
mv file.txt folder/
# ينقل file.txt إلى folder

mv old.txt new.txt
# يُعيد تسمية old.txt إلى new.txt

mv -i file.txt folder/
# يطلب تأكيد
```

## 1.14 cat - عرض محتوى ملف

```bash
cat file.txt
# يُظهر محتوى الملف كاملاً

cat file1.txt file2.txt
# يُظهر محتوى كلا الملفين

cat -n file.txt
# يُظهر مع أرقام الأسطر
```

## 1.15 less - تصفح ملف

```bash
less file.txt
# يفتح الملف للتصفح

# أوامر less:
# Space: صفحة تالية
# b: صفحة سابقة
# /text: بحث عن text
# n: تكرار البحث
# q: خروج
```

## 1.16 head/tail - بداية/نهاية ملف

```bash
head file.txt
# أول 10 أسطر

head -20 file.txt
# أول 20 سطراً

tail file.txt
# آخر 10 أسطر

tail -20 file.txt
# آخر 20 سطراً

tail -f log.txt
# يُظهر السطور الجديدة أثناء كتابتها (مفيد للـ logs)
```

## 1.17 grep - بحث في نص

```bash
grep "hello" file.txt
# يبحث عن "hello" في الملف

grep -i "hello" file.txt
# بحث بدون تمييز الأحرف الكبيرة والصغيرة

grep -r "hello" folder/
# بحث في جميع الملفات في المجلد

grep -n "hello" file.txt
# يُظهر رقم السطر

grep -c "hello" file.txt
# يُعدد مرات التكرار

grep -v "hello" file.txt
# يُظهر السطور التي لا تحتوي "hello"
```

## 1.18 wc - عد الكلمات والأسطر

```bash
wc file.txt
# 10 50 300 file.txt
# (أسطر) (كلمات) (أحرف)

wc -l file.txt
# عدد الأسطر فقط

wc -w file.txt
# عدد الكلمات فقط

wc -c file.txt
# عدد الأحرف فقط
```

## 1.19管道 (Pipes) والتحويلات

```bash
# Pipe: يُمرر مخرجات أمر إلى آخر
ls -la | grep ".txt"
# يُظهر الملفات التي تنتهي بـ .txt

cat file.txt | sort
# يُرتب محتوى الملف

cat file.txt | sort | uniq
# يُرتب ويُزيل التكرارات

ls -la | wc -l
# يُعدد عدد الملفات
```

## 1.20 التحويلات (Redirection)

```bash
# >
echo "hello" > file.txt
# يكتب في الملف (يحذف المحتوى السابق)

# >>
echo "world" >> file.txt
# يضيف إلى الملف

# <
sort < file.txt
# يُمرر محتوى الملف إلى sort

# 2>
command 2> error.txt
# يُحوّل الأخطاء إلى ملف

# &>
command &> output.txt
# يُحوّل المخرجات والأخطاء إلى ملف
```

## ملخص

```
pwd     - أين أنا
ls      - ماذا يوجد
cd      - انتقل
clear   - مسح الشاشة
history - سجل الأوامر
man     - دليل
which   - أين البرنامج
echo    - طباعة
touch   - إنشاء ملف
mkdir   - إنشاء مجلد
rm      - حذف
cp      - نسخ
mv      - نقل/إعادة تسمية
cat     - عرض ملف
less    - تصفح ملف
head    - بداية ملف
tail    - نهاية ملف
grep    - بحث
wc      - عد
|       - pipe
> >>   - تحويل
```
