# الفصل التاسع: السكريبتات

## 9.1 أساسيات Bash Scripting

```bash
#!/bin/bash
# هذا هو Shebang - يُحدد نوع الـ shell

echo "Hello World"
```

## 9.2 تشغيل السكريبت

```bash
chmod +x script.sh
./script.sh
```

## 9.3 المتغيرات

```bash
# تعيين
NAME="Ahmed"
AGE=25

# قراءة
echo "Name: $NAME"
echo "Name: ${NAME}"

# قراءة من المستخدم
read -p "Enter name: " USER_NAME

# متحولات البيئة
echo "Home: $HOME"
echo "User: $USER"
```

## 9.4 الشروط (if/else)

```bash
if [ "$AGE" -ge 18 ]; then
    echo "Adult"
elif [ "$AGE" -ge 13 ]; then
    echo "Teenager"
else
    echo "Child"
fi

# شروط شائعة
# -eq  يساوي
# -ne  لا يساوي
# -gt  أكبر من
# -lt  أصغر من
# -ge  أكبر أو يساوي
# -le  أصغر أو يساوي
```

## 9.5 الحلقات

### for loop
```bash
for i in 1 2 3 4 5; do
    echo "Number: $i"
done

for file in *.txt; do
    echo "File: $file"
done

for ((i=0; i<10; i++)); do
    echo "i: $i"
done
```

### while loop
```bash
while [ "$COUNT" -lt 10 ]; do
    echo "Count: $COUNT"
    ((COUNT++))
done

# قراءة ملف سطراً بسطر
while IFS= read -r line; do
    echo "Line: $line"
done < file.txt
```

### until loop
```bash
until [ "$COUNT" -ge 10 ]; do
    echo "Count: $COUNT"
    ((COUNT++))
done
```

## 9.6 الدوال

```bash
greet() {
    echo "Hello, $1!"
}

greet "Ahmed"
# Output: Hello, Ahmed!

# دالة مع إرجاع
add() {
    echo $(($1 + $2))
}

RESULT=$(add 5 3)
echo "Result: $RESULT"
# Output: Result: 8
```

## 9.7 معالجة الأخطاء

```bash
# التأكد من نجاح الأمر
if command; then
    echo "Success"
else
    echo "Failed"
fi

# الإخراج عند الخطأ
set -e
# يُوقف السكريبت عند أي خطأ

# Trap
trap 'echo "Error occurred"; exit 1' ERR
```

## 9.8 مثال عملي: نسخ احتياطي

```bash
#!/bin/bash

BACKUP_DIR="/backup/$(date +%Y%m%d)"
SOURCE_DIR="/Users/aymanelmasry/Documents"

# إنشاء مجلد النسخ الاحتياطي
mkdir -p "$BACKUP_DIR"

# النسخ
rsync -av --progress "$SOURCE_DIR/" "$BACKUP_DIR/"

echo "Backup completed: $BACKUP_DIR"
```

## 9.9 مثال عملي: مراقبة المجلد

```bash
#!/bin/bash

WATCH_DIR="/Users/aymanelmasry/Downloads"

while true; do
    # فحص ملفات جديدة
    new_files=$(find "$WATCH_DIR" -maxdepth 1 -type f -newer /tmp/last_check 2>/dev/null)
    
    if [ -n "$new_files" ]; then
        echo "New files found:"
        echo "$new_files"
    fi
    
    # تحديث علامة التحقق
    touch /tmp/last_check
    
    sleep 5
done
```

## 9.10 Cron Jobs

```bash
crontab -e
# تحرير المهام المجدولة

# الصيغة:
# minute hour day month weekday command

# أمثلة:
0 * * * * /path/to/script.sh    # كل ساعة
0 0 * * * /path/to/script.sh    # يومياً عند منتصف الليل
0 0 * * 0 /path/to/script.sh    # أسبوعياً أحد
*/5 * * * * /path/to/script.sh   # كل 5 دقائق

# عرض المهام
crontab -l
```
