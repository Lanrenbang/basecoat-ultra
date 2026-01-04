# Upstream Diff Analysis Report

Generated: 2026-01-03T17:45:31.557Z

## Upstream Information

- **Repository**: https://github.com/hunvreus/basecoat
- **Version**: 0.3.9-7-g167b98e
- **Commit**: 167b98e
- **Date**: 2025-12-30 18:41:15 +0800

## Summary

| Metric | Count |
|--------|-------|
| Total Components | 46 |
| Modified | 26 |
| Ultra-only Additions | 20 |
| Unchanged | 0 |

## CSS Component Diffs

| Component | Status | +/- | Notes |
|-----------|--------|-----|-------|
| alert | 🔧 modified | +1/-0 |  |
| badge | 🔧 modified | +2/-1 |  |
| base | 🔧 modified | +0/-112 |  |
| button | 🔧 modified | +11/-5 |  |
| button-group | 🔧 modified | +1/-0 |  |
| card | 🔧 modified | +1/-0 |  |
| checkbox | 🔧 modified | +1/-0 |  |
| collapsible | 🔧 modified | +1/-0 |  |
| command | 🔧 modified | +11/-2 |  |
| dialog | 🔧 modified | +65/-47 |  |
| dropdown-menu | 🔧 modified | +9/-5 |  |
| field | 🔧 modified | +3/-2 |  |
| input | 🔧 modified | +1/-0 |  |
| kbd | 🔧 modified | +7/-1 |  |
| label | 🔧 modified | +1/-0 |  |
| popover | 🔧 modified | +2/-1 |  |
| radio | 🔧 modified | +1/-0 |  |
| range | 🔧 modified | +19/-12 |  |
| select | 🔧 modified | +6/-1 |  |
| sidebar | 🔧 modified | +1/-0 |  |
| switch | 🔧 modified | +1/-0 |  |
| table | 🔧 modified | +2/-1 |  |
| tabs | 🔧 modified | +7/-1 |  |
| textarea | 🔧 modified | +1/-0 |  |
| toast | 🔧 modified | +1/-0 |  |
| tooltip | 🔧 modified | +1/-0 |  |

## JS Component Diffs

| Component | Status | +/- | Notes |
|-----------|--------|-----|-------|
| accordion | ✨ added | +25/-0 | Ultra-only |
| basecoat | ✨ added | +106/-0 | Ultra-only |
| carousel | ✨ added | +133/-0 | Ultra-only |
| catppuccin-theme-switcher | ✨ added | +210/-0 | Ultra-only |
| command | ✨ added | +163/-0 | Ultra-only |
| datepicker | ✨ added | +93/-0 | Ultra-only |
| dialog | ✨ added | +33/-0 | Ultra-only |
| dropdown-menu | ✨ added | +175/-0 | Ultra-only |
| input-otp | ✨ added | +106/-0 | Ultra-only |
| lighting | ✨ added | +109/-0 | Ultra-only |
| pagination | ✨ added | +136/-0 | Ultra-only |
| popover | ✨ added | +94/-0 | Ultra-only |
| resizable | ✨ added | +64/-0 | Ultra-only |
| select | ✨ added | +298/-0 | Ultra-only |
| sheet | ✨ added | +106/-0 | Ultra-only |
| sidebar | ✨ added | +128/-0 | Ultra-only |
| slider | ✨ added | +22/-0 | Ultra-only |
| tabs | ✨ added | +64/-0 | Ultra-only |
| toast | ✨ added | +156/-0 | Ultra-only |
| toggle | ✨ added | +54/-0 | Ultra-only |

## Patch Files

Individual component patches are available in `upstream-analysis/patches/`:

```
patches/
├── css-alert.patch
├── css-badge.patch
├── css-base.patch
├── css-button.patch
├── css-button-group.patch
├── css-card.patch
├── css-checkbox.patch
├── css-collapsible.patch
├── css-command.patch
├── css-dialog.patch
├── css-dropdown-menu.patch
├── css-field.patch
├── css-input.patch
├── css-kbd.patch
├── css-label.patch
├── css-popover.patch
├── css-radio.patch
├── css-range.patch
├── css-select.patch
├── css-sidebar.patch
├── css-switch.patch
├── css-table.patch
├── css-tabs.patch
├── css-textarea.patch
├── css-toast.patch
├── css-tooltip.patch
```

## Usage

```bash
# From packages/ultra directory:
bun run upstream:diff    # Full analysis
bun run upstream:sync    # Update tracking branch
```
