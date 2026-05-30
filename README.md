# FxAThng — Futuristic static site

This is a small static demo site (HTML/CSS/JS) with a futuristic, enterprise-flavored aesthetic. It's intentionally simple and self-contained.

Top-level files:
- `index.html` — main landing page (umbrella organization `FxAThng`)
- `about.html` — about page with history, headquarters, and organization overview
- `services.html` — services breakdown and studio descriptions
- `team.html` — first contact task force (10 practitioners from different divisions)
- `assets/styles.css` — styles
- `assets/script.js` — small JS for UI interactions
- `assets/favicon.svg` — favicon

Note: The header "Get in touch" link intentionally opens an external URL.

To view locally with a simple static server (Python):

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Or using Node (if you have serve installed):

```bash
npx serve .
```

