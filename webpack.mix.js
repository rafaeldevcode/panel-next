const Mix = require("laravel-mix");


Mix
   .sass('libs/sass/style.scss', 'public/assets/css/style.css')
   .css('node_modules/bootstrap-icons/font/bootstrap-icons.css', 'public/assets/icons/bootstrap-icons.css')
   .scripts('node_modules/jquery/dist/jquery.min.js', 'public/assets/js/jquery.js')
   .scripts('node_modules/bootstrap/dist/js/bootstrap.bundle.js', 'public/assets/js/bootstrap.js')
   .scripts('node_modules/bootstrap/dist/js/bootstrap.bundle.js.map', 'public/assets/js/bootstrap.js.map');
