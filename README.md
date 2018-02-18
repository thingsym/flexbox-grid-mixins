# Flexbox Grid Mixins

Sass Mixins to generate Flexbox grid.

**Flexbox Grid Mixins** is Sass Mixins library to help you write well-structured, readable, maintainable, component-based grid using Flexbox (CSS Flexible Box Layout Module).

Flexbox Grid Mixins documentation: [http://thingsym.github.io/flexbox-grid-mixins/](http://thingsym.github.io/flexbox-grid-mixins/)

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
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 0 -1%;
}

.grid > .grid__col-3 {
  box-sizing: border-box;
  -webkit-flex: 0 0 23%;
  -ms-flex: 0 0 23%;
  flex: 0 0 23%;
  margin: 0 1% 2%;
}

.grid > .grid__col-9 {
  box-sizing: border-box;
  -webkit-flex: 0 0 73%;
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

### bower

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

### Mixins Reference and Example

* [Mixins Reference](http://thingsym.github.io/flexbox-grid-mixins/#Mixins-Reference)
* [Basic Example](http://thingsym.github.io/flexbox-grid-mixins/#Basic-Example)
* [Grid System Example](http://thingsym.github.io/flexbox-grid-mixins/#Grid-System-Example)
* [Flexbox Grid Mixins Example](http://thingsym.github.io/flexbox-grid-mixins/example/example.html)
* [Holy Grail Layout - Using Flexbox Grid Mixins](http://thingsym.github.io/flexbox-grid-mixins/example/holy-grail-layout.html)
* [Responsive web design - Using Flexbox Grid Mixins](http://thingsym.github.io/flexbox-grid-mixins/example/responsive.html)
* [Unit-Set Grid (Experimental stage)](http://thingsym.github.io/flexbox-grid-mixins/example/unit-set.html)
* [Grid Type](http://thingsym.github.io/flexbox-grid-mixins/example/grid-type.html)

## Contribute

### Patches and Bug Fixes

Small patches and bug reports can be submitted a issue tracker in GitHub. Forking on GitHub is another good way. You can send a pull request.

GitHub: [https://github.com/thingsym/flexbox-grid-mixins](https://github.com/thingsym/flexbox-grid-mixins)

### Guidlines

If you would like to contribute, here are some notes and guidlines.

* All development happens on the **develop** branch, so it is always the most up-to-date
* The **master** branch only contains tagged releases
* If you are going to be submitting a pull request, please submit your pull request to the **develop** branch
* See about [forking](https://help.github.com/articles/fork-a-repo/) and [pull requests](https://help.github.com/articles/using-pull-requests/)


### Development
1. run ```$ sudo yum install nodejs npm```
2. run ```$ sudo npm install --global gulp-cli```
3. Forking on GitHub
4. run ```$ cd /path/to/flexbox-grid-mixins```
5. run ```$ npm install```
6. run ```$ bundle install --path vendor/bundle```
7. run ```$ gulp serve```
8. Access URL http://localhost:3000

## Changelog

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

The MIT License (MIT)

Copyright (c) 2016 Thingsym

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.