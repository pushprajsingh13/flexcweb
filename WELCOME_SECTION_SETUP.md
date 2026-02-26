# WelcomeSection Setup Guide

## Overview
The WelcomeSection component has been successfully integrated into your FlexC web application. This guide explains what was set up and how to use it.

## Installed Dependencies

The following packages have been installed:

### 1. **react-bootstrap** (Bootstrap components for React)
- Provides `Row`, `Col`, and other Bootstrap components
- Version: Latest

### 2. **bootstrap** (Bootstrap CSS framework)
- Provides the core Bootstrap styling
- Imported in `src/main.tsx`

### 3. **react-animated-css** (Animation library)
- Provides the `Animated` component for animations
- CSS imported in `src/main.tsx`

### Already Installed:
- `react` and `react-dom` - Core React libraries
- `react-router-dom` - For routing and the `Link` component

## Created Files

### 1. **src/utils/app-config.ts**
Application configuration file containing app-wide settings:
```typescript
export const appConfig = {
  APP_NAME: "FlexC",
  APP_VERSION: "1.0.0",
  APP_DESCRIPTION: "Hire & Manage Your Hybrid Workforce Online",
};
```

### 2. **src/utils/countryContextUtility.ts**
Utility functions for getting application assets:
```typescript
export const getAppLogo = (): string => {
  return "https://flexcblobstoragelive.blob.core.windows.net/apublic/home/flexc-logo.svg";
};
```

### 3. **src/components/WelcomeSection.css**
Comprehensive CSS styling for the WelcomeSection component, including:
- Background gradients
- Component layouts
- Responsive design
- Typography styles
- Hover effects and animations

### 4. **src/components/WelcomeSection.tsx**
The main WelcomeSection component with three user type options:
- Professional/Consultant
- Organization
- HR Agency/Recruiter

## Component Props

The WelcomeSection component expects three callback functions as props:

```typescript
interface WelcomeSectionProps {
  setConsultant?: () => void;
  setOrganization?: () => void;
  setHrAgency?: () => void;
}
```

## Usage Example

The component is already integrated in `src/pages/Index.tsx`:

```typescript
<WelcomeSection 
  setConsultant={handleSetConsultant}
  setOrganization={handleSetOrganization}
  setHrAgency={handleSetHrAgency}
/>
```

The handler functions are defined in the Index component and currently just log to console. You can customize them to:
- Navigate to different routes
- Update application state
- Make API calls
- Show modals or forms

## Features

### 1. **Three User Types**
The section presents three options for users:
- **Professional**: Find exciting work opportunities
- **Organization**: Hire and manage your agile workforce
- **Recruiter**: Become a FlexC Recruitment Partner

### 2. **Animations**
Each card has fade-in animations with staggered delays using `react-animated-css`.

### 3. **Responsive Design**
The layout adapts to different screen sizes using Bootstrap's grid system.

### 4. **Dynamic Routing**
The component tracks the current path and redirects appropriately based on user selection.

## Customization

### Changing the App Name
Edit `src/utils/app-config.ts`:
```typescript
export const appConfig = {
  APP_NAME: "Your App Name",
  // ...
};
```

### Changing the Logo
Edit `src/utils/countryContextUtility.ts`:
```typescript
export const getAppLogo = (): string => {
  return "your-logo-url.svg";
};
```

### Modifying Styles
Edit `src/components/WelcomeSection.css` to customize:
- Colors
- Spacing
- Typography
- Animations
- Hover effects

### Updating Images
The component uses SVG images from Azure Blob Storage. To use your own images, update the `src` attributes in the component:
```typescript
src="your-image-url.svg"
```

## Navigation Setup

The component uses `react-router-dom` for navigation. Make sure you have routes set up for:
- `/talent` - For professionals/consultants
- `/enterprise` - For organizations
- `/recruiter` - For recruiters/HR agencies

If these routes don't exist yet, you can:
1. Create them in your router configuration
2. Update the `to` props in the `Link` components
3. Or handle navigation differently in the prop functions

## Testing

To test the component:

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Navigate to the page:**
   Open your browser and go to the homepage

3. **Scroll to the "Explore Product" button** below the Services section and click it

4. **The page should scroll to the WelcomeSection** showing three user type options

5. **Click each option** and check the browser console for the log messages

## Next Steps

1. **Implement actual routing logic** in the handler functions
2. **Add authentication or user state management** if needed
3. **Customize the styling** to match your brand
4. **Add more interactive features** like modals or forms
5. **Update the image URLs** to use your own assets

## Troubleshooting

### If animations don't work:
- Ensure `react-animated-css/animate.min.css` is imported in `src/main.tsx`
- Check browser console for errors

### If Bootstrap styles are missing:
- Ensure `bootstrap/dist/css/bootstrap.min.css` is imported in `src/main.tsx`
- Check that react-bootstrap is properly installed

### If navigation doesn't work:
- Ensure react-router-dom is properly configured in your App.tsx
- Check that your routes match the paths in the Link components

### If images don't load:
- Check your internet connection (images are loaded from Azure CDN)
- Consider hosting images locally for better performance

## Notes

- The component maintains backward compatibility with the original design
- All animations use CSS for better performance
- The component is fully responsive and mobile-friendly
- TypeScript types are properly defined for better development experience

## Support

If you encounter any issues or need further customization, refer to the official documentation:
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Animated CSS](https://www.npmjs.com/package/react-animated-css)
- [React Router](https://reactrouter.com/)
