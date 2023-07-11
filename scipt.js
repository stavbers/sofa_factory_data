
let abc = {
  "id": "8271",
  "type": "anime",
  "attributes": {
    "synopsis": "Tokyo has become a cruel and merciless city—a place where vicious creatures called “ghouls”...",
    "titles": {
      "en": "Tokyo Ghoul",
      "en_jp": "Tokyo Ghoul",
      "en_us": "Tokyo Ghoul"
    },
    "canonicalTitle": "Tokyo Ghoul"
  },
  "favoritesCount": 3599,
  "popularityRank": 30,
  "ageRating": "R",
  "posterImage": {
    "original": "https://media.kitsu.io/anime/poster_images/8271/original.jpg?1597694836"
  },
  "episodeCount": 12,
  "episodeLength": 24,
  "totalLength": 288
}


let obj = {
  'headerTop': {
    'logo': 'href//digdogdoigjdiogj',
    'title': {
      'top': 'Абр-Вал',
      'bottom': 'Фабрика реставрации'
    },
    'btnCall': 'заказать звонок',
    'btnShop': {
      'btnName': 'Shop Sharing',
      'btnLink': 'href//ldfvldkgldgldgmv'
    },
    'map': {
      'mapIcon': 'https://files.stavbers.site/couch-factory/svg/adres_stroka.svg',
      'mapName': 'г. Харьков, Героев Харькова 220а',
      'mapLink': 'href//dgndkgldlkgvdlnvdlvlnd'
    },
    'actionCall': {
      'actionIcon': 'https://files.stavbers.site/couch-factory/svg/zvonok.svg',
      'actionPhone': '380677681999',
      'actionTitle': 'Звонок бесплатный'
    }
  },
  'headerBotm': {
      'menu': ['О нас','Услуги','Цены','Материалы','Контакты']
  },
  'section-one': {
    'block': '#FECD4B',
    'title': 'РАССЧИТАТЬ ЦЕНУ ПЕРЕТЯЖКИ И РЕМОНТА МЕБЕЛИ',
    'subTitle': 'Заполните форму ниже для оценки стоимости перетяжки, обивки и ремонта мягкой мебели. Мы свяжемся с Вами для уточнения деталей, определим сроки и стоимость работ.',
    'btn': {
      'bgColor': 'linear-gradient(180deg, #FECD4B 0%, #A57800 100%)',
      'text': 'Рассчитать стоимость'
    },
    'and': {
      'text': 'ИЛИ',
      'color': 'rgba(254, 205, 75, 0.42)'
    },
    'sendPhoto': 'ОТПРАВИТЬ ФОТО',
    'imgBg': 'https://files.stavbers.site/couch-factory/podlojka.png',
    'slider': {
      'img-one': 'https://files.stavbers.site/couch-factory/variant_one.png',
      'img-two': 'https://files.stavbers.site/couch-factory/variant_two.png'
    }
  }

}

// console.log(JSON.stringify(obj))


document.addEventListener("DOMContentLoaded", function() {
  fetch('http://cf-api.stavbers.site/homepage')
  .then(resp => resp.json())
  .then(data=> console.log(JSON.parse(data[0].homepage)))
  // .then(data=> console.log(data))
});
