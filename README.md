# Flexbox Grid Mixins

Sass Mixins to generate Flexbox grid.

**Flexbox Grid Mixins** is Sass Mixins library to help you write well-structured, readable, maintainable, component-based grid using Flexbox (CSS Flexible Box Layout Module).

Flexbox Grid Mixins documentation: [https://thingsym.github.io/flexbox-grid-mixins/](https://thingsym.github.io/flexbox-grid-mixins/)

## Example

### HTML

```
<div class="grid">
<div class="grid__col-3">
  3
</div>
<div class="grid__col-9">
  9
</div>
</div>
```

### Sass

#### Dart Sass

```
@use 'node_modules/flexbox-grid-mixins/dart-sass/flexbox-grid-mixins';

$default-grid-gutter: 2%;

.grid {
  @include flexbox-grid-mixins.grid($gutter: $default-grid-gutter);

  > .grid__col-3 {
    @include flexbox-grid-mixins.grid-col($col: 3, $gutter: $default-grid-gutter);
  }
  > .grid__col-9 {
    @include flexbox-grid-mixins.grid-col($col: 9, $gutter: $default-grid-gutter);
  }
}
```

#### LibSass

```
@import 'node_modules/flexbox-grid-mixins/sass/flexbox-grid-mixins';

$default-grid-gutter: 2%;

.grid {
  @include grid($gutter: $default-grid-gutter);

  > .grid__col-3 {
    @include grid-col($col: 3, $gutter: $default-grid-gutter);
  }
  > .grid__col-9 {
    @include grid-col($col: 9, $gutter: $default-grid-gutter);
  }
}
```

### CSS

```
.grid {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: -1%;
  margin-right: -1%;
}

.grid > .grid__col-3 {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 23%;
  flex: 0 0 23%;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 2%;
}

.grid > .grid__col-9 {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 73%;
  flex: 0 0 73%;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 2%;
}
```

## Installation

### npm

```
$ npm install flexbox-grid-mixins --save-dev
```

### Yarn

```
$ yarn add flexbox-grid-mixins --dev
```

### Manual Install

Include `dart-sass/\_flexbox-grid-mixins.scss` or `sass/\_flexbox-grid-mixins.scss` in the appropriate location in your project.

## Getting Started using Dart Sass

### 1. Import Flexbox Grid Mixins in Sass/SCSS file

```
@use 'flexbox-grid-mixins';
```

Example : import from node_modules

```
@use 'node_modules/flexbox-grid-mixins/dart-sass/flexbox-grid-mixins';
```

### 2. Define the grid container

```
.grid {
  @include flexbox-grid-mixins.grid();
}
```

### 3. Generate the grid columns

```
.grid__col-3 {
  @include flexbox-grid-mixins.grid-col(3);
}
.grid__col-9 {
  @include flexbox-grid-mixins.grid-col(9);
}
```

## Getting Started using LibSass

Note: [LibSass is Deprecated](https://sass-lang.com/blog/libsass-is-deprecated). See [Future Plans](https://sass-lang.com/blog/the-module-system-is-launched#future-plans).

### 1. Import Flexbox Grid Mixins in Sass/SCSS file

```
@import 'flexbox-grid-mixins';
```

Example : import from node_modules

```
@import 'node_modules/flexbox-grid-mixins/sass/flexbox-grid-mixins';
```

### 2. Define the grid container

```
.grid {
  @include grid();
}
```

### 3. Generate the grid columns

```
.grid__col-3 {
  @include grid-col(3);
}
.grid__col-9 {
  @include grid-col(9);
}
```

## Documentation

See Flexbox Grid Mixins documentation: [http://thingsym.github.io/flexbox-grid-mixins/](http://thingsym.github.io/flexbox-grid-mixins/)

## Mixins Reference

[Mixins Reference](http://thingsym.github.io/flexbox-grid-mixins/#Mixins-Reference)

## Example

* [Basic Example](http://thingsym.github.io/flexbox-grid-mixins/#Basic-Example)
* [Grid System Example](http://thingsym.github.io/flexbox-grid-mixins/#Grid-System-Example)

### Dart Sass

* [Flexbox Grid Mixins Example](http://thingsym.github.io/flexbox-grid-mixins/example-dart-sass/example.html)
* [Holy Grail Layout - Using Flexbox Grid Mixins](http://thingsym.github.io/flexbox-grid-mixins/example-dart-sass/holy-grail-layout.html)
* [Responsive web design - Using Flexbox Grid Mixins](http://thingsym.github.io/flexbox-grid-mixins/example-dart-sass/responsive.html)
* [Gap (grid-gap) css property](http://thingsym.github.io/flexbox-grid-mixins/example-dart-sass/gap.html)
* [Auto margin](http://thingsym.github.io/flexbox-grid-mixins/example-dart-sass/auto-margin.html)
* [Box Sizing using Default Values](http://thingsym.github.io/flexbox-grid-mixins/example-dart-sass/box-sizing.html)
* [Stack](http://thingsym.github.io/flexbox-grid-mixins/example-dart-sass/stack.html)
* [Grid Type](http://thingsym.github.io/flexbox-grid-mixins/example-dart-sass/grid-type.html)
* [Unit-Set Grid (Experimental stage)](http://thingsym.github.io/flexbox-grid-mixins/example-dart-sass/unit-set.html)
* [Test] [Stick Out Grid](http://thingsym.github.io/flexbox-grid-mixins/example-dart-sass/test-stick-out.html)

### LibSass

* [Flexbox Grid Mixins Example](http://thingsym.github.io/flexbox-grid-mixins/example/example.html)
* [Holy Grail Layout - Using Flexbox Grid Mixins](http://thingsym.github.io/flexbox-grid-mixins/example/holy-grail-layout.html)
* [Responsive web design - Using Flexbox Grid Mixins](http://thingsym.github.io/flexbox-grid-mixins/example/responsive.html)
* [Gap (grid-gap) css property](http://thingsym.github.io/flexbox-grid-mixins/example/gap.html)
* [Auto margin](http://thingsym.github.io/flexbox-grid-mixins/example/auto-margin.html)
* [Box Sizing using Default Values](http://thingsym.github.io/flexbox-grid-mixins/example/box-sizing.html)
* [Stack](http://thingsym.github.io/flexbox-grid-mixins/example/stack.html)
* [Grid Type](http://thingsym.github.io/flexbox-grid-mixins/example/grid-type.html)
* [Unit-Set Grid (Experimental stage)](http://thingsym.github.io/flexbox-grid-mixins/example/unit-set.html)
* [Test] [Stick Out Grid](http://thingsym.github.io/flexbox-grid-mixins/example/test-stick-out.html)

## Package manager

[flexbox-grid-mixins - npm](https://www.npmjs.com/package/flexbox-grid-mixins)

## Development

1. run ```$ sudo yum install nodejs npm```
2. Forking on GitHub
3. run ```$ cd /path/to/flexbox-grid-mixins```
4. run ```$ npm install```
5. run ```$ npm run serve```
6. Access URL http://localhost:3000

## Contribution

### Patches and Bug Fixes

Small patches and bug reports can be submitted a issue tracker in Github. Forking on Github is another good way. You can send a pull request.

1. Fork [Flexbox Grid Mixins](https://github.com/thingsym/flexbox-grid-mixins) from GitHub repository
2. Create a feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Create new Pull Request on GitHub

## Changelog

* Version 0.3.3
  * update README
  * update index.html
  * update example
  * add condense
  * add $gap argument for gap CSS property
* Version 0.3.2
  * fix gulp-sass compiler
  * update package.json
  * fix Deprecation Warning: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.
  * add timeout-minutes to workflows
* Version 0.3.1
  * update example
  * fix items row/column alignment example
  * add auto margin example
* Version 0.3.0
  * add example for dart sass
  * add Flexbox Grid Mixins for Dart Sass
  * add dart sass workfows with gulpfile.js
* Version 0.2.2
  * remove .travis.yml, change CI/CD to GitHub Actions
* Version 0.2.1
  * auto release to npm only version tags
  * gulp bump up version to 4.0
* Version 0.2.0
  * update example
  * update package.json
  * add Default Values flexbox-grid-mixins-stack
  * change margin property, remove @mixin, grid-margin and grid-col-margin
  * remove breakpoint value of col argument
  * remove condensed argument
  * change grid-type from argument to Default Values flexbox-grid-mixins-grid-type
  * remove bower.json
  * add .travis.yml
* Version 0.1.6
  * add Default Values $flexbox-grid-mixins-box-sizing
  * update package.json
  * change lint from scss-lint to stylelint
* Version 0.1.5
  * update package.json
  * add optional arguments $shorthand to @mixin grid-col
* Version 0.1.4
  * update example
  * update document
  * fix conditional expression
  * add optional arguments $width, $max-width, $min-width, $height, $max-height and $min-height to @mixin grid-col
  * enable flex-grow with number column
  * add positive preset column
  * change readme.md file name to upper case
* Version 0.1.3
  * rename folder to docs from doc, change gh-pages
  * update document
  * update example
  * add optional arguments $flex-direction and $flex-wrap to the mixin grid
* Version 0.1.2
  * update document
  * update example
  * improve unit-set column, using CSS calc()
* Version 0.1.1
  * fix breakpoint preset column
  * fix example
  * fix Holy Grail Layout
* Version 0.1.0
  * Initial release.

## License

Licensed under the MIT License.

## Author

[thingsym](https://github.com/thingsym)

Copyright (c) 2016-2022 thingsym
