# Zainab Raza Portfolio

This is a Vite + React portfolio. The public portfolio does not need a Base44 login or backend to run. The profile image and CV are included in `public/assets`.

## Run on your computer

1. Install Node.js (the current LTS release includes npm).
2. Open PowerShell or Terminal in this folder.
3. Install the project packages once:

   ```powershell
   npm install
   ```

4. Start the local website:

   ```powershell
   npm run dev
   ```

5. Open the local address Vite prints in the terminal (usually `http://localhost:5173`). Keep that terminal open while using the site. Press `Ctrl+C` to stop it.

To check the production build locally:

```powershell
npm run build
npm run preview
```

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that GitHub repository.
3. Keep the Vite defaults: build command `npm run build`, output folder `dist`.
4. Set the project name to `zainab-portfolio`. Vercel will use `zainab-portfolio.vercel.app` if that address is available.

The contact form opens the visitor's email app with a prepared message. The visitor still needs to press Send in that email app; the form does not send email directly from the website.
