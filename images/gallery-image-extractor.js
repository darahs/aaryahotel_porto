/**
 * Gallery Image Extractor for Aarya Hotel
 * 
 * Instructions:
 * 1. Open https://www.aaryahotel.com/gallery-list in your browser
 * 2. Open Developer Tools (F12)
 * 3. Go to Console tab
 * 4. Paste this script and run it
 * 5. Copy the output and use it to update image URLs
 */

(function() {
    console.log('=== Aarya Hotel Gallery Image Extractor ===\n');
    
    // Find all images in the gallery
    const images = document.querySelectorAll('img[src*="galleryimages"]');
    const imageMap = {
        exterior: [],
        interior: [],
        rooms: {
            presidential: [],
            executive: [],
            aaryaSuite: [],
            aaryaDeluxe: []
        },
        restaurant: [],
        spa: [],
        gym: [],
        pool: [],
        jacuzzi: [],
        steam: [],
        others: []
    };
    
    images.forEach((img, index) => {
        const src = img.src || img.getAttribute('data-src') || img.getAttribute('srcset');
        if (src && src.includes('galleryimages')) {
            const alt = img.alt || img.getAttribute('alt') || '';
            const filename = src.split('/').pop();
            
            // Categorize based on alt text or context
            const lowerAlt = alt.toLowerCase();
            
            if (lowerAlt.includes('building') || lowerAlt.includes('exterior') || lowerAlt.includes('reception') || lowerAlt.includes('lobby')) {
                imageMap.exterior.push({ filename, url: src, alt });
            } else if (lowerAlt.includes('presidential')) {
                imageMap.rooms.presidential.push({ filename, url: src, alt });
            } else if (lowerAlt.includes('executive')) {
                imageMap.rooms.executive.push({ filename, url: src, alt });
            } else if (lowerAlt.includes('aarya suite') || lowerAlt.includes('heritage')) {
                imageMap.rooms.aaryaSuite.push({ filename, url: src, alt });
            } else if (lowerAlt.includes('aarya deluxe') || lowerAlt.includes('deluxe')) {
                imageMap.rooms.aaryaDeluxe.push({ filename, url: src, alt });
            } else if (lowerAlt.includes('restaurant') || lowerAlt.includes('breakfast')) {
                imageMap.restaurant.push({ filename, url: src, alt });
            } else if (lowerAlt.includes('spa')) {
                imageMap.spa.push({ filename, url: src, alt });
            } else if (lowerAlt.includes('gym')) {
                imageMap.gym.push({ filename, url: src, alt });
            } else if (lowerAlt.includes('pool') || lowerAlt.includes('swimming')) {
                imageMap.pool.push({ filename, url: src, alt });
            } else if (lowerAlt.includes('jacuzzi')) {
                imageMap.jacuzzi.push({ filename, url: src, alt });
            } else if (lowerAlt.includes('steam')) {
                imageMap.steam.push({ filename, url: src, alt });
            } else {
                imageMap.others.push({ filename, url: src, alt });
            }
        }
    });
    
    // Output organized results
    console.log('EXTERIOR IMAGES:');
    imageMap.exterior.forEach(img => console.log(`  ${img.filename} - ${img.alt}`));
    
    console.log('\nPRESIDENTIAL SUITE:');
    imageMap.rooms.presidential.forEach(img => console.log(`  ${img.filename} - ${img.alt}`));
    
    console.log('\nEXECUTIVE SUITE:');
    imageMap.rooms.executive.forEach(img => console.log(`  ${img.filename} - ${img.alt}`));
    
    console.log('\nAARYA SUITE:');
    imageMap.rooms.aaryaSuite.forEach(img => console.log(`  ${img.filename} - ${img.alt}`));
    
    console.log('\nAARYA DELUXE:');
    imageMap.rooms.aaryaDeluxe.forEach(img => console.log(`  ${img.filename} - ${img.alt}`));
    
    console.log('\nRESTAURANT:');
    imageMap.restaurant.forEach(img => console.log(`  ${img.filename} - ${img.alt}`));
    
    console.log('\nSPA:');
    imageMap.spa.forEach(img => console.log(`  ${img.filename} - ${img.alt}`));
    
    console.log('\nGYM:');
    imageMap.gym.forEach(img => console.log(`  ${img.filename} - ${img.alt}`));
    
    console.log('\nPOOL:');
    imageMap.pool.forEach(img => console.log(`  ${img.filename} - ${img.alt}`));
    
    console.log('\n=== JSON OUTPUT (Copy this) ===');
    console.log(JSON.stringify(imageMap, null, 2));
    
    return imageMap;
})();

