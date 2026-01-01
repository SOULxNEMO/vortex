# How to Host on Vercel (Automatic Updates)

Hosting on **Vercel** is the easiest way to achieve your goal of "making changes anytime without reposting".

**How it works:**
Instead of manually uploading files ("posting"), you connect Vercel to your GitHub repository.
1.  You make a change to a file on your computer.
2.  You save and command `git push`.
3.  **Vercel sees the change and automatically updates your website.**

## Step-by-Step Guide

### 1. Push your code to GitHub
Make sure your project is on GitHub. If you haven't done this yet:
1.  Create a new repository on [GitHub.com](https://github.com/new).
2.  Run these commands in your VS Code terminal:
    ```bash
    git init
    git add .
    git commit -m "Ready for Vercel"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```

### 2. Connect to Vercel
1.  Go to [Vercel.com](https://vercel.com) and Log In (continue with GitHub).
2.  On your dashboard, click **"Add New..."** -> **"Project"**.
3.  You will see your GitHub repository list. Click **Import** next to `ace-x-vortex` (or whatever you named it).

### 3. Configure Project
Vercel is smart and will detect that this is a **Vite** project.
-   **Framework Preset:** Vite (Leave as is)
-   **Root Directory:** `./` (Leave as is)

**IMPORTANT: Environment Variables**
Your code uses an API Key (`GEMINI_API_KEY`). You must add this here so your app works online.
1.  Expand the **Environment Variables** section.
2.  **Key:** `GEMINI_API_KEY`
3.  **Value:** (Paste your actual key here)
4.  Click **Add**.

### 4. Deploy
Click **Deploy**.
-   Wait about 1 minute.
-   You will get a live URL (e.g., `https://ace-x-vortex.vercel.app`).

---

## How to Make Changes (The "No Reposting" Part)

Once setup is done, **you never have to go to the Vercel website again.**

**To update your site:**
1.  Open VS Code.
2.  Edit a file (e.g., change some text in `App.tsx`).
3.  Open the Terminal and run:
    ```bash
    git add .
    git commit -m "Updated text"
    git push
    ```
4.  **That's it.** Vercel will detect the push, rebuild your site, and update the live link in about 30-60 seconds.
