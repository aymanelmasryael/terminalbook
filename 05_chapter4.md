# الفصل الرابع: معالجة النصوص

## 4.1 sort - ترتيب

```bash
sort file.txt
# ترتيب أبجدي

sort -r file.txt
# ترتيب عكسي

sort -n file.txt
# ترتيب حسب الأرقام

sort -u file.txt
# ترتيب وإزالة التكرارات

sort -k 2 file.txt
# ترتيب حسب العمود الثاني

sort -t: -k 3 file.txt
# ترتيب حسب العمود الثالث (فاصل :)
```

## 4.2 uniq - إزالة التكرارات

```bash
sort file.txt | uniq
# إزالة التكرارات (يجب ترتيب أولاً)

sort file.txt | uniq -c
# عد مرات التكرار

sort file.txt | uniq -d
# إظهار المكررات فقط

sort file.txt | uniq -u
# إظهار الفريدة فقط
```

## 4.3 cut - قص أعمدة

```bash
cut -f 1 file.txt
# العمود الأول فقط

cut -f 1,3 file.txt
# العمود الأول والثالث

cut -d: -f 1 /etc/passwd
# فاصل :

cut -c 1-10 file.txt
# الأحرف 1 إلى 10
```

## 4.4 awk - معالجة متقدمة

```bash
awk '{print $1}' file.txt
# الطباعة العمود الأول

awk -F: '{print $1}' file.txt
# فاصل :

awk '{print NR, $0}' file.txt
# مع رقم السطر

awk '$3 > 100' file.txt
# شرط: العمود الثالث أكبر من 100

awk '{sum += $1} END {print sum}' file.txt
# مجموع العمود الأول

awk '/pattern/ {print NR}' file.txt
# أسطر تحتوي pattern
```

## 4.5 sed - تحرير النصوص

```bash
sed 's/old/new/' file.txt
# استبدال أول تكرار

sed 's/old/new/g' file.txt
# استبدال جميع التكرارات

sed -i 's/old/new/g' file.txt
# تحرير الملف مباشرة

sed -n '10,20p' file.txt
# إظهار الأسطر 10 إلى 20

sed '5d' file.txt
# حذف السطر 5

sed '/pattern/d' file.txt
# حذف أسطر تحتوي pattern

sed '1i\new line' file.txt
# إضافة سطر في البداية

sed '$a\new line' file.txt
# إضافة سطر في النهاية
```

## 4.6 tr - تحويل الأحرف

```bash
echo "hello" | tr 'a-z' 'A-Z'
# HELLO

echo "hello" | tr 'a-z' 'A-Z' | tr 'H' 'h'
# HELLO

echo "hello   world" | tr -s ' '
# hello world (إزالة المسافات الزائدة)

echo "hello" | tr -d 'l'
# heo

echo "hello123" | tr -d '0-9'
# hello
```

## 4.7 paste - دمج أعمدة

```bash
paste file1.txt file2.txt
# دمج ملفين جنباً إلى جنب

paste -d: file1.txt file2.txt
# فاصل :

paste -s file.txt
# دمج كل الأسطر في سطر واحد
```

## 4.8 join - دمج ملفين

```bash
join file1.txt file2.txt
# دمج ملفين حسب العمود الأول

join -t: -1 2 -2 3 file1.txt file2.txt
# تحديد الفاصل والأعمدة
```

## 4.9 column - تنسيق جدول

```bash
ls -la | column -t
# تنسيق كجدول

echo "a,b,c" | column -t -s,
# تقطيع بالفاصل
```

## 4.10 xargs - تحويل stdin إلى وسائط

```bash
find . -name "*.txt" | xargs grep "hello"
# يبحث عن hello في ملفات txt

find . -name "*.txt" | xargs rm
# يحذف ملفات txt

find . -name "*.txt" | xargs -I {} cp {} backup/
# ينسخ كل ملف إلى backup
```

## 4.11 tee - قراءة وكتابة

```bash
echo "hello" | tee file.txt
# يطبع ويكتب في الملف

echo "hello" | tee -a file.txt
# يطبع ويضيف إلى الملف

ls | tee files.txt | grep ".txt"
# يكتب النتيجة ويُمررها لـ grep
```

## 4.12 wc المتقدم

```bash
wc -l *.txt
# عدد الأسطر لكل ملف

find . -name "*.py" | xargs wc -l
# عدد الأسطر لملفات Python

wc -l *.py | sort -n
# ترتيب حسب عدد الأسطر
```
