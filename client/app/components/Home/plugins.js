/* eslint-disable no-undef */
class Plugins {
  static preloader() {
    $(document).ready(() => Plugins.handlePreloader());
  }

  static handlePreloader() {
    const preloaderDelay = 300;
    const preloaderFadeOutTime = 200;
    const loadingAnimation = $('.loader', '.text');
    const preloader = $('.page-loading');
    loadingAnimation.fadeOut();
    preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
    $('html').animate({ scrollTop: 0 }, 1);
    $('body').animate({ scrollTop: 0 }, 1);
  }

  static navBarScrolling() {
    $(window).scroll(() => {
      if (window.pageYOffset >= 100) {
        $('body').addClass('nav-scroll');
      } else {
        $('body').removeClass('nav-scroll');
      }
    });
  }

  static countTo() {
    $('.number')
      .countTo({
        formatter(value, options) {
          value = value.toFixed(options.decimals);
          value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          return value;
        },
      });
  }

  static magnificPopup() {
    $('.portfolio-box').magnificPopup({
      type: 'image',
      gallery: { enabled: true },
      zoom: { enabled: true, duration: 300 },
    });
  }
}

export default Plugins;
