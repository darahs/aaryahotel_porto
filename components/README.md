# Components Structure

This folder contains reusable components for the Aarya Hotel website.

## Structure

```
components/
├── head.html          # Common head section (meta, fonts, Tailwind config)
├── header.html        # Navigation header component
├── footer.html        # Footer component
├── component-loader.js # JavaScript loader for components
└── README.md          # This file
```

## Usage

### Option 1: Manual Inclusion (Current Approach)
Copy the content from component files directly into your HTML pages.

### Option 2: JavaScript Loader (Recommended for Dynamic Loading)
Use the `component-loader.js` to dynamically load components:

1. Add placeholder elements in your HTML:
```html
<!-- In <head> section -->
<div data-component="head"></div>

<!-- In <body> section -->
<div data-component="header"></div>

<!-- Before </body> -->
<div data-component="footer"></div>
```

2. Include the loader script before closing `</body>`:
```html
<script src="../components/component-loader.js"></script>
```

## Component Details

### head.html
Contains:
- Meta tags (charset, viewport)
- Tailwind CSS CDN
- Google Fonts (Plus Jakarta Sans)
- Material Symbols icons
- Tailwind configuration
- Common CSS styles

### header.html
Contains:
- Logo and branding
- Navigation menu
- Book Now button
- Mobile menu icon

**Note:** The header automatically highlights the active page based on the current URL.

### footer.html
Contains:
- Brand information
- Quick links
- Contact information
- Newsletter subscription form
- Copyright and legal links

## Active Page Detection

The component loader automatically detects the active page and:
- Highlights the correct navigation link
- Sets the correct home link path

Supported page types:
- `home` - Homepage
- `rooms` - Rooms listing
- `dining` - Dining options
- `amenities` - Facilities & Amenities
- `events` - Events page
- `contact` - Contact page

## Maintenance

When updating components:
1. Edit the component file in `components/` folder
2. Changes will automatically apply to all pages using the component
3. For manual inclusion, update each page individually

## Future Enhancements

- Add more reusable components (booking widget, room cards, etc.)
- Create a build process to inline components for better performance
- Add component versioning
- Support for component parameters/props

