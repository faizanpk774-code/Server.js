# GitHub Push Commands - Copy & Paste Karo! 📤

## **Step 1: Git Initialize Karo**
```bash
cd "g:\ideo web coures b91\Bckend"
git init
git config user.name "Your Name"
git config user.email "your.email@gmail.com"
```

## **Step 2: GitHub par New Repository Banao**
Go to: https://github.com/new
- Repository name: `fgz-gaming-zone`
- Description: "FGZ Gaming Zone - Modern Gaming Website"
- Visibility: Public
- Click "Create Repository"

## **Step 3: Remote Add Karo** (GitHub se copy kar link)
```bash
git remote add origin https://github.com/YOUR-USERNAME/fgz-gaming-zone.git
```
**Note:** `YOUR-USERNAME` apna GitHub username se replace karna!

## **Step 4: .gitignore File Banao**
```bash
echo "node_modules/" > .gitignore
echo "__pycache__/" >> .gitignore
echo "*.pyc" >> .gitignore
echo ".env" >> .gitignore
```

## **Step 5: Sab Files Add Karo**
```bash
git add .
```

## **Step 6: Commit Karo**
```bash
git commit -m "Initial commit: FGZ Gaming Zone project with Python Flask server"
```

## **Step 7: GitHub Par Push Karo** 🚀
```bash
git branch -M main
git push -u origin main
```

---

## **✅ Bas! GitHub Par Upload Ho Gaya!**

Ab apna GitHub profile par jao:
```
https://github.com/YOUR-USERNAME/fgz-gaming-zone
```

---

## **🔄 Agle Updates Ke Liye (Future Commits)**

Agr kisi ko update karna ho:

```bash
# Changes add karo
git add .

# Commit karo
git commit -m "Description of changes"

# Push karo
git push origin main
```

---

## **📋 Complete Commands List (One Copy-Paste)**

```bash
cd "g:\ideo web coures b91\Bckend"
git init
git config user.name "Your Name"
git config user.email "your.email@gmail.com"
echo "node_modules/" > .gitignore
echo "__pycache__/" >> .gitignore
echo "*.pyc" >> .gitignore
echo ".env" >> .gitignore
git add .
git commit -m "Initial commit: FGZ Gaming Zone project"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/fgz-gaming-zone.git
git push -u origin main
```

---

## **❓ Agr GitHub Account Nahi Hai?**

1. https://github.com par jao
2. "Sign Up" click karo
3. Email verify karo
4. Username choose karo
5. Fir upper commands run karo

---

## **🔑 PAT (Personal Access Token) Banana (Agar Ask Ho)**

Agr password nahi dena, PAT use karo:

1. GitHub Settings mein jao
2. "Developer Settings" → "Personal Access Tokens"
3. "Generate new token" click karo
4. `repo` checkbox check karo
5. Token copy karo aur safe rakho

Push karte waqt:
```bash
git push -u origin main
# Username: YOUR-USERNAME
# Password: (paste your PAT token)
```

---

## **✨ Project GitHub Par Ready!**

Phir se check:
```
https://github.com/YOUR-USERNAME/fgz-gaming-zone
```

Sab files aur README dikhega! ✅
