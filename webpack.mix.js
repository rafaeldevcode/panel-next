const Mix = require("laravel-mix");


Mix
   .sass('frontend/libs/sass/style.scss', 'frontend/public/assets/css/style.css')
   .css('frontend/node_modules/bootstrap-icons/font/bootstrap-icons.css', 'frontend/public/assets/icons/bootstrap-icons.css');
