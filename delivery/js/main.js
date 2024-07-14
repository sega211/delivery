const modalFunc = () => {
  const modal = document.querySelector('.cart-modal__overlay');
  const cartBtn = document.querySelector('#cart-button');
  const openModal = () => {
    modal.classList.add('open');
  };
  const closeModal = () => {
    modal.classList.remove('open');
  };
  cartBtn.addEventListener('click', () => {
    openModal();
  });
  modal.addEventListener('click', event => {
    if (
      event.target.classList.contains('cart-modal__overlay') ||
      event.target.closest('.cart-modal-header--close')
    ) {
      closeModal();
    }
  });
};

const restFunc = () => {
  const container = document.querySelector('#rest-container');

  const restArray = [
    {
      id: 0,
      title: 'Пицца плюс',
      time: 50,
      rating: 4.5,
      price: 900,
      type: 'Пицца',
      image: 'picaPlus.jpg',
    },
    {
      id: 1,
      title: 'Тануки',
      time: 40,
      rating: 4.7,
      price: 900,
      type: 'Пицца',
      image: 'tanuki.jpg',
    },
    {
      id: 2,
      title: 'FoodBand',
      time: 25,
      rating: 3.8,
      price: 750,
      type: 'Пицца',
      image: 'foodBand.jpg',
    },
    {
      id: 3,
      title: 'Жадина-пицца',
      time: 45,
      rating: 4.4,
      price: 600,
      type: 'Суши',
      image: 'sushi.jpg',
    },
    {
      id: 4,
      title: 'Точка еды',
      time: 20,
      rating: 4.9,
      price: 300,
      type: 'Fast Food',
      image: 'pointFood.jpg',
    },
    {
      id: 5,
      title: 'PizzaBurger',
      time: 50,
      rating: 4.8,
      price: 700,
      type: 'Пицца',
      image: 'pizzaBurg.jpg',
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка</p>';
  };
  const renderRests = array => {
    container.innerHTML = '';
    array.forEach(card => {
      container.insertAdjacentHTML(
        'beforeend',
        `
        <a href="goods.html?id=${card.id}" class="products-card">
            <div class="products-card__image">
              <img src="images/rests/${card.image}" alt="${card.image}">
            </div>
            <div class="products-card__description">
              <div class="products-card__description-row">
                <h4 class="products-card__description--title">
                    ${card.title}
                </h4>
                <div class="products-card__description--bage">${card.time} мин</div>
              </div>
              <div class="products-card__description-row">
                <div class="products-card__description-info">
                  <div class="products-card__description-info--rating">
                    <img src="images/icons/star.svg" alt="star"> ${card.rating}
                  </div>
                  <div class="products-card__description-info--price">От ${card.price} ₽</div>
                  <div class="products-card__description-info--group">${card.type} </div>
                </div>

              </div>
            </div>
          </a>
        `
      );
    });
  };

  if (container) {
    loading();

    setTimeout(() => {
      renderRests(restArray);
    }, 1000);
  }
};

const goodsFunc = () => {
  const goodsArray = [
    {
      id: 0,
      name: 'Ролл угорь стандарт',
      descr:
        'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
      price: 375,
      image: 'rollStandart',
    },
    {
      id: 1,
      name: 'Калифорния лосось стандарт',
      descr: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
      price: 250,
      image: 'california',
    },
    {
      id: 2,
      name: 'Окинава стандарт',
      descr: ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий.',
      price: 475,
      image: 'okinava',
    },
    {
      id: 3,
      name: 'Цезарь маки хl',
      descr:
        ' Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь.',
      price: 600,
      image: 'cecar',
    },
    {
      id: 4,
      name: 'Ясай маки стандарт 185 г',
      descr:
        ' Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг.',
      price: 420,
      image: 'iasai',
    },
    {
      id: 5,
      name: 'Ролл с креветкой стандарт',
      descr: ' Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
      price: 1200,
      image: 'krevetko',
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center;">Список обновляется, подождите пожалуйста!</p>';
  };

  const container = document.querySelector('#goods-container');
  const renderGoods = array => {
    container.innerHTML = '';

    array.forEach(card => {
      container.insertAdjacentHTML(
        'beforeend',
        `
            <div class="products-card">
            <div class="products-good__image">
              <img src="images/goods/${card.image}.jpg" alt="${card.image}">
            </div>
              <div class="products-card__goods-row">
                <h5 class="products-card__description--name">
                  ${card.name}
                </h5>
                         
                <p class="products-card__description--text">
                  ${card.descr}
                </p>
              </div>
                           
                <div class="products-card__description-controls">
                  <button class="btn btn-primiry ">  В корзину
                    <img src="images/icons/whiteCard.png" alt="shopping card">  </button>
                  <span class="products-card__description-controls--price">${card.price} ₽</span>
                  </div>
            </div>
            `
      );
    });
  };
  if (container) {
    loading();

    setTimeout(() => {
      renderGoods(goodsArray);
    }, 1000);
  }
};
modalFunc();
restFunc();
goodsFunc();
