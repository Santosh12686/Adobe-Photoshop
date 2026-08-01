# AGENTS.md

## Cursor Cloud specific instructions

### What this repository is
This repo is a **documentation / design-asset management repository** for an Adobe
Photoshop graphic-design workflow (see `README.md` and `CONTRIBUTING.md`). It is **not a
software project**: there is no application source code, no package manager manifest
(`package.json`, `requirements.txt`, `go.mod`, etc.), no tests, no lint config, and no
build system. The entire tracked content is Markdown documentation plus (eventually)
binary `.psd` design source files and their `dist/` web exports.

### There is nothing to install / build / test / run
- **Dependencies:** none. There is no package manager and no lockfile, so the startup
  update script is a no-op.
- **Lint / Test / Build:** no such tooling is configured in the repo. Do not invent a
  build/test pipeline unless the user explicitly asks for one.
- **"The application":** the real tool is **Adobe Photoshop**, a proprietary GUI desktop
  application (Windows/macOS only, requires a paid Adobe license). It **cannot be
  installed or run in this Linux cloud VM**, and it cannot run headlessly. Do not attempt
  to install or emulate it, and do not fabricate a stand-in application.

### The workflow this environment *can* support
The only end-to-end workflow available here is the **git-based contribution flow**
described in `CONTRIBUTING.md`: create a branch, add/edit docs or asset files, commit, and
open a pull request. `.psd` editing and `WebP`/`PNG` export steps must be done by a human
in Photoshop outside this VM; only the resulting files can be committed here.

### Gotchas
- `README.md` references `src/` and `dist/` directories, but they do not exist yet in the
  repo — they are created as assets are added.
- `CONTRIBUTING.md` asks contributors to branch as `design/feature-name`; Cursor cloud
  agents must instead follow the required `cursor/<name>-<suffix>` branch naming.
