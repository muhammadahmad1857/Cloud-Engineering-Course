# Flexbox and CSS Grid Demonstration

Welcome to the Flexbox and CSS Grid demonstration project. This README will guide you through the various properties and concepts related to Flexbox and CSS Grid, showcasing examples and explanations for each.

## Table of Contents

- [Flexbox](#flexbox)
  - [Flex Properties](#flex-properties)
  - [Flex Direction](#flex-direction)
  - [Gutter Classes](#gutter-classes)
  - [Justify Content](#justify-content)
  - [Align Items](#align-items)
  - [Flex Wrap](#flex-wrap)
  - [Flex Grow, Shrink, and Basis](#flex-grow-shrink-and-basis)
  - [Order](#order)
  - [Nested Flex Containers](#nested-flex-containers)
- [CSS Grid](#css-grid)
  - [Grid Properties](#grid-properties)
  - [Grid Template Columns and Rows](#grid-template-columns-and-rows)
  - [Auto Columns and Auto Rows](#auto-columns-and-auto-rows)
  - [Grid Gap](#grid-gap)
  - [Place Items](#place-items)
  - [Place Content](#place-content)
  - [Place Self](#place-self)
  - [Nested Grid and Flex in Grid](#nested-grid-and-flex-in-grid)
- [Additional Topics](#additional-topics)
  - [Main Axis vs Cross Axis](#main-axis-vs-cross-axis)
  - [Difference Between Justify and Align](#difference-between-justify-and-align)
- [Live Class Link](#live-class-link)

---

## Flexbox

Flexbox, or the Flexible Box Layout, is a one-dimensional layout method for laying out items in rows or columns.

### Flex Properties

- **flex-direction**: Specifies the direction of the flex items.

  - `row` (default), `row-reverse`, `column`, `column-reverse`

- **gap (Gutter Class)**: Defines the space between flex items.

  - `gap-x-*`, `gap-y-*`, `gap-*`

- **justify-content**: Aligns flex items along the main axis.

  - `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`

- **align-items**: Aligns flex items along the cross axis.

  - `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline`

- **flex-wrap**: Determines if flex items should wrap or not.
  - `nowrap` (default), `wrap`, `wrap-reverse`

### Flex Grow, Shrink, and Basis

- **flex-grow**: Defines how much a flex item should grow relative to the rest.
- **flex-shrink**: Defines how much a flex item should shrink relative to the rest.
- **flex-basis**: Specifies the initial size of the flex item.

### Order

- **order**: Controls the order in which flex items appear in the flex container.

### Nested Flex Containers

- Flex containers can be nested, allowing for more complex layouts within a flex item.

## CSS Grid

CSS Grid is a two-dimensional layout system that allows you to control both rows and columns.

### Grid Properties

- **grid-template-columns**: Defines the columns of the grid.
- **grid-template-rows**: Defines the rows of the grid.

### Grid Template Columns and Rows

- **grid-template-columns**: Specifies the width of columns in the grid.
- **grid-template-rows**: Specifies the height of rows in the grid.

### Auto Columns and Auto Rows

- **grid-auto-columns**: Defines the size of implicitly created columns.
- **grid-auto-rows**: Defines the size of implicitly created rows.

### Grid Gap

- **gap**: Specifies the space between grid items.

### Place Items

- **place-items**: A shorthand for `align-items` and `justify-items` properties.

### Place Content

- **place-content**: A shorthand for `align-content` and `justify-content` properties.

### Place Self

- **place-self**: A shorthand for `align-self` and `justify-self` properties.

### Nested Grid and Flex in Grid

- Grids can be nested inside each other or within flex containers for complex layouts.

## Additional Topics

### Main Axis vs Cross Axis

- The **main axis** is defined by `flex-direction`. The **cross axis** runs perpendicular to the main axis.

### Difference Between Justify and Align

- **justify-content**: Aligns items along the main axis.
- **align-items**: Aligns items along the cross axis.

## Live Class Link

The class demo is live here: [live demo](https://class03-flex-and-grid-piaic.vercel.app)
