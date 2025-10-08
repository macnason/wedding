# Font Setup Instructions

## Current Status

✅ **Build is working** with fallback fonts (Georgia serif)  
⏳ **Waiting for font files** to be added

## What You Need to Do

### 1. Add Font Files

Place your font files in these exact locations:

```
public/fonts/
  PPEditorialNew/
    PPEditorialNew-Regular.woff2
    PPEditorialNew-Regular.woff
    PPEditorialNew-UltralightItalic.woff2
    PPEditorialNew-UltralightItalic.woff
  DomaineText/
    DomaineText-Regular.woff2
    DomaineText-Regular.woff
    DomaineText-Medium.woff2
    DomaineText-Medium.woff
```

### 2. Switch to Real Fonts

Once you've added the font files, replace the current `layout.tsx` with the font-enabled version:

```bash
# From your project root
mv src/app/layout.tsx src/app/layout-fallback.tsx
mv src/app/layout-with-fonts.tsx src/app/layout.tsx
```

### 3. Test the Fonts

```bash
npm run build
```

If successful, your fonts are working! If you get errors, check:

- Font file paths match exactly
- Font files are not corrupted
- Font files have correct permissions

### 4. Development Server

```bash
npm run dev
```

Visit http://localhost:3000 to see your fonts in action!

## Font Usage in the Design

- **Hero Names "Olivia & Mac"**: PP Editorial New Ultralight Italic (245px, 168px)
- **Section Headings**: PP Editorial New Italic (96px)
- **Event Times**: PP Editorial New Italic (36px)
- **Body Text**: Domaine Text Regular (20px, 36px)
- **Buttons**: Domaine Text Medium (26px, 32px, 48px)
- **Navigation**: Domaine Text Medium (26px)

## Troubleshooting

### If fonts don't load:

1. Check browser developer tools for font loading errors
2. Verify font file paths are correct
3. Clear browser cache
4. Try different font formats (.woff2 vs .woff)

### If build fails:

1. Check that all font files exist
2. Verify file permissions
3. Switch back to fallback: `mv src/app/layout-fallback.tsx src/app/layout.tsx`

## Fallback System

The current system uses Georgia serif as a fallback, which provides:

- Similar character widths to your target fonts
- Good readability
- Professional appearance
- Universal browser support

Your Figma design will look close to final with Georgia, but will be perfected once you add the actual fonts.
