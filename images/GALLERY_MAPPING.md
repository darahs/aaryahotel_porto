# Gallery Image Mapping

Based on the gallery structure at https://www.aaryahotel.com/gallery-list, here's the mapping of images to website sections.

## Gallery Categories

### Exterior
- Building
- Reception
- Lobby
- Corridor

### Rooms
- **Presidential Suite** (multiple images)
- **Executive Suite** (multiple images)
- **Aarya Suite** (including Heritage variant)
- **Aarya Deluxe** (multiple images)

### Restaurant
- Restaurant (multiple images)
- Breakfast (multiple images)

### Facilities
- **Spa** (multiple images)
- **Gym** (multiple images)
- **Jacuzzi**
- **Steam**
- **Swimming Pool**

## Image URL Pattern

All images follow this pattern:
```
https://www.aaryahotel.com/images/package/galleryimages/[FILENAME].webp
```

## How to Extract Image URLs

### Method 1: Browser Developer Tools
1. Visit https://www.aaryahotel.com/gallery-list
2. Open Developer Tools (F12)
3. Go to Network tab
4. Filter by "Images"
5. Click through gallery categories
6. Find images with path `/images/package/galleryimages/`
7. Copy the full URLs

### Method 2: Use the Extractor Script
1. Visit https://www.aaryahotel.com/gallery-list
2. Open Developer Tools (F12)
3. Go to Console tab
4. Copy and paste the code from `gallery-image-extractor.js`
5. Run it
6. Copy the JSON output
7. Use the URLs to update HTML files

### Method 3: Inspect Element
1. Right-click on any gallery image
2. Select "Inspect" or "Inspect Element"
3. Find the `<img>` tag
4. Look for `src` attribute
5. Copy the full URL

## Recommended Image Assignments

### Homepage
- **Hero**: Exterior/Building image
- **Presidential Suite Card**: First Presidential Suite image
- **Executive Suite Card**: First Executive Suite image
- **Aarya Suite Card**: First Aarya Suite image
- **Spa Section**: First Spa image
- **Restaurant Section**: First Restaurant image

### Rooms Listing Page
- **Hero**: Lobby or Reception image
- **Presidential Suite**: Best Presidential Suite image
- **Executive Suite**: Best Executive Suite image
- **Aarya Suite**: Best Aarya Suite image
- **Aarya Deluxe**: Best Aarya Deluxe image

### Room Details Page
- Use multiple images from the same room category
- Include bedroom, bathroom, and view images

### Dining Page
- Use Restaurant and Breakfast images
- Match images to specific restaurants if possible

### Facilities Page
- Use Spa, Gym, Pool, Jacuzzi, and Steam images

## Image Selection Tips

1. **Choose high-quality images** that represent the space well
2. **Use different images** for different sections (avoid repetition)
3. **Match images to content** (e.g., Presidential Suite image for Presidential Suite section)
4. **Consider aspect ratios** (hero images should be wide, cards can be square)
5. **Test image loading** to ensure URLs are accessible

## Current Status

All image URLs are currently using placeholder:
```
https://www.aaryahotel.com/images/package/galleryimages/N5XLf-2.webp
```

Replace these with actual image URLs from the gallery.

