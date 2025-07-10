module.exports = {
    content: ['index.html', 'assets/scripts.js', 'assets/maugallery.js'], // adapte selon l’emplacement de ton JS
    css: ['assets/bootstrap/bootstrap.min.css'],
        safelist: [
            // Bootstrap grid
            /^row$/,
            /^container$/,
            /^col$/,
            /^col-\d+$/,
            /^col-(xs|sm|md|lg|xl|xxl)-\d+$/,
            /^col-(xs|sm|md|lg|xl|xxl)$/,
            /^col-auto$/,
            /^img-fluid$/,
            // Bootstrap spacing/utilities
            /^mb-\d+$/,
            /^mt-\d+$/,
            /^mx-\d+$/,
            /^my-\d+$/,
            /^p[trblxy]?-\d+$/,
            // Carrousel, galerie, nav, modal
            /^carousel/,
            /^active$/,
            /^slide$/,
            /^fade$/,
            /^show$/,
            /^modal/,
            /^nav/,
            // Galerie personnalisée
            /^gallery-items-row$/,
            /^gallery-item$/,
            /^item-column$/,
            /^lightboxImage$/,
            /^mg-prev$/,
            /^mg-next$/,
            /^tags-bar$/,
            /^active-tag$/,
          ]          
  };
  