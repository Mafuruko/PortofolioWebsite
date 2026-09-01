# Naufy Portfolio Table

An interactive portfolio website built as a desk-style archive. Instead of a standard scrolling portfolio, this project uses a draggable canvas, tactile paper assets, folder-based navigation, and case-file documents to present content creation, graphic design, and web development work.

The goal is to make the portfolio feel like something you can explore, not just read.

## Highlights

- **Interactive desk canvas**  
  The main page is a large virtual table that can be explored with pointer movement, dragging, mouse wheel zoom, and touch gestures.

- **Folder-based project archive**  
  Projects are grouped into three visual case folders: Content Creation, Graphic Design, and Website Design.

- **Case-file portfolio cards**  
  Each project appears as a pinned vintage evidence card with a thumbnail, category, result, and an `OPEN FILE ->` interaction.

- **A4 document modal**  
  Clicking any case card opens a full document-style detail view with a darkened blurred background. The paper itself moves while scrolling, keeping the page behind it still.

- **Project evidence links**  
  Each case can include direct evidence links, such as Instagram reels or GitHub repositories.

- **Carousel pagination**  
  Category pages use a clean carousel movement to switch between pages of case cards.

- **Custom visual system**  
  The interface uses custom folder, paper, stationery, sticker, and desk assets to create a consistent investigative archive theme.

## Sections

### Home

`index.html` is the main interactive table. It includes:

- About Me card
- Project document entry
- Contact letter with links
- Movable sticker elements
- Desk objects with hover and parallax details

### About

`aboutme.html` presents personal information through a visual desk composition with logos, notes, photos, and decorative assets.

### Projects

`projects.html` works as the main case-folder hub. It links to:

- `cc.html` - Content Creation
- `design.html` - Graphic Design
- `web.html` - Website Design

### Content Creation

`cc.html` contains campaign and social media work, including:

- ITS Student Choir content
- Schematics ITS content
- Mabacup ITS recruitment and announcement content

### Graphic Design

`design.html` contains visual identity and Instagram design systems, including:

- Kabinet Savera
- IniLhoITS Samarinda / Orcael ITS
- Kabinet Niraswara
- Kabinet Abracadabra

### Website Design

`web.html` contains web and interactive project work, including:

- Gestura
- TCSchedulify
- WC Cantik Informatika 3D
- Pacman dengan Algoritma
- LearnVid AI

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- CSS Grid and absolute canvas layout
- Pointer Events API
- Custom cursor assets
- Google Fonts and Lilex font

No build step or framework is required. The project is intentionally lightweight and runs as static files.

## Project Structure

```text
.
|-- index.html
|-- aboutme.html
|-- projects.html
|-- cc.html
|-- design.html
|-- web.html
|-- css/
|   |-- base.css
|   |-- index.css
|   |-- about.css
|   |-- projects.css
|   `-- loader.css
|-- js/
|   |-- canvas.js
|   |-- index-loader.js
|   |-- case-modal.js
|   |-- cc-pagination.js
|   |-- design-pagination.js
|   `-- web-pagination.js
`-- Assets/
    |-- Folder/
    `-- aboutme/
```

## Running Locally

Because this is a static website, it can be opened directly in the browser. For a better local development experience, run it through a local server.

Using VS Code Live Server:

```text
Right click index.html -> Open with Live Server
```

Using Python:

```bash
python -m http.server 5501
```

Then open:

```text
http://127.0.0.1:5501/index.html
```

## Interaction Details

The canvas behavior is handled in `js/canvas.js`. It supports:

- Dragging the world canvas
- Smooth momentum after dragging
- Cursor-edge movement
- Wheel zoom with bounds
- Touch pinch zoom
- Movable stickers with velocity and rotation

The project pages use separate pagination files:

- `js/cc-pagination.js`
- `js/design-pagination.js`
- `js/web-pagination.js`

Each file stores the case data for its section and feeds the shared modal in `js/case-modal.js`.

## Design Direction

The portfolio is built around the idea of a **caseboard archive**. Every project is treated like a documented case:

- The folder is the entry point.
- The card is the summary.
- The A4 paper is the detailed report.
- The evidence link points to the real published work or source repository.

This structure keeps the site playful while still making the work easy to evaluate.

## Contact

- LinkedIn: <https://www.linkedin.com/in/naufalnaufal/>
- GitHub: <https://github.com/Mafuruko>
- Email: <mnaufaldzakwan04@gmail.com>
- WhatsApp: 085349425454
