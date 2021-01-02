const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js/app.js")
    .postCss("resources/sass/app.css", "public/css/app.css")
    .postCss("resources/sass/docs.css", "public/css/docs.css");

mix.options({
    postCss: [
        require('postcss-import'),
        require('tailwindcss')('./tailwind.config.js'),
        require('postcss-nested'),
        require('autoprefixer'),
    ]
});

if (mix.inProduction()) {
    mix.version();
}
