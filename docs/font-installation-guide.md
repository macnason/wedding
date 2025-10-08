# Font Installation Guide

## Font File Placement

Please add your font files to the following directory structure:

```
public/
  fonts/
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

## Required Font Files

### PP Editorial New

- **PPEditorialNew-Regular.woff2** (primary format)
- **PPEditorialNew-Regular.woff** (fallback format)
- **PPEditorialNew-UltralightItalic.woff2** (for hero text)
- **PPEditorialNew-UltralightItalic.woff** (fallback)

### Domaine Text

- **DomaineText-Regular.woff2** (primary format)
- **DomaineText-Regular.woff** (fallback format)
- **DomaineText-Medium.woff2** (for buttons and emphasis)
- **DomaineText-Medium.woff** (fallback)

## Font Configuration

The fonts have been pre-configured in:

- **Layout.tsx**: Font loading and CSS variables
- **Tailwind Config**: Font family definitions
- **Global CSS**: Typography classes

## Font Usage in Design

- **Hero Names**: PP Editorial New Ultralight Italic (245px, 168px)
- **Section Headings**: PP Editorial New Italic (96px)
- **Event Times**: PP Editorial New Italic (36px)
- **Body Text**: Domaine Text Regular (20px, 36px)
- **Buttons**: Domaine Text Medium (26px, 32px, 48px)
- **Navigation**: Domaine Text Medium (26px)

## Fallback Strategy

If fonts fail to load, the system will fall back to:

1. System serif fonts for headings
2. System sans-serif fonts for body text

## Testing

After adding the font files:

1. Restart the development server
2. Check browser console for font loading errors
3. Verify typography matches the Figma design
4. Test on different devices and browsers

## Font Licensing

Ensure you have proper licensing for both fonts:

- PP Editorial New (commercial license required)
- Domaine Text (commercial license required)

Keep license documentation in a secure location.


