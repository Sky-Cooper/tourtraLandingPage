// This file must be a .d.ts file. 
// Do not put this code in layout.tsx or main.tsx.

// Support for CSS/SCSS modules
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';

// Support for images
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
 declare module "*.jpeg" {
       const content: import("next/image").StaticImageData;
       export default content;
   }
declare module '*.gif';
declare module '*.webp';
declare module '*.svg';