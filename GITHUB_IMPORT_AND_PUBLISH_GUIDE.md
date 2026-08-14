# GitHub Import and Publish Guide

## Upload through GitHub UI

1. Create a GitHub repository, for example `acme-biologics-gtm-training-lab`.
2. Upload the contents of this ZIP to the repository root.
3. Commit to `main`.
4. Go to `Settings > Pages`.
5. Select `Deploy from a branch`.
6. Select `main` and `/root`.
7. Save and open the GitHub Pages URL.

## Push through Git

```bash
git init
git add .
git commit -m "Initial GTM training lab"
git branch -M main
git remote add origin <YOUR_REPOSITORY_URL>
git push -u origin main
```

## Connect GTM

Edit `assets/js/config.js` and replace `GTM-XXXXXXX` with your training GTM container ID.
