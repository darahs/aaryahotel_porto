# Quick Guide: Update Images from Gallery

## Step-by-Step Instructions

### 1. Extract Image URLs

Visit https://www.aaryahotel.com/gallery-list and use one of these methods:

**Option A: Network Tab (Recommended)**
1. Open Developer Tools (F12)
2. Go to Network tab
3. Filter by "Img" or "Images"
4. Navigate through gallery categories (Exterior, Rooms, Restaurant, Others)
5. As images load, you'll see requests like:
   ```
   https://www.aaryahotel.com/images/package/galleryimages/[filename].webp
   ```
6. Right-click on each image → Copy → Copy link address
7. Note which category each image belongs to

**Option B: Console Script**
1. Open Developer Tools (F12)
2. Go to Console tab
3. Run the script from `gallery-image-extractor.js`
4. Copy the JSON output
5. Use the organized image list

### 2. Update HTML Files

Once you have the image URLs, update these files:

#### `homepage/code.html`
- Line ~76: Hero background → Use Exterior/Building image
- Line ~154: Presidential Suite card → Use Presidential Suite image
- Line ~181: Executive Suite card → Use Executive Suite image  
- Line ~211: Aarya Suite card → Use Aarya Suite image
- Line ~296: Spa section → Use Spa image
- Line ~299: Corner Brew section → Use Restaurant image
- Line ~310: Dining section → Use Restaurant image

#### `rooms_&_suites_listing/code.html`
- Line ~76: Hero background → Use Lobby/Reception image
- Line ~137: Presidential Suite card → Use Presidential Suite image
- Line ~189: Executive Suite card → Use Executive Suite image
- Line ~240: Aarya Suite card → Use Aarya Suite image

### 3. Image URL Format

Replace:
```html
url('https://www.aaryahotel.com/images/package/galleryimages/N5XLf-2.webp')
```

With actual URLs like:
```html
url('https://www.aaryahotel.com/images/package/galleryimages/[actual-filename].webp')
```

### 4. Test Images

After updating:
1. Open the HTML files in a browser
2. Check that all images load correctly
3. Verify images match their sections
4. Test on different screen sizes

## Example Image Categories

Based on gallery structure:

**Exterior**: Building, Reception, Lobby, Corridor
**Rooms**: 
  - Presidential Suite (multiple)
  - Executive Suite (multiple)
  - Aarya Suite (including Heritage)
  - Aarya Deluxe (multiple)

**Restaurant**: Restaurant, Breakfast
**Facilities**: Spa, Gym, Jacuzzi, Steam, Swimming Pool

## Quick Reference

All images are in WebP format at:
```
https://www.aaryahotel.com/images/package/galleryimages/[filename].webp
```

