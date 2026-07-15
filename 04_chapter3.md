# الفصل الثالث: البحث والتصفح

## 3.1 Spotlight من Terminal

```bash
mdfind "kMDItemDisplayName == '*.txt'"
# يبحث عن ملفات .txt

mdfind "kMDItemTextContent == 'hello'"
# يبحث عن نصوص تحتوي "hello"

mdfind -name file.txt
# يبحث عن ملف بالاسم

mdfind -onlyin ~/Documents "search term"
# بحث في مجلد محدد
```

## 3.2 which و where

```bash
which python3
# /usr/bin/python3

where python3
# /usr/bin/python3
# /usr/local/bin/python3

type python3
# python3 is /usr/bin/python3
```

## 3.3 locate (أسرع من find)

```bash
# أولاً حدّث قاعدة البيانات
sudo launchctl load -w /System/Library/LaunchDaemons/com.apple.locate.plist

locate file.txt
# يبحث بسرعة في قاعدة البيانات

locate -i file.txt
# بحث بدون تمييز الأحرف
```

## 3.4 tree - عرض شجرة المجلدات

```bash
tree
# يُظهر شجرة المجلدات

tree -L 2
# عمق 2 مستوى فقط

tree -d
# المجلدات فقط

tree -f
# يُظهر المسارات الكاملة
```

**تثبيت tree:**
```bash
brew install tree
```

## 3.5 fzf - بحث تفاعلي

```bash
# تثبيت
brew install fzf

# الاستخدام
fzf
# يبحث تفاعلياً في الملفات

find . -type f | fzf
# بحث في الملفات

cat $(fzf)
# يفتح الملف المختار
```

## 3.6 rg (ripgrep) - بحث أسرع

```bash
# تثبيت
brew install ripgrep

# الاستخدام
rg "pattern"
# يبحث في جميع الملفات

rg -i "pattern"
# بحث بدون تمييز الأحرف

rg -l "pattern"
# يُظهر أسماء الملفات فقط

rg -c "pattern"
# يُعدد التكرارات

rg -t py "pattern"
# يبحث في ملفات Python فقط
```

## 3.7 fd - بحث عن ملفات

```bash
# تثبيت
brew install fd

# الاستخدام
fd pattern
# يبحث عن ملفات

fd -e txt
# ملفات .txt فقط

fd -t d
# مجلدات فقط

fd -H
# يُظهر الملفات المخفية
```

## 3.8 bat - cat محسّن

```bash
# تثبيت
brew install bat

# الاستخدام
bat file.txt
# يُظهر الملف مع syntax highlighting

bat -l py file.txt
# تحديد نوع الملف

bat -A file.txt
# يُظهر الأحرف غير المرئية
```

## 3.9 exa - ls محسّن

```bash
# تثبيت
brew install exa

# الاستخدام
exa
# ls محسّن بالألوان

exa -la
# تفاصيل مع الألوان

exa --tree
# شجرة المجلدات

exa -la --git
# مع معلومات Git
```
