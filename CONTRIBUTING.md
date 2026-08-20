# Contributing to Adobe-Photoshop Projects

Thank you for contributing! To maintain clean source files and high-quality exports, please follow these guidelines when submitting graphic design assets.

## 🛠️ Photoshop Workflow Standards

### 1. File Organization
*   **Layer Groups:** Group layers by function (e.g., `Background`, `Graphics`, `Text`, `Adjustments`).
*   **Naming:** Never leave layers named "Layer 1" or "Group 5". Use descriptive names.
*   **Color Coding:** Use layer color labels to indicate status (e.g., Red for locked assets, Green for editable text).

### 2. Non-Destructive Editing
*   Convert all raw photographic elements into **Smart Objects** before scaling.
*   Use **Smart Filters** instead of destructive image adjustments.
*   Apply **Layer Masks** instead of using the Eraser tool.

### 3. Technical Constraints
*   **Color Space:** Always use **RGB Color (8-bit)** with the **sRGB IEC61966-2.1** profile unless target delivery specifies CMYK.
*   **Text Layers:** Keep text live. Do not rasterize font layers.

## 🚀 How to Submit Changes

1.  **Fork or Branch:** Create a new branch named `design/feature-name` from `main`.
2.  **Add Assets:** Save your `.psd` in the `src/` folder and web exports in `dist/`.
3.  **Open a PR:** Fill out the Pull Request template completely, including visual screenshots of your design.
4.  **Review:** Wait for design lead approval before merging. Reviewers evaluate every PR against the [Rejection Checklist](#5-rejection-checklist).

## 🚫 Rejection Workflow

Not every submission is merged on the first pass. This workflow describes how a submission moves from review to revision, and what reviewers and authors are expected to do at each stage.

### 1. Rejection States
*   **Submitted:** The PR is open and awaiting review by the design lead.
*   **Changes Requested:** Fixable issues were found. The submission stays open and the author revises it.
*   **Rejected:** The submission does not meet the project standards at a fundamental level and is closed.
*   **Resubmitted:** A previously rejected design has been reworked and opened again for review.

### 2. Rejection Criteria
A submission is marked **Changes Requested** or **Rejected** when it violates any of the standards below.

*   **File Organization:** Layers are ungrouped, or layers/groups keep default names such as "Layer 1" or "Group 5" instead of descriptive names.
*   **Non-Destructive Editing:** Raw photographic elements were scaled without being converted to **Smart Objects**, destructive image adjustments were used instead of **Smart Filters**, or the Eraser tool was used instead of **Layer Masks**.
*   **Color Space:** The document is not **RGB Color (8-bit)** with the **sRGB IEC61966-2.1** profile (unless target delivery specifies CMYK).
*   **Text Layers:** Font layers were rasterized instead of kept live.
*   **Export Specifications** (see `README.md`):
    *   Exports are not **1920px x 1080px** (Landscape).
    *   Resolution is not **72 DPI**.
    *   Exports are not **WebP** or **PNG** at **80% quality**.
    *   Any exported file is **300KB or larger**.

### 3. Rejection Process
1.  **Reviewer marks the PR:** The design lead sets the PR to **Changes Requested** for fixable issues, or **Rejected** when the submission must be reworked from scratch.
2.  **Reviewer provides a written reason:** Every rejection references the specific standard that was violated (e.g., "Non-Destructive Editing: hero photo was scaled as a rasterized layer, not a Smart Object").
3.  **Author revises (Changes Requested):** Push the corrected `.psd` and re-exported assets to the same `design/feature-name` branch. The existing PR is updated automatically and returns to **Submitted**.
4.  **Author reworks (Rejected):** Create a new `design/feature-name` branch from `main` and open a new PR. The new PR enters the **Resubmitted** state and links back to the rejected PR.
5.  **Re-review:** The design lead re-checks the submission against the **Rejection Checklist** before approving and merging.

### 4. Communication Expectations
*   Post every rejection reason as a **PR comment**, not in a private message, so the decision stays with the submission history.
*   Include **visual screenshots** where relevant (e.g., the Layers panel showing rasterized text, or the export dialog showing an oversized file).
*   Reference the violated standard by name so the author can map the feedback to this document or `README.md`.
*   Authors should reply in the same PR thread describing what was changed before requesting re-review.

### 5. Rejection Checklist
Reviewers work through this checklist on every PR before approving:

*   [ ] Layers are grouped by function (`Background`, `Graphics`, `Text`, `Adjustments`).
*   [ ] No default layer or group names remain ("Layer 1", "Group 5").
*   [ ] Layer color labels reflect status (e.g., Red for locked assets, Green for editable text).
*   [ ] Raw photographic elements are **Smart Objects**.
*   [ ] Adjustments use **Smart Filters**, not destructive edits.
*   [ ] Masking uses **Layer Masks**, not the Eraser tool.
*   [ ] Document is **RGB Color (8-bit)**, **sRGB IEC61966-2.1**.
*   [ ] Text layers are live and not rasterized.
*   [ ] Exports are **1920px x 1080px** at **72 DPI**.
*   [ ] Exports are **WebP** or **PNG** at **80% quality**.
*   [ ] Every exported file is **under 300KB**.
*   [ ] `.psd` is in `src/` and web exports are in `dist/`.
*   [ ] PR template is complete with visual screenshots.
