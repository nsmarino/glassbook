// CSS based not on inheritance but on composition
// Knit together discrete strands of visual logic
// For example: Instead of having "blog card" extend "container",
// create pieces of logic like "four-part grid" or "scrollable-flex-item"
// that compnents can knit together into BESPOKE styles
// Is there a large enough distinction between 'visual css' (shape, outline, color, dimensions)
// and 'logical css' (media queries, scrolling behavior, even z-index) that 
// the two should be handled differently?

// Test case: this packet of CSS contains settings for a scrollable flex item
export const scrollableFlexItem = ``