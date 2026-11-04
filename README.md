# bey0ndt1me.github.io

Personal academic homepage of Ruilin Zhang, built on the
[Minimal Light](https://github.com/yaoyao-liu/minimal-light) theme.

## What to edit

| Content | File |
|---|---|
| Biography, research interests, news, projects, awards, teaching | `index.md` |
| Publication list (title, authors, venue, links, teaser image) | `_data/publications.yml` |
| Name, affiliation, sidebar links, avatar, email, dark mode, font | `_config.yml` |
| Publication row markup and its link buttons | `_includes/publications.md` |
| Theme overrides (fixed-size teaser boxes, award photo row, mobile) | `assets/css/custom.css` |

Figures and the CV live in `images/` and `files/` and are referenced with
absolute paths (`/images/...`), so they do not need to move when the layout
changes.

### Email address

The address is never written into the generated HTML. It is stored as character
codes in `_config.yml` (`email_codes`) and assembled by
`assets/js/email-reveal.js` only after the visitor clicks. Keep it that way if
you edit the header.

## Local preview

```powershell
$env:Path = "C:\Ruby32-x64\bin;$env:Path"
bundle exec ruby local/serve.rb serve -l -H 127.0.0.1 -P 4000
```

`local/serve.rb` points TZInfo at the zoneinfo database shipped with
RubyInstaller; without it Jekyll fails with `ZoneinfoDirectoryNotFound` on
Windows. `local/` is git-ignored.

## Deployment

GitHub Pages builds this site from `master` with the legacy Jekyll builder, so
the theme files are vendored into the repository instead of being pulled in
through `remote_theme`.
