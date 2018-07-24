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
  box-sizing: border-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0 -1%;
}

.grid > .grid__col-3 {
  box-sizing: border-box;
  -ms-flex: 0 0 23%;
  flex: 0 0 23%;
  margin: 0 1% 2%;
}

.grid > .grid__col-9 {
  box-sizing: border-box;
  -ms-flex: 0 0 73%;
  flex: 0 0 73%;
  margin: 0 1% 2%;
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

### Bower (deprecated)

```
$ bower install flexbox-grid-mixins --save
```

### Manual Install

Include sass/\_flexbox-grid-mixins.scss in the appropriate location in your project.

## Getting Started

### 1. Import Flexbox Grid Mixins in Sass/SCSS file

```
@import 'flexbox-grid-mixins';
```

Example : import form node_modules

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

## Package manager

[flexbox-grid-mixins - npm](https://www.npmjs.com/package/flexbox-grid-mixins)

### Mixins Reference and Example

* [Mixins Reference](http://thingsym.github.io/flexbox-grid-mixins/#Mixins-Reference)
* [Basic Example](http://thingsym.github.io/flexbox-grid-mixins/#Basic-Example)
* [Grid System Example](http://thingsym.github.io/flexbox-grid-mixins/#Grid-System-Example)
* [Flexbox Grid Mixins Example](http://thingsym.github.io/flexbox-grid-mixins/example/example.html)
* [Holy Grail Layout - Using Flexbox Grid Mixins](http://thingsym.github.io/flexbox-grid-mixins/example/holy-grail-layout.html)
* [Responsive web design - Using Flexbox Grid Mixins](http://thingsym.github.io/flexbox-grid-mixins/example/responsive.html)
* [Unit-Set Grid (Experimental stage)](http://thingsym.github.io/flexbox-grid-mixins/example/unit-set.html)
* [Grid Type](http://thingsym.github.io/flexbox-grid-mixins/example/grid-type.html)

### Development

1. run ```$ sudo yum install nodejs npm```
2. run ```$ sudo npm install --global gulp-cli```
3. Forking on GitHub
4. run ```$ cd /path/to/flexbox-grid-mixins```
5. run ```$ npm install```
6. run ```$ bundle install --path vendor/bundle```
7. run ```$ gulp serve```
8. Access URL http://localhost:3000

## Contribution

### Patches and Bug Fixes

Small patches and bug reports can be submitted a issue tracker in Github. Forking on Github is another good way. You can send a pull request.

1. Fork [Flexbox Grid Mixins](https://github.com/thingsym/flexbox-grid-mixins) from GitHub repository
2. Create a feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Create new Pull Request

## Changelog

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

Copyright (c) 2016 thingsym
