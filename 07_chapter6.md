# الفصل السادس: Git

## 6.1 ما هو Git؟

```
Git هو نظام التحكم في الإصدارات
يُستخدم لتتبع التغييرات في الكود
يسمح بالعمل الجماعي والتعاون
```

## 6.2 الإعداد الأولي

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

git config --list
# عرض الإعدادات
```

## 6.3 إنشاء مستودع

```bash
git init
# إنشاء مستودع جديد

git init existing_folder
# تحويل مجلد إلى مستودع

git clone https://github.com/user/repo.git
# استنساخ مستودع
```

## 6.4 الحالات الأساسية

```bash
git status
# حالة الملفات

git status -s
# حالة مختصرة
```

**الحالة:**
```
?? = Untracked (ملف جديد)
A  = Added (تمت الإضافة)
M  = Modified (تم التعديل)
D  = Deleted (تم الحذف)
R  = Renamed (تمت إعادة التسمية)
```

## 6.5 الإضافة وال.commit

```bash
git add file.txt
# إضافة ملف

git add .
# إضافة جميع التغييرات

git add -A
# إضافة جميع التغييرات

git commit -m "message"
# commit مع رسالة

git commit -am "message"
# add + commit للملفات المتعةدة
```

## 6.6 سجل التغييرات

```bash
git log
# السجل الكامل

git log --oneline
# سجل مختصر

git log --oneline -10
# آخر 10 commits

git log --graph
# مع رسم بياني

git log --author="name"
# commits لمؤلف محدد

git log --since="2024-01-01"
# commits منذ تاريخ معين
```

## 6.7 التفاضل

```bash
git diff
# التغييرات غير المُضافة

git diff --staged
# التغييرات المُضافة

git diff branch1..branch2
# الفرق بين فرعين

git diff HEAD~3
# آخر 3 commits
```

## 6.8 التراجع

```bash
git restore file.txt
# التراجع عن تغيير

git restore --staged file.txt
# إزالة من staging

git reset HEAD~1
# إلغاء آخر commit

git reset --soft HEAD~1
# إلغاء commit مع الحفاظ على التغييرات

git reset --hard HEAD~1
# إلغاء commit وحذف التغييرات
```

## 6.9 الفروع (Branches)

```bash
git branch
# عرض الفروع

git branch branch_name
# إنشاء فرع

git checkout branch_name
# التبديل لفرع

git checkout -b branch_name
# إنشاء والتبديل

git branch -d branch_name
# حذف فرع

git branch -D branch_name
# حذف فرع بالقوة
```

## 6.10 الدمج (Merge)

```bash
git merge branch_name
# دمج فرع في الحالي

git merge --abort
# إلغاء الدمج

git rebase branch_name
# إعادة تطبيق commits
```

## 6.11 العمل الجماعي

```bash
git push origin branch_name
# رفع إلى الخادم

git push -u origin branch_name
# رفع مع تعيين

git pull
# سحب ودمج

git fetch
# سحب بدون دمج

git remote -v
# عرض الـ remotes

git remote add origin url
# إضافة remote
```

## 6.12 العلامات (Tags)

```bash
git tag v1.0
# إنشاء علامة

git tag -a v1.0 -m "message"
# علامة مع رسالة

git push origin v1.0
# رفع العلامة

git tag
# عرض العلامات
```

## 6.13 gitignore

```bash
# ملف .gitignore
*.log
*.pyc
__pycache__/
.env
node_modules/
.DS_Store
```

## 6.14 أوامر مفيدة

```bash
git stash
# إخفاء التغييرات

git stash pop
# إظهار التغييرات

git blame file.txt
# من كتب كل سطر

git shortlog -sn
# عدد commits لكل مؤلف

git clean -fd
# حذف الملفات غير المتعةدة
```
