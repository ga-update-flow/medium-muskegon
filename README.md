# test-site-medium-muskegon

Exact static mirror of a third-party funder website, used only as a controlled test bed for our
opportunity auto-update flow. Internal testing use.

- Served with GitHub Pages from `main` at the repo root. All internal links are relative.
- `_manifest.json` lists every mirrored file with its original URL, plus URLs that were already
  dead (404) on the live site when copied. Those dead links are intentionally preserved.
- `.gitattributes` sets `-text` so git never alters file bytes (content hashes are identical on every machine).
- Tag `baseline-v1` = the untouched copy. Test-case changes are made on branches and merged to `main` to activate; reset with `git checkout baseline-v1 -- .`.

See the hub repo `auto-update-test-sites` for the full team workflow.
