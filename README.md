# Adobe Photoshop Graphic Design Asset Management

This repository contains the design assets, source files, and export pipelines for our graphic design projects.

## 🎨 Asset Overview: Q3 Marketing Campaign

### 🛠️ Structure & Organization
* **Source Files (`.psd`):** Located in the `src/` directory. All files maintain live text layers and nested Smart Objects.
* **Production Exports:** Located in the `dist/` directory, optimized for web deployment.

### 📐 Technical Specifications
* **Dimensions:** 1920px x 1080px (Landscape)
* **Resolution:** 72 DPI (Optimized for web performance)
* **Color Profile:** RGB Color (8-bit), sRGB IEC61966-2.1
* **Primary Typography:** Montserrat (Bold), Open Sans (Regular)

### ⚙️ Export Workflow
1. Open the source `.psd` file in Adobe Photoshop.
2. Make necessary copy or layer adjustments.
3. Use **File > Export > Export As...**
4. Choose **WebP** or **PNG** format with quality set to 80% to maintain optimized file sizes under 300KB.
