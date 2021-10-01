const mix = require('laravel-mix');

// mix.js('./src/js/app.js', 'js/').vue().setPublicPath('dist')
//    .sass('./src/scss/style.scss', 'css/').version().setPublicPath('dist');


mix.setPublicPath('dist');

// minification parameters
mix.options({
    terser: {
        terserOptions: {
            compress: {
                drop_console: true,
                booleans_as_integers: true
            },
            // mangle: {
            //     properties: {
            //         keep_quoted: "strict"
            //     }
            // },
            mangle: true,
            output: {
                comments: false
            }
        },
    }
});

// main plugins and jQuery
// mix.combine([
//     './src/js/jquery.min.js',
//     './src/js/plugins/*.js',
//
// ], 'dist/js/plugins.min.js');

// main app vue js
mix.js('./src/js/app.js', 'dist/js/app.min.js').vue();

// plugins and customers styles
mix.sass('./src/scss/plugins.scss', 'dist/css/plugins.min.css')
    .sass('./src/scss/style.scss', 'dist/css/style.min.css').version();
