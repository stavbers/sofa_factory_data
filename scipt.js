
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
      'mapIcon': 'href//iconimage',
      'mapName': 'ул специалистов 1 а',
      'mapLink': 'href//dgndkgldlkgvdlnvdlvlnd'
    },
    'actionCall': {
      'actionIcon': 'href//kjdndjkbndkjbnd',
      'actionPhone': '88888884r434535',
      'actionTitle': 'Звонок бесплатный'
    }
  },
  'headerBotm': {
      'menu': ['О нас','Услуги','Цены','Материалы','Контакты','Отправить фото']
  }
}

// console.log(JSON.stringify(obj))


document.addEventListener("DOMContentLoaded", function() {
  fetch('http://cf-api.stavbers.site/homepage')
  .then(resp => resp.json())
  .then(data=> console.log(JSON.parse(data[0].homepage)))
  // .then(data=> console.log(data))
});
