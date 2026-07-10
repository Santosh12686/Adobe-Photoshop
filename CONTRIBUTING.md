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
4.  **Review:** Wait for design lead approval before merging.

