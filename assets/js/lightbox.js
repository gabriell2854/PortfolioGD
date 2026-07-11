/* Lightbox for case study images */
(function() {
  // Create overlay
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<button class="lightbox-close">&times;</button><img alt="">';
  document.body.appendChild(overlay);

  var imgEl = overlay.querySelector('img');
  var closeBtn = overlay.querySelector('.lightbox-close');

  function open(src) {
    imgEl.src = src;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    imgEl.src = '';
  }

  // Click on any sample-item image
  document.addEventListener('click', function(e) {
    var target = e.target.closest('.sample-item img');
    if (target) {
      e.preventDefault();
      open(target.src);
    }
  });

  // Close on overlay click (outside image)
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay || e.target === closeBtn) {
      close();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      close();
    }
  });
})();