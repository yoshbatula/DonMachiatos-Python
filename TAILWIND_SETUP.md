# TAILWIND CSS SETUP

## Current Setup: CDN (Development)
Tailwind is loaded via CDN in `base.html`. Refresh http://127.0.0.1:8000/ to see the new Tailwind-styled design.

## For Production: Build Process

1. **Install Node.js** (if not already installed): https://nodejs.org/

2. **Install Tailwind CSS**:
```cmd
cd /d C:\Users\ADMIN\Documents\DonMachiatos-Python
npm install
```

3. **Build CSS**:
```cmd
npm run build
```

4. **Update base.html** to use built CSS instead of CDN:
Replace:
```html
<script src="https://cdn.tailwindcss.com"></script>
```
With:
```html
<link rel="stylesheet" href="{% static 'core/css/output.css' %}">
```

5. **Development mode** (auto-rebuild on changes):
```cmd
npm run dev
```

## Files Created
- `tailwind.config.js` — Tailwind configuration
- `package.json` — Node.js dependencies and scripts
- `core/static/core/css/input.css` — Tailwind source file

## Using Tailwind
Add utility classes directly in your HTML:
```html
<div class="bg-blue-500 text-white p-4 rounded-lg">
  Hello Tailwind!
</div>
```

See docs: https://tailwindcss.com/docs
