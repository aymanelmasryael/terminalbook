# الفصل الثاني: إدارة الملفات والمجلدات

## 2.1 الصلاحيات (Permissions)

```bash
ls -la
# -rw-r--r--  1 user  staff  4096 Jul 14 18:00 file.txt
#  │││ │││ │││
#  │││ │││ └┴┴── Others
#  │││ └┴┴───── Group
#  └┴┴───────── Owner
```

**شرح الصلاحيات:**
```
r = read (قراءة) = 4
w = write (كتابة) = 2
x = execute (تنفيذ) = 1
- = لا صلاحية = 0

مثال:
rwxr-xr-- = 754
rw-r--r-- = 644
rwxrwxrwx = 777
```

## 2.2 تغيير الصلاحيات chmod

```bash
chmod 755 file.txt
# owner: rwx (7)
# group: r-x (5)
# others: r-x (5)

chmod +x script.sh
# تفعيل تنفيذ الملف

chmod -x script.sh
# إلغاء تنفيذ الملف

chmod u+w file.txt
# إضافة صلاحية كتابة لـ owner

chmod g+r file.txt
# إضافة صلاحية قراءة لـ group

chmod o-x file.txt
# إزالة صلاحية تنفيذ من others
```

## 2.3 تغيير المالك chown

```bash
sudo chown user:staff file.txt
# تغيير المالك إلى user والـ group إلى staff

sudo chown -R user:staff folder/
# تغيير المالك لمجلد وجميع محتوياته

sudo chown user file.txt
# تغيير المالك فقط

sudo chown :staff file.txt
# تغيير الـ group فقط
```

## 2.4 الروابط (Links)

### Hard Link
```bash
ln file.txt hard_link.txt
# رابط صلب - يُشير إلى نفس الـ inode

# المميزات:
# - لا ينقطع إذا حُذف الملف الأصلي
# - نفس الصلاحيات والمحتوى
```

### Symbolic Link (Symlink)
```bash
ln -s file.txt symlink.txt
# رابط رمزي - يُشير إلى المسار

# المميزات:
# - يمكنه الإشارة لمجلدات
# - يمكنه الإشارة لملفات على أقراص مختلفة
# - ينقطع إذا حُذف الملف الأصلي
```

## 2.5 البحث عن ملفات find

```bash
find . -name "*.txt"
# يبحث عن ملفات تنتهي بـ .txt

find . -type f -name "*.py"
# يبحث عن ملفات فقط

find . -type d -name "test*"
# يبحث عن مجلدات فقط

find . -size +100M
# ملفات أكبر من 100MB

find . -mtime -7
# ملفات عُدّلت خلال آخر 7 أيام

find . -empty
# ملفات فارغة

find . -name "*.log" -delete
# حذف جميع ملفات الـ log
```

## 2.6 البحث عن نصوص grep المتقدم

```bash
grep -r "pattern" .
# بحث في جميع الملفات

grep -rn "pattern" .
# مع رقم السطر

grep -rl "pattern" .
# يُظهر أسماء الملفات فقط

grep -rli "pattern" .
# بحث بدون تمييز الأحرف

grep -A 3 "pattern" file.txt
# يُظهر 3 أسطر بعد التطابق

grep -B 3 "pattern" file.txt
# يُظهر 3 أسطر قبل التطابق

grep -C 3 "pattern" file.txt
# يُظهر 3 أسطر قبل وبعد
```

## 2.7 find + grep معًا

```bash
find . -name "*.txt" -exec grep "hello" {} \;
# يبحث عن "hello" في جميع ملفات .txt

find . -name "*.py" -exec grep -l "import" {} \;
# يُظهر ملفات Python التي تحتوي "import"
```

## 2.8 حجم المجلدات du

```bash
du -sh folder/
# حجم المجلد (مقروء)

du -sh *
# حجم كل عنصر

du -h --max-depth=1
# حجم المجلدات الفرعية

du -sh * | sort -rh
# ترتيب حسب الحجم
```

## 2.9 الملفات المخفية

```bash
ls -a
# تبدأ بـ .

.          # المجلد الحالي
..         # المجلد الأب
.zshrc     # إعدادات zsh
.git       # مجلد Git
.DS_Store  # إعدادات macOS
```

## 2.10 إخفاء وإظهار ملفات

```bash
mv file.txt .file.txt
# إخفاء الملف (إضافة نقطة في البداية)

mv .file.txt file.txt
# إظهار الملف
```

## 2.11 الأرشيفات

### إنشاء أرشيف
```bash
tar -cvf archive.tar folder/
# إنشاء أرشيف tar

tar -czvf archive.tar.gz folder/
# إنشاء أرشيف gzipped

zip -r archive.zip folder/
# إنشاء أرشيف zip
```

### استخراج أرشيف
```bash
tar -xvf archive.tar
# استخراج tar

tar -xzvf archive.tar.gz
# استخراج tar.gz

unzip archive.zip
# استخراج zip
```

## 2.12 نسخ عبر rsync

```bash
rsync -av source/ destination/
# نسخ محتويات مجلد

rsync -av --progress source/ destination/
# مع تقدم التنفيذ

rsync -av --exclude="*.log" source/ destination/
# استبعاد ملفات معينة
```
