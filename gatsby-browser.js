import React from 'react';
import GlobalStyles from './src/components/styles/GlobalStyles'

export const wrapPageElement = ({ element, props }) => { // allows a plugin to wrap the page element
  return <GlobalStyles {...props}>{element}</GlobalStyles>; // ie puts LAYOUT component around entire page
  // useful for setting wrappers that dont unmount on page change
};
