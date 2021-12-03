declare module '*.css';
declare module '*.less';
declare module '*.sass';
declare module '*.scss';

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}
declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: string;
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';

// declare module "*.css" {
//   const style: any;
//   export default style;
// }

// declare module "*.scss" {
//   const style: any;
//   export default style;
// }

// declare module "*.less" {
//   const style: any;
//   export default style;
// }

// declare module "*.svg" {
//   const path: string;
//   export default path;
// }

// declare module "*.bmp" {
//   const path: string;
//   export default path;
// }

// declare module "*.gif" {
//   const path: string;
//   export default path;
// }

// declare module "*.jpg" {
//   const path: string;
//   export default path;
// }

// declare module "*.jpeg" {
//   const path: string;
//   export default path;
// }

// declare module "*.png" {
//   const path: string;
//   export default path;
// }
