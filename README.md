# kiaghods.com

Source for [kiaghods.com](https://kiaghods.com) — Kia Ghods' personal site.

Built on top of [al-folio](https://github.com/alshedivat/al-folio), with a custom minimal layout (`_layouts/minimal.liquid`) inspired by old-internet academic pages — narrow column, EB Garamond, warm sepia, kach-style curiosity-first framing.

## structure

- **`/`** — landing. Currently-on-my-mind questions, fold-down papers list, previously-on-my-mind questions, *lately* (books / films), Barnsley fern. Source: `_pages/draft.md`.
- **`/blog/`** — the studio. Minimal blog index; posts at `/blog/{slug}/` use `_layouts/minimal-post.liquid` (Distill-grade content rendering: math via KaTeX, figures, footnotes, tables, code blocks). Source: `_pages/blog.md`, posts in `_posts/`.
- **`/academics`** — coursework, honors, teaching. Source: `_pages/teaching.md`.

## local dev

```sh
bundle install
bundle exec jekyll serve --livereload
```

Site at `http://localhost:4000/`. Livereload auto-rebuilds on file changes; restart manually for `_config.yml` edits.

## acknowledgements

- [al-folio](https://github.com/alshedivat/al-folio) by Maruan Al-Shedivat et al. — base theme.
- Aesthetic inspired by [Kartik Chandra](https://cs.stanford.edu/~kach/) and the vast lineage of curiosity-first academic pages.

## license

[MIT](LICENSE).
