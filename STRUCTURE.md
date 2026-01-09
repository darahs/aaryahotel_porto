# Aarya Hotel Website - File Structure

## Current Structure

```
stitch_rooms_suites_listing/
├── components/                    # Reusable components
│   ├── head.html                  # Common head section
│   ├── header.html                # Navigation header
│   ├── footer.html                # Footer component
│   ├── component-loader.js       # JavaScript component loader
│   └── README.md                  # Component documentation
│
├── homepage/
│   └── code.html                  # Homepage
│
├── rooms_&_suites_listing/
│   └── code.html                  # Rooms listing page
│
├── room_details/
│   └── code.html                  # Room detail page
│
├── dining_options/
│   └── code.html                  # Dining page
│
├── facilities_&_amenities/
│   └── code.html                  # Amenities page
│
├── events_page/
│   └── code.html                  # Events page
│
├── contact_us/
│   └── location/
│       └── code.html              # Contact page
│
└── STRUCTURE.md                   # This file
```

## Component-Based Architecture

### Benefits
1. **DRY Principle**: No code duplication
2. **Easy Maintenance**: Update once, apply everywhere
3. **Consistency**: Same header/footer across all pages
4. **Scalability**: Easy to add new components

### Components Available

#### 1. Head Component (`components/head.html`)
- Meta tags
- Tailwind CSS configuration
- Google Fonts
- Material Symbols icons
- Common CSS styles

#### 2. Header Component (`components/header.html`)
- Logo and branding
- Navigation menu (Home, Rooms, Dining, Amenities, Events, Contact)
- Book Now button
- Mobile menu icon
- Auto-highlights active page

#### 3. Footer Component (`components/footer.html`)
- Brand information
- Quick links
- Contact information
- Newsletter form
- Copyright and legal links

## Usage Instructions

### Method 1: Manual Copy (Current)
1. Copy content from component files
2. Paste into respective sections of HTML pages
3. Update active navigation link manually

### Method 2: JavaScript Loader (Recommended)
1. Add placeholder divs:
   ```html
   <div data-component="header"></div>
   <div data-component="footer"></div>
   ```
2. Include loader script:
   ```html
   <script src="../components/component-loader.js"></script>
   ```
3. Components load automatically

## Page-Specific Content

Each page contains:
- **Unique title** in `<title>` tag
- **Page-specific content** in `<main>` section
- **Same header/footer** (from components)

## Navigation Paths

All navigation links use relative paths:
- `../homepage/code.html` - Home
- `../rooms_&_suites_listing/code.html` - Rooms
- `../dining_options/code.html` - Dining
- `../facilities_&_amenities/code.html` - Amenities
- `../events_page/code.html` - Events
- `../contact_us/location/code.html` - Contact
- `../room_details/code.html` - Room Details (Book Now)

## Color Scheme

Defined in Tailwind config:
- **Primary**: `#197fe6` (Blue)
- **Background Light**: `#f6f7f8`
- **Background Dark**: `#111921`
- **Surface Light**: `#ffffff`
- **Surface Dark**: `#1a2633`
- **Text Main**: `#111418`
- **Text Muted**: `#637588`

## Contact Information

Standardized across all pages:
- **Address**: Narsingha Chowk, Thamel, Kathmandu, Nepal
- **Phone**: +977-15971439, 15971440 / 9709559114
- **Email**: info@aaryahotel.com

## Future Improvements

1. **Build Process**: Create a build script to inline components
2. **More Components**: Extract booking widget, room cards, etc.
3. **Template System**: Use a proper templating engine
4. **CSS Separation**: Extract common styles to separate file
5. **JavaScript Modules**: Organize JS into modules

