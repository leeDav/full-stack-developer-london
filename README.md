|  Master  |  Develop  |
|:-:|:-:|
| ![Master status](https://img.shields.io/circleci/project/github/leeDav/full-stack-developer-london/master.svg) | ![Develop status](https://img.shields.io/circleci/project/github/leeDav/full-stack-developer-london/develop.svg) |
| [![codecov: master](https://codecov.io/gh/leeDav/full-stack-developer-london/branch/master/graph/badge.svg)](https://codecov.io/gh/leeDav/full-stack-developer-london) | [![codecov: develop](https://codecov.io/gh/leeDav/full-stack-developer-london/branch/develop/graph/badge.svg)](https://codecov.io/gh/leeDav/full-stack-developer-london) |

# full-stack-developer-london

> The answer to the question

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# SCSS Naming conventions
## Class naming
I use BEM, with a splash of SMACSS thrown in for good measure.

## Folder structure
Even though this is a small project, I still like to keep my SCSS tidy.

This folder structure is based on [Harry Robert's ITCSS](http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528) methodology.

```
  scss/
      1-settings   // For colour/font and other variables
      2-tools      // For any mixins or placeholders
      3-generic    // Resets, normalisations, etc.
      4-base       // HTML tag overrides, e.g. <a> or <body>
      5-objects    // Custom elements, like custom dropdowns/checkboxes
      6-components // Widgets or components, but since we're using Vue...
      7-trumps     // As in the !important override kind, not the crazy rich man
```

It's not a complete implementation because this is still just a small project,
but it helps enforce some sort of style should a project suddenly grow and
we need to scale.

Using the above folder structure helps keeps things reasonably sane.

Usually everything would be `@import`'ed in to one `styles.css` file and we'd
be happy. But as Vue let's us include SCSS straight in to our templates, the
SCSS you'll find here should be more abstracted and generic -- offering helper
or utility classes (such as `.text-right` for aligning text to the right).

Using utility classes enables us to get maximum reuse from CSS and avoid
being over-complex and re-specify rules.
