$(document).ready(function() {
  $('.featured__list').slick({
    dots: true,
    arrows: false,
    dotsClass: 'featured__dots',
    autoplay: true,
    slidesToShow: 1,
    infinite: true,
    centerMode: true,
    centerPadding: '7%',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: undefined
        }
      }
    ]
  });

  $('.bestseller .bookslider__list').slick({
    dots: false,
    arrows: true,
    prevArrow: '<button class="bookslider__arrow bookslider__arrow_prev"></button>',
    nextArrow: '<button class="bookslider__arrow bookslider__arrow_next"></button>',
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        }
      }
    ]
  });

  $('.header__search-dropdown-select').select2({
    width: 100,
    dropdownCssClass: 'dropdown__container header__search-dropdown-container',
    selectionCssClass: 'dropdown__selection',
    minimumResultsForSearch: -1
  });

  const categories = [
    {
      id: 'book-categories',
      name: 'Book Categories',
      items: [
        {
          name: 'Architecture',
          id: 'architecture',
          level: 2,
          items: [
            { name: 'Annuals', id: 'cat1', level: 3 },
            { name: 'Decoration & Ornaments', id: 'cat2', level: 3 },
            { name: 'General', id: 'cat3', level: 3 },
            { name: 'Interior Design', id: 'cat4', level: 3 },
            { name: 'Landscape', id: 'cat5', level: 3 }
          ]
        },
      ]
    },
    {
      id: 'bestsellers',
      name: 'Bestsellers',
      items: [
        {
          name: 'Architecture',
          id: 'architecture',
          level: 2,
          items: [
            { name: 'Annuals', id: 'cat1', level: 3 },
            { name: 'Decoration & Ornaments', id: 'cat2', level: 3 },
            { name: 'General', id: 'cat3', level: 3 },
            { name: 'Interior Design', id: 'cat4', level: 3 },
            { name: 'Landscape', id: 'cat5', level: 3 }
          ]
        },
        {
          name: 'Business & Economics',
          id: 'business-economics',
          level: 2,
          items: [
            { name: 'Cat 1', id: 'cat1', level: 3 }
          ]
        },
        {
          name: 'Crafts & Hobbies',
          id: 'crafts-hobbies',
          level: 2,
          items: [
            { name: 'Cat 2', id: 'cat2', level: 3 }
          ]
        },
        {
          name: 'Fiction',
          id: 'fiction',
          level: 2,
          items: [
            { name: 'Cat 3', id: 'cat3', level: 3 }
          ]
        },
        {
          name: 'Foreign Language Study',
          id: 'foreign-language-study',
          level: 2,
          items: [
            { name: 'Cat 4', id: 'cat4', level: 3 }
          ]
        },
        {
          name: 'Health & Fitness',
          id: 'health-fitness',
          level: 2,
          items: [
            { name: 'Cat 5', id: 'cat5', level: 3 }
          ]
        },
        {
          name: 'Humor',
          id: 'humor',
          level: 2,
          items: [
            { name: 'Cat 6', id: 'cat6', level: 3 }
          ]
        }
      ]
    },
    {
      id: 'new-arrivals',
      name: 'New Arrivals',
      items: [
        {
          name: 'Architecture',
          id: 'architecture',
          level: 2,
          items: [
            { name: 'Annuals', id: 'cat1', level: 3 },
            { name: 'Decoration & Ornaments', id: 'cat2', level: 3 },
            { name: 'General', id: 'cat3', level: 3 },
            { name: 'Interior Design', id: 'cat4', level: 3 },
            { name: 'Landscape', id: 'cat5', level: 3 }
          ]
        },
      ]
    },
    {
      id: 'fiction',
      name: 'Fiction',
      items: [
        {
          name: 'Architecture',
          id: 'architecture',
          level: 2,
          items: [
            { name: 'Annuals', id: 'cat1', level: 3 },
            { name: 'Decoration & Ornaments', id: 'cat2', level: 3 },
            { name: 'General', id: 'cat3', level: 3 },
            { name: 'Interior Design', id: 'cat4', level: 3 },
            { name: 'Landscape', id: 'cat5', level: 3 }
          ]
        },
      ]
    },
    {
      id: 'self-help',
      name: 'Self-help',
      items: [
        {
          name: 'Architecture',
          id: 'architecture',
          level: 2,
          items: [
            { name: 'Annuals', id: 'cat1', level: 3 },
            { name: 'Decoration & Ornaments', id: 'cat2', level: 3 },
            { name: 'General', id: 'cat3', level: 3 },
            { name: 'Interior Design', id: 'cat4', level: 3 },
            { name: 'Landscape', id: 'cat5', level: 3 }
          ]
        },
      ]
    },
    {
      id: 'information',
      name: 'Information',
      items: [
        {
          name: 'Architecture',
          id: 'architecture',
          level: 2,
          items: [
            { name: 'Annuals', id: 'cat1', level: 3 },
            { name: 'Decoration & Ornaments', id: 'cat2', level: 3 },
            { name: 'General', id: 'cat3', level: 3 },
            { name: 'Interior Design', id: 'cat4', level: 3 },
            { name: 'Landscape', id: 'cat5', level: 3 }
          ]
        },
      ]
    },
  ];

  function buildCategoryItems(category) {
    function buildSingleCategoryItem(categoryItem) {
      const isLevel3 = categoryItem.level === 3;
      const el = isLevel3 ? 'a' : 'div';

      return `
        <${el} class="navdrawer__subnav-item" data-level="${categoryItem.level}" data-id="${categoryItem.id}">
          <div class="navdrawer__subnav-item-wrapper">
            <div class="navdrawer__subnav-item-label">
              ${categoryItem.name}
            </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.831 8.51816L5.89714 14.452C5.61096 14.7382 5.14698 14.7382 4.86082 14.452L4.16873 13.7599C3.88304 13.4742 3.88249 13.0112 4.16751 12.7248L8.87023 7.99998L4.16751 3.27516C3.88249 2.98879 3.88304 2.52575 4.16873 2.24006L4.86082 1.54797C5.14701 1.26178 5.61099 1.26178 5.89714 1.54797L11.831 7.48184C12.1172 7.76799 12.1172 8.23197 11.831 8.51816Z" fill="#2F4E92"/>
            </svg>  
          </div>
        </${el}>
      `;
    }

    let str = '';
    category.items.forEach(item => {
      str = str + buildSingleCategoryItem(item);
    });
    
    return str;
  }

  function removeSubnav() {
    $('.navdrawer__subnav').remove();
  }

  function buildSubnav(categoryId, categoryObjs) {
    const category = categoryObjs.find(function(item) {
      return item.id === categoryId;
    });

    const subnavLevelClass = `navdrawer__subnav-level-${category.level ? category.level : '1'}`;
    if ($(`.${subnavLevelClass}`).length) return;

    const structureString = `
      <div class="navdrawer__subnav ${subnavLevelClass}">
        <div class="navdrawer__subnav-wrapper">
          <div class="navdrawer__subnav-head">
            <div class="navdrawer__subnav-head-wrapper">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16867 7.4817L10.1028 1.54791C10.3889 1.26181 10.853 1.26181 11.1391 1.54791L11.8313 2.24009C12.117 2.52588 12.1173 2.98876 11.8325 3.27516L7.12946 7.99985L11.8322 12.7248C12.1173 13.0112 12.1167 13.4741 11.8309 13.7599L11.1388 14.4521C10.8527 14.7382 10.3886 14.7382 10.1025 14.4521L4.16867 8.518C3.88258 8.2319 3.88258 7.7678 4.16867 7.4817Z" fill="#2F4E92"/>
              </svg>
              <div class="navdrawer__subnav-head-label">BACK TO ${category.name.toUpperCase()}</div>
            </div>
          </div>
          ${buildCategoryItems(category)}
        </div>
      </div>
    `;

    $('.navdrawer__body').append(structureString);
    const subnavHead = $(`.${subnavLevelClass}`).find('.navdrawer__subnav-head');

    const subnavItems = $(`.${subnavLevelClass}`).find('div.navdrawer__subnav-item');
    subnavItems.click(function(e) {
      e.stopPropagation();
      buildSubnav($(this).attr('data-id'), category.items);
    });
    
    subnavHead.click(function(e) {
      e.stopPropagation();
      const node = $(this).closest('.navdrawer__subnav');
      node.removeClass('navdrawer__subnav_active');
      setTimeout(() => {
        subnavHead.off('click');
        subnavItems.off('click');
        node.remove();
      }, 100);
    });

    setTimeout(function() {
      $(`.${subnavLevelClass}`).addClass('navdrawer__subnav_active');
    }, 100);
  } 

  $('.navdrawer__item').click(function() {
    buildSubnav($(this).attr('data-id'), categories);
  });

  $('#menu-drawer').click(function() {
    $('body').css('overflow', 'hidden');
    $('.navdrawer').addClass('navdrawer_active');
  });

  $('#drawer-close').click(function() {
    $('body').css('overflow', 'initial');
    $('.navdrawer').removeClass('navdrawer_active');
    removeSubnav();
  });

  $('#drawer-search').click(function() {
    $('.navdrawer').toggleClass('navdrawer_search');
    $(this).toggleClass('navdrawer__header-action_active');

    const isSearchActive = $('.navdrawer').hasClass('.navdrawer_search');
    if (isSearchActive) {
      setTimeout(function() {
        $('.navdrawer__searchbar-input').focus();
      }, 50);
    }
  });
});