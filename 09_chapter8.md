# الفصل الثامن: التنقل المتقدم

## 8.1 اختصارات Zsh

```
Tab completion:
  اكتب جزء من اسم → اضغط Tab
  سيُكمل الاسم تلقائياً

Ctrl+a:
  الانتقال لنهاية السطر

Ctrl+e:
  البداية

Ctrl+u:
  حذف السطر

Ctrl+k:
  حذف من المؤشر للنهاية

Ctrl+w:
  حذف الكلمة السابقة

Ctrl+r:
  بحث في السجل

Ctrl+l:
  مسح الشاشة
```

## 8.2 المجلدات المفضلة (Bookmarks)

```bash
# إضافة مجلد مفضل
pushd /path/to/folder

# الانتقال للمجلد السابق
popd

# عرض المجلدات المحفوظة
dirs -v
```

## 8.3 CDPATH

```bash
# في ~/.zshrc
export CDPATH=".:~/Projects:/usr/local"

# الآن يمكنك:
cd folder_name
# سيبحث في كل هذه الأماكن
```

## 8.4 Aliases

```bash
# في ~/.zshrc
alias ll="ls -la"
alias gs="git status"
alias gp="git push"
alias dev="cd ~/Projects/dev"

# تحميل التعريفات
source ~/.zshrc
```

## 8.5 Functions

```bash
# في ~/.zshrc
mkcd() {
    mkdir -p "$1" && cd "$1"
}

extract() {
    case $1 in
        *.tar.bz2) tar xjf $1 ;;
        *.tar.gz) tar xzf $1 ;;
        *.zip) unzip $1 ;;
        *) echo "Unknown format" ;;
    esac
}

# الاستخدام
mkcd new_folder
extract archive.tar.gz
```

## 8.6 Prompt (PS1)

```bash
# في ~/.zshrc
PROMPT='%n@%m:%~ %# '

# عناصر:
# %n = اسم المستخدم
# %m = اسم الجهاز
# %~ = المجلد الحالي
# %# = # للـ root, $ للـ user
```

## 8.7 Environment Variables

```bash
# عرض جميع المتغيرات
env

# عرض متغير محدد
echo $PATH

# تعيين متغير
export MY_VAR="value"

# في ~/.zshrc
export PATH="$PATH:/usr/local/bin"
export EDITOR="vim"
```

## 8.8 PATH

```bash
# عرض PATH
echo $PATH | tr ':' '\n'

# إضافة مسار
export PATH="$PATH:/new/path"

# إضافة مؤقتة
PATH="$PATH:/new/path" command
```

## 8.9 Shell Configuration

```bash
# الملفات الرئيسية
~/.zshrc        # الإعدادات
~/.zprofile     # Profile
~/.zshenv       # Environment

# تحميل التعريفات
source ~/.zshrc

# إعدادات مهمة
setopt autocd          # cd بدون cd
setopt histignorealldups # إزالة التكرارات من السجل
setopt sharehistory    # مشاركة السجل بين النوافذ
```

## 8.10 Starship Prompt

```bash
# تثبيت
brew install starship

# في ~/.zshrc
eval "$(starship init zsh)"

# يُظهر معلومات Git والـ Python والأدوات
```
