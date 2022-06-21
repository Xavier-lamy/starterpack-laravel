const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/assets')
    .sass('resources/scss/app.scss', 'public/assets', [
        //
    ]);

mix.options({
    hmrOptions: {
        host: '0.0.0.0',
        port: '8080'
    }
});

module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        watchOptions: {
            poll: true
        }
    },
};
