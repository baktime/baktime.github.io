[![baktime · GitHub Actions × restic](https://raw.githubusercontent.com/baktime/baktime/main/assets/baktime-banner.png)](https://baktime.github.io/)

# baktime project homepage

baktime schedules encrypted backups of databases and Linux files with GitHub Actions and restic. The homepage explains costs, notifications and how to verify a first snapshot.

[Create your repository](https://github.com/baktime/baktime/generate) · [English setup guide](https://baktime.github.io/?lang=en#start) · [Instrukcja po polsku](https://baktime.github.io/pl/#start)

## Work on the site

GitHub Pages publishes the contents of `website/` when changes reach `main`. Both language versions are static HTML. Edit `website/index.html` and `website/pl/index.html` together. They share the same stylesheet, assets and language switcher.

Preview locally with `python3 -m http.server --directory website 8000`. Open <http://localhost:8000/> for the default entry point or <http://localhost:8000/pl/> for Polish.
