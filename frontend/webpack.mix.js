const Mix = require("laravel-mix");


Mix
   .sass('libs/sass/style.scss', 'public/assets/css/style.css')
   .css('node_modules/bootstrap-icons/font/bootstrap-icons.css', 'public/assets/icons/bootstrap-icons.css');
