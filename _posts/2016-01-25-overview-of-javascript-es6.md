---
layout: post
title: Overview of JavaScript ECMAScript 6
image-lg: /assets/es6-lg.png
image-sm: /assets/es6-sm.png
published: true
---

ES6 is a major update to the JavaScript language, it now looks and feels modern, and the updated features fix many problems with the earlier JavaScript versions. If you want to keep your JavaScript developing skills up to date, this course, Rapid ES6 Training, will help you to do that. You'll cover major new features including Iterators, Generators, symbols, and a built-in Promise library. You'll also learn about arrays collections. Finally, you'll discover the new meta-programming features with the Reflect API and Proxy API. By the end of this course, you will have a foundational knowledge of one of the latest web language features, ES6, and you'll be able to use it to write your code better.
                                   
<br />

## Table of contents

* [Install Sass/SCSS](#install-scss)
* [Create Sass in Jekyll](#create-sass-in-jekyll)
* [Link the compiled CSS](#link-the-compiled-css)
* [Import other Sass files using Sass imports](#import-sass)
* [CSS minification using Sass output style options](#css-minification)

<br />



## <a name="install-scss"></a>Install Sass/SCSS

If you are a Linux user, you can install Sass by using the command line,

````bash
$ sudo su -c "gem install sass"
````

For Mac users, you can install Sass by the following command line on Terminal.app or your preferred command line application such as [iTerm 2](http://iterm2.com/).

````bash
$ gem install sass
````

Windows users, you can use [Ruby Installer](http://rubyinstaller.org/), which will give everything you need.

<br />

## <a name="create-sass-in-jekyll"></a>Create Sass/SCSS in Jekyll
You can create `.sass` or `.scss` files anywhere you would like in your Jekyll directory.
Hold on! You said Sass or SCSS? Usually people just call Sass which represent both different syntax.
I personally prefer the SCSS syntax, even though you have to type more than the Sass syntax,
but I feel more that I am coding CSS with extra smart features such as variables, mixins, nesting and inheritance rather than coding another [DSL](http://en.wikipedia.org/wiki/Domain-specific_language).

You can create a `.scss` file within a `public/css` directory if you would like to put all your front end assets into the public directory.

````
jekyll-blog/
├── _includes/
├── _layouts/
├── _posts/
├── public/
│   └── css/
│       └── styles.scss
│   └── js/
│       └── main.js
├── _config.yml
└── index.html
````



And then add [Front Matter](http://jekyllrb.com/docs/frontmatter/) block at the top of the file, which mean, the two lines of triple dashes, *otherwise it won't work*. Like this:

````css
---
# This is the Front Matter block
---

// Your styles start here
.container {
 background: white;
}

````

Jekyll will compile your Sass files based on your current file structure if you already started running the Jekyll built-in web server by the `jekyll serve` command,
it will automatically compile your `public/css/styles.scss` file into a CSS file at `_site/public/css/styles.css`.

````
jekyll-blog/
├── _includes/
├── _layouts/
├── _posts/
├── _site/
│   └── public/
│       └── css/
│           └── styles.css/
├── public/
│   └── css/
│       └── styles.scss
│   └── js/
│       └── main.js
├── _config.yml
└── index.html
````


<br />
## <a name="link-the-compiled-css"></a>Link the compiled CSS
Once the complied CSS is in place, we can include a link to the style sheet with the `<link>` tag in your Jekyll site within the `<head>` tag.
Like this:

````html
<head>
  <link rel="stylesheet" type="text/css" href="/public/css/styles.css">
</head>
````
Or use the Jekyll site baseurl variable

{% raw %}
````html
<head>
  <link rel="stylesheet" type="text/css" href="{{ site.baseurl }}public/css/styles.css">
</head>
````
{% endraw %}

Usually we include the external style sheet in the `index.html`.
Or you can create a `head.html` in the `_includes` directory to share the same head tag definition by including it in your layout.



<br />
## <a name="import-sass"></a>Import other Sass/SCSS files using Sass imports
One of the greatest features in Sass is the `@import` feature. You can import multiple Sass files and compile them into one CSS file.

Put all your `.scss` files, partials or your UI components in the *default Sass directory* `/_sass`.
And import all the partials in your *main* Sass style sheet, in our case, `styles.scss` is the main Sass style sheet, like this:

````css
---
# This is the Front Matter block
---

// Importing Sass/SCSS partials
@import "grid";
@import "button";
@import "form";

````

You would like to change the *default Sass directory* to a different directory, we can define it in the `_config.yml` file.
In our case, we placed all the front end assets in the `/public/` directory, we can specify our own Sass directory like this:

````yaml

# We specify the directory for Jekyll so we can use @imports.
sass:
  sass_dir: public/_scss
````

*Important notes fo you*,

- The `sass_dir` works as *a load path* for Sass imports **ONLY**, don't put your main Sass style sheet in the same directory.
- **Don't insert Front Matter block** in the Sass/SCSS files or partials in the `sass_dir`. Jekyll will stop converting Sass files, and throw error messages.

<br />
## <a name="css-minification"></a>CSS minification using Sass output style options

Sass currently supports four different output styles:

- [:nested](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_13)
- [:expanded](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_14)
- [:compact](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_15)
- [:compressed](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_16)

The `:compressed` style will produce the optimal output for production.
Turn on and choose the Sass output style in `_config.yml`, like this:

````yaml
sass:
  style: compressed
````

It is simple, right? Thanks Jekyll teams for making designers and bloggers life much easier.
