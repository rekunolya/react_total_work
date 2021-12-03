import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as reducerCategory} from "./categoreisSlice"

const INITIAL_STATE = {
   categories: [

],
goodCategories: [
    {
      category: { id: 1, type: "study", label: "Канцтовары, учеба" },
      items: [
        {
          id: 1,
          category_type: "study",
          label: "Ежедневник недатированный",
          price: 25.90,
          img: "https://www.logoton.by/upload/Sh/imageCache/8df/ceb/390bd3d303ac9eda3f87ba5ebff22ad7.jpeg"
        },
        {
          id: 2,
          category_type: "study",
          label: "Тетрадь полуобщая в клетку",
          price: 2.05,
          img: "https://s4-goods.ozstatic.by/2000/907/839/10/10839907_0.jpg"
        },
        {
          id: 3,
          category_type: "study",
          label: "Ластик",
          price: 1.20,
          img: "https://images.firma-gamma.ru/images/b/4/g63476155324.jpg"
        },
        {
          id: 4,
          category_type: "study",
          label: "Календарь-планер настенный",
          price: 11.95,
          img: "https://www.knigosvet.com/img/w300/1485255.jpg"
        },
        {
          id: 5,
          category_type: "study",
          label: "Ежедневник датированный",
          price: 25.90,
          img: "https://s2-goods.ozstatic.by/1000/233/76/101/101076233_0.jpg"
        },
        {
          id: 6,
          category_type: "study",
          label: "Тетрадь полуобщая в линейку",
          price: 2.05,
          img: "https://s2-goods.ozstatic.by/2000/372/941/10/10941372_0.jpg"
        },
        {
          id: 7,
          category_type: "study",
          label: "Линейка",
          price: 1.20,
          img: "https://s4-listing.ozstatic.by/400400/17/571/10/10571017_0.jpg"
        },
        {
          id: 8,
          category_type: "study",
          label: "Календарь",
          price: 11.95,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 9,
          category_type: "study",
          label: "Блокнот для девочек",
          price: 25.90,
          img: "https://s1-goods.ozstatic.by/2000/140/965/10/10965140_0.jpg"
        },
        {
          id: 10,
          category_type: "study",
          label: "Ручка шариковая",
          price: 2.05,
          img: "https://www.officeton.by/upload/resize_cache/slam.image/Sh/imageCache/cca/c74/b14880f5d7dddc20b41e51012bc638fc.jpg"
        },
        {
          id: 11,
          category_type: "study",
          label: "Точилка",
          price: 1.20,
          img: "https://s2-goods.ozstatic.by/1000/942/593/10/10593942_0.jpg"
        },
        {
          id: 12,
          category_type: "study",
          label: "Пенал",
          price: 11.95,
          img: "https://img.joomcdn.net/957c94478ecfbc6ed59d2f9c88a3ea8942cef905_original.jpeg"
        },
      ]
    },
    {
      category: { id: 2, type: "family", label: "Детям и мамам" },
      items: [
        {
          id: 1,
          category_type: "family",
          label: "Мягкая игрушка ОСЬМИНОЖКА",
          price: 25.90,
          img: "https://s2-goods.ozstatic.by/2000/23/979/10/10979023_0.jpg"
        },
        {
          id: 2,
          category_type: "family",
          label: "Зубная паста детская Elmex",
          price: 2.05,
          img: "https://s1-page.ozstatic.by/1000/781/807/10/10807781_1.jpg"
        },
        {
          id: 3,
          category_type: "family",
          label: "Игрушка-антистресс Pop-it",
          price: 1.20,
          img: "https://s4-goods.ozstatic.by/2000/937/17/101/101017937_0.jpg"
        },
        {
          id: 4,
          category_type: "family",
          label: "Рамка-вкладыш",
          price: 11.95,
          img: "https://s1-page.ozstatic.by/1000/120/763/10/10763120_0.jpg"
        },
        {
          id: 5,
          category_type: "family",
          label: "Магнитный театр Репка",
          price: 25.90,
          img: "https://s1-goods.ozstatic.by/2000/521/815/10/10815521_0.jpg"
        },
        {
          id: 6,
          category_type: "family",
          label: "Защита на коляску",
          price: 2.05,
          img: "https://s4-goods.ozstatic.by/2000/247/880/10/10880247_0.jpg"
        },
        {
          id: 7,
          category_type: "family",
          label: "Первый альбом малыша",
          price: 1.20,
          img: "https://s2-goods.ozstatic.by/2000/602/819/10/10819602_0.jpg"
        },
        {
          id: 8,
          category_type: "family",
          label: "Кубики Сказочные герои",
          price: 11.95,
          img: "https://s1-goods.ozstatic.by/2000/101/478/10/10478101_0.jpg"
        },
        {
          id: 9,
          category_type: "family",
          label: "Развивающая игрушка",
          price: 25.90,
          img: "https://s1-goods.ozstatic.by/2000/240/766/10/10766240_0.jpg"
        },
        {
          id: 10,
          category_type: "family",
          label: "Крем детский",
          price: 2.05,
          img: "https://s3-goods.ozstatic.by/2000/425/816/10/10816425_0.jpg"
        },
        {
          id: 11,
          category_type: "family",
          label: "Шампунь для волос детский",
          price: 1.20,
          img: "https://s4-goods.ozstatic.by/2000/367/516/10/10516367_0.jpg"
        },
        {
          id: 12,
          category_type: "family",
          label: "Мягкая игрушка Пачакун",
          price: 11.95,
          img: "https://s5-goods.ozstatic.by/2000/968/597/10/10597968_0.jpg"
        },
      ]
    },
    {
      category: { id: 3, type: "entertainment", label: "Развлечения, творчество" },
      items: [
        {
          id: 1,
          category_type: "entertainment",
          label: "UNO",
          price: 25.90,
          img: "https://s3-goods.ozstatic.by/2000/84/95/1/1095084_0.jpg"
        },
        {
          id: 2,
          category_type: "entertainment",
          label: "Доска для лепки",
          price: 2.05,
          img: "https://s4-goods.ozstatic.by/2000/836/435/10/10435836_0.jpg"
        },
        {
          id: 3,
          category_type: "entertainment",
          label: "Имаджинариум",
          price: 1.20,
          img: "https://s1-goods.ozstatic.by/2000/741/289/10/10289741_0.jpg"
        },
        {
          id: 4,
          category_type: "entertainment",
          label: "Набор для выращивания растений",
          price: 11.95,
          img: "https://s1-goods.ozstatic.by/2000/751/816/10/10816751_0.jpg"
        },
        {
          id: 5,
          category_type: "entertainment",
          label: "Ходилка. Каникулы в Простоквашино",
          price: 25.90,
          img: "https://s1-goods.ozstatic.by/2000/980/780/10/10780980_0.jpg"
        },
        {
          id: 6,
          category_type: "entertainment",
          label: "Краска акриловая по ткани",
          price: 2.05,
          img: "https://s4-goods.ozstatic.by/2000/106/559/10/10559106_0.jpg"
        },
        {
          id: 7,
          category_type: "entertainment",
          label: "Мафия",
          price: 1.20,
          img: "https://s1-goods.ozstatic.by/2000/611/774/10/10774611_0.jpg"
        },
        {
          id: 8,
          category_type: "entertainment",
          label: "Скотч декоративный для скрапбукинга",
          price: 11.95,
          img: "https://s3-goods.ozstatic.by/2000/594/608/10/10608594_0.jpg"
        },
        {
          id: 9,
          category_type: "entertainment",
          label: "Кубик Рубика",
          price: 25.90,
          img: "https://s5-goods.ozstatic.by/2000/868/948/10/10948868_0.jpg"
        },
        {
          id: 10,
          category_type: "entertainment",
          label: "500 злобных карт 3.0",
          price: 2.05,
          img: "https://s2-goods.ozstatic.by/2000/552/755/10/10755552_0.jpg"
        },
        {
          id: 11,
          category_type: "entertainment",
          label: "Клеевой пистолет",
          price: 1.20,
          img: "https://s1-goods.ozstatic.by/2000/971/982/10/10982971_0.jpg"
        },
        {
          id: 12,
          category_type: "entertainment",
          label: "Мелки восковые для творчества",
          price: 11.95,
          img: "https://s1-goods.ozstatic.by/2000/310/17/101/101017310_0.jpg"
        },
      ]
    },
    {
      category: { id: 4, type: "souvenirs", label: "Сувениры, галантерея, одежда" },
      items: [
        {
          id: 1,
          category_type: "souvenirs",
          label: "Набор наклеек №161",
          price: 25.90,
          img: "https://s4-goods.ozstatic.by/2000/276/31/101/101031276_0.jpg"
        },
        {
          id: 2,
          category_type: "souvenirs",
          label: "Открытка С Днем Рождения. Звери",
          price: 2.05,
          img: "https://s4-goods.ozstatic.by/2000/477/21/101/101021477_0.jpg"
        },
        {
          id: 3,
          category_type: "souvenirs",
          label: "Бумага упаковочная Cute",
          price: 1.20,
          img: "https://s5-goods.ozstatic.by/2000/108/967/10/10967108_0.jpg"
        },
        {
          id: 4,
          category_type: "souvenirs",
          label: "Бумага упаковочная Brown Craft",
          price: 11.95,
          img: "https://s5-page.ozstatic.by/1000/159/412/10/10412159_0.jpg"
        },
        {
          id: 5,
          category_type: "souvenirs",
          label: "Открытка Усё будзе добра",
          price: 25.90,
          img: "https://s4-goods.ozstatic.by/2000/346/690/10/10690346_0.jpg"
        },
        {
          id: 6,
          category_type: "souvenirs",
          label: "Сумка-шоппер",
          price: 2.05,
          img: "https://s1-goods.ozstatic.by/2000/540/987/10/10987540_0.jpg"
        },
        {
          id: 7,
          category_type: "souvenirs",
          label: "Набор значков маленьких",
          price: 1.20,
          img: "https://s4-goods.ozstatic.by/2000/836/13/101/101013836_0.jpg"
        },
        {
          id: 8,
          category_type: "souvenirs",
          label: "Открытка Праздник что ли?",
          price: 11.95,
          img: "https://s4-goods.ozstatic.by/2000/467/985/10/10985467_0.jpg"
        },
        {
          id: 9,
          category_type: "souvenirs",
          label: "Пакет бумажный подарочный",
          price: 25.90,
          img: "https://s5-goods.ozstatic.by/2000/29/967/10/10967029_0.jpg"
        },
        {
          id: 10,
          category_type: "souvenirs",
          label: "Брелок Авокадо",
          price: 2.05,
          img: "https://s4-goods.ozstatic.by/2000/686/946/10/10946686_0.jpg"
        },
        {
          id: 11,
          category_type: "souvenirs",
          label: "Визитница-карман",
          price: 1.20,
          img: "https://s5-goods.ozstatic.by/2000/378/44/101/101044378_0.jpg"
        },
        {
          id: 12,
          category_type: "souvenirs",
          label: "Набор свечей для торта",
          price: 11.95,
          img: "https://s3-goods.ozstatic.by/2000/205/979/10/10979205_0.jpg"
        },
      ]
    },
    {
      category: { id: 5, type: "books", label: "Книги" },
      items: [
        {
          id: 1,
          category_type: "books",
          label: "Букварь",
          price: 25.90,
          img: "https://s3-goods.ozstatic.by/2000/475/22/1/1022475_0.jpg"
        },
        {
          id: 2,
          category_type: "books",
          label: "1984",
          price: 2.05,
          img: "https://s5-goods.ozstatic.by/2000/449/348/10/10348449_0.jpg"
        },
        {
          id: 3,
          category_type: "books",
          label: "Magic Box. Английский язык для детей 5-7 лет.",
          price: 1.20,
          img: "https://s2-goods.ozstatic.by/2000/73/471/10/10471073_0.jpg"
        },
        {
          id: 4,
          category_type: "books",
          label: "Ход королевы",
          price: 11.95,
          img: "https://s2-goods.ozstatic.by/2000/72/970/10/10970072_0.jpg"
        },
        {
          id: 5,
          category_type: "books",
          label: "Дневник Стива, застрявшего в Minecraft",
          price: 25.90,
          img: "https://s4-goods.ozstatic.by/2000/687/593/10/10593687_0.jpg"
        },
        {
          id: 6,
          category_type: "books",
          label: "Самый лучший самоучитель английского языка",
          price: 2.05,
          img: "https://s5-goods.ozstatic.by/2000/938/382/10/10382938_0.jpg"
        },
        {
          id: 7,
          category_type: "books",
          label: "Ведьмак",
          price: 1.20,
          img: "https://s3-goods.ozstatic.by/2000/445/912/10/10912445_0.jpg"
        },
        {
          id: 8,
          category_type: "books",
          label: "Что делать, если...",
          price: 11.95,
          img: "https://s5-goods.ozstatic.by/2000/729/128/10/10128729_0.jpg"
        },
        {
          id: 9,
          category_type: "books",
          label: "Агент на мягких лапах",
          price: 25.90,
          img: "https://s2-goods.ozstatic.by/2000/503/682/10/10682503_0.jpg"
        },
        {
          id: 10,
          category_type: "books",
          label: "Гарри Поттер и Проклятое дитя.",
          price: 2.05,
          img: "https://s2-goods.ozstatic.by/2000/903/679/10/10679903_0.jpg"
        },
        {
          id: 11,
          category_type: "books",
          label: "Каласы пад сярпом тваiм",
          price: 1.20,
          img: "https://s3-goods.ozstatic.by/2000/624/556/10/10556624_0.jpg"
        },
        {
          id: 12,
          category_type: "books",
          label: "Альбом по развитию речи для самых маленьких",
          price: 11.95,
          img: "https://s1-goods.ozstatic.by/2000/430/65/1/1065430_0.jpg"
        },
      ]
    },
    {
      category: { id: 6, type: "cosmetics", label: "Косметика, парфюмерия" },
      items: [
        {
          id: 1,
          category_type: "cosmetics",
          label: "Шампунь для волос",
          price: 25.90,
          img: "https://s2-goods.ozstatic.by/2000/812/661/10/10661812_0.jpg"
        },
        {
          id: 2,
          category_type: "cosmetics",
          label: "Гель для бровей",
          price: 2.05,
          img: "https://s2-goods.ozstatic.by/2000/523/549/10/10549523_0.jpg"
        },
        {
          id: 3,
          category_type: "cosmetics",
          label: "Скраб для кожи головы",
          price: 1.20,
          img: "https://s1-goods.ozstatic.by/2000/451/483/10/10483451_0.jpg"
        },
        {
          id: 4,
          category_type: "cosmetics",
          label: "Тушь для ресниц",
          price: 11.95,
          img: "https://s5-goods.ozstatic.by/2000/208/550/10/10550208_0.jpg"
        },
        {
          id: 5,
          category_type: "cosmetics",
          label: "Консилер для лица",
          price: 25.90,
          img: "https://s2-goods.ozstatic.by/2000/323/572/10/10572323_0.jpg"
        },
        {
          id: 6,
          category_type: "cosmetics",
          label: "Бумажные носовые платочки ",
          price: 2.05,
          img: "https://s1-goods.ozstatic.by/2000/70/433/10/10433070_0.jpg"
        },
        {
          id: 7,
          category_type: "cosmetics",
          label: "Бальзам для губ",
          price: 1.20,
          img: "https://s3-goods.ozstatic.by/2000/674/692/10/10692674_0.jpg"
        },
        {
          id: 8,
          category_type: "cosmetics",
          label: "Бомбочка для ванны",
          price: 11.95,
          img: "https://s4-goods.ozstatic.by/2000/767/806/10/10806767_0.jpg"
        },
        {
          id: 9,
          category_type: "cosmetics",
          label: "Тканевая маска для лиц",
          price: 25.90,
          img: "https://s4-goods.ozstatic.by/2000/457/831/10/10831457_0.jpg"
        },
        {
          id: 10,
          category_type: "cosmetics",
          label: "Заколка для волос",
          price: 2.05,
          img: "https://s2-goods.ozstatic.by/2000/832/27/101/101027832_0.jpg"
        },
        {
          id: 11,
          category_type: "cosmetics",
          label: "Маска для волос",
          price: 1.20,
          img: "https://s3-goods.ozstatic.by/2000/835/773/10/10773835_0.jpg"
        },
        {
          id: 12,
          category_type: "cosmetics",
          label: "Средство против обгрызания ногтей",
          price: 11.95,
          img: "https://s1-goods.ozstatic.by/2000/891/481/10/10481891_0.jpg"
        },
      ]
    },
    {
      category: { id: 7, type: "goods", label: "Продукты, деликатесы" },
      items: [
        {
          id: 1,
          category_type: "goods",
          label: "Напиток газированный",
          price: 25.90,
          img: "https://s4-goods.ozstatic.by/2000/336/890/10/10890336_0.jpg"
        },
        {
          id: 2,
          category_type: "goods",
          label: "Шоколад молочный",
          price: 2.05,
          img: "https://s4-goods.ozstatic.by/2000/617/950/10/10950617_0.jpg"
        },
        {
          id: 3,
          category_type: "goods",
          label: "Соломка",
          price: 1.20,
          img: "https://s4-goods.ozstatic.by/2000/907/34/101/101034907_0.jpg"
        },
        {
          id: 4,
          category_type: "goods",
          label: "Напиток газированный",
          price: 11.95,
          img: "https://s2-goods.ozstatic.by/2000/533/943/10/10943533_0.jpg"
        },
        {
          id: 5,
          category_type: "goods",
          label: "Мармелад",
          price: 25.90,
          img: "https://s5-goods.ozstatic.by/2000/668/913/10/10913668_0.jpg"
        },
        {
          id: 6,
          category_type: "goods",
          label: "Драже",
          price: 2.05,
          img: "https://s4-goods.ozstatic.by/2000/47/855/10/10855047_0.jpg"
        },
        {
          id: 7,
          category_type: "goods",
          label: "Батончик в молочной глазури",
          price: 1.20,
          img: "https://s2-goods.ozstatic.by/2000/93/739/10/10739093_0.jpg"
        },
        {
          id: 8,
          category_type: "goods",
          label: "Карамель леденцовая",
          price: 11.95,
          img: "https://s3-goods.ozstatic.by/2000/15/919/10/10919015_0.jpg"
        },
        {
          id: 9,
          category_type: "goods",
          label: "Шоколад темный",
          price: 25.90,
          img: "https://s3-goods.ozstatic.by/2000/955/779/10/10779955_0.jpg"
        },
        {
          id: 10,
          category_type: "goods",
          label: "Печенье бисквитное",
          price: 2.05,
          img: "https://s4-goods.ozstatic.by/2000/156/724/10/10724156_0.jpg"
        },
        {
          id: 11,
          category_type: "goods",
          label: "Чипсы креветочные",
          price: 1.20,
          img: "https://s2-goods.ozstatic.by/2000/302/10/101/101010302_0.jpg"
        },
        {
          id: 12,
          category_type: "goods",
          label: "Снеки цельнозерновые",
          price: 11.95,
          img: "https://s4-goods.ozstatic.by/2000/276/763/10/10763276_0.jpg"
        },
      ]
    },
    {
      category: { id: 8, type: "house", label: "Дом, сад, зоотовары" },
      items: [
        {
          id: 1,
          category_type: "house",
          label: "Контейнер для еды",
          price: 25.90,
          img: "https://s4-goods.ozstatic.by/2000/887/750/10/10750887_0.jpg"
        },
        {
          id: 2,
          category_type: "house",
          label: "Кружка",
          price: 2.05,
          img: "https://s3-goods.ozstatic.by/2000/65/854/10/10854065_0.jpg"
        },
        {
          id: 3,
          category_type: "house",
          label: "Батарейка",
          price: 1.20,
          img: "https://s1-goods.ozstatic.by/2000/920/588/10/10588920_0.jpg"
        },
        {
          id: 4,
          category_type: "house",
          label: "Подставка-ограничитель для книг",
          price: 11.95,
          img: "https://s1-goods.ozstatic.by/2000/490/974/10/10974490_0.jpg"
        },
        {
          id: 5,
          category_type: "house",
          label: "Карандаш-пятновыводитель",
          price: 25.90,
          img: "https://s2-goods.ozstatic.by/2000/13/780/10/10780013_0.jpg"
        },
        {
          id: 6,
          category_type: "house",
          label: "Термокружка",
          price: 2.05,
          img: "https://s3-goods.ozstatic.by/2000/554/54/101/101054554_0.jpg"
        },
        {
          id: 7,
          category_type: "house",
          label: "Когтеточка",
          price: 1.20,
          img: "https://s4-goods.ozstatic.by/2000/977/869/10/10869977_0.jpg"
        },
        {
          id: 8,
          category_type: "house",
          label: "Салфетки для стирки",
          price: 11.95,
          img: "https://s4-goods.ozstatic.by/2000/666/891/10/10891666_0.jpg"
        },
        {
          id: 9,
          category_type: "house",
          label: "Бокал для вина",
          price: 25.90,
          img: "https://s2-goods.ozstatic.by/2000/552/968/10/10968552_0.jpg"
        },
        {
          id: 10,
          category_type: "house",
          label: "Салфетки влажные",
          price: 2.05,
          img: "https://s4-goods.ozstatic.by/2000/767/815/10/10815767_0.jpg"
        },
        {
          id: 11,
          category_type: "house",
          label: "Наволочка хлопковая",
          price: 1.20,
          img: "https://s4-goods.ozstatic.by/2000/317/31/101/101031317_0.jpg"
        },
        {
          id: 12,
          category_type: "house",
          label: "Благовония",
          price: 11.95,
          img: "https://s2-goods.ozstatic.by/2000/162/691/10/10691162_0.jpg"
        },
      ]
    },
    {
      category: { id: 9, type: "technics", label: "Техника, электроника" },
      items: [
        {
          id: 1,
          category_type: "technics",
          label: "Коврик для мыши",
          price: 25.90,
          img: "https://s5-goods.ozstatic.by/2000/508/886/10/10886508_0.jpg"
        },
        {
          id: 2,
          category_type: "technics",
          label: "Мышь беспроводная Smartbu",
          price: 2.05,
          img: "https://s5-goods.ozstatic.by/2000/839/719/10/10719839_0.jpg"
        },
        {
          id: 3,
          category_type: "technics",
          label: "Машинка для удаления катышков",
          price: 1.20,
          img: "https://s1-goods.ozstatic.by/2000/160/983/10/10983160_0.jpg"
        },
        {
          id: 4,
          category_type: "technics",
          label: "Кабель Celebrat FLY-2",
          price: 11.95,
          img: "https://s4-goods.ozstatic.by/2000/656/14/101/101014656_0.jpg"
        },
        {
          id: 5,
          category_type: "technics",
          label: "Попсокет ",
          price: 25.90,
          img: "https://s3-goods.ozstatic.by/2000/905/946/10/10946905_0.jpg"
        },
        {
          id: 6,
          category_type: "technics",
          label: "USB Flash Drive",
          price: 2.05,
          img: "https://s2-goods.ozstatic.by/2000/872/737/10/10737872_0.jpg"
        },
        {
          id: 7,
          category_type: "technics",
          label: "Вспениватель молока Clatronic",
          price: 1.20,
          img: "https://s5-goods.ozstatic.by/2000/558/49/101/101049558_0.jpg"
        },
        {
          id: 8,
          category_type: "technics",
          label: "Портативное зарядное устройство",
          price: 11.95,
          img: "https://s2-goods.ozstatic.by/2000/862/937/10/10937862_0.jpg"
        },
        {
          id: 9,
          category_type: "technics",
          label: "Фитнес-браслет Xiaomi Mi Smart",
          price: 25.90,
          img: "https://s4-goods.ozstatic.by/2000/347/13/101/101013347_0.jpg"
        },
        {
          id: 10,
          category_type: "technics",
          label: "Подставка для телефона и планшет",
          price: 2.05,
          img: "https://s3-frame.ozstatic.by/1000/415/33/101/101033415_0.jpg"
        },
        {
          id: 11,
          category_type: "technics",
          label: "Акустическая система",
          price: 1.20,
          img: "https://s4-goods.ozstatic.by/2000/597/488/10/10488597_0.jpg"
        },
        {
          id: 12,
          category_type: "technics",
          label: "Чехол для ноутбука",
          price: 11.95,
          img: "https://s5-goods.ozstatic.by/2000/198/953/10/10953198_0.jpg"
        },
      ]
    },
    {
      category: { id: 10, type: "tourism", label: "Туризм, отдых, спорт" },
      items: [
        {
          id: 1,
          category_type: "tourism",
          label: "Коврик для йоги",
          price: 25.90,
          img: "https://s1-goods.ozstatic.by/2000/420/739/10/10739420_0.jpg"
        },
        {
          id: 2,
          category_type: "tourism",
          label: "Эспандер ленточный",
          price: 2.05,
          img: "https://s1-goods.ozstatic.by/2000/701/795/10/10795701_0.jpg"
        },
        {
          id: 3,
          category_type: "tourism",
          label: "Коврик массажный",
          price: 1.20,
          img: "https://s5-goods.ozstatic.by/2000/949/830/10/10830949_0.jpg"
        },
        {
          id: 4,
          category_type: "tourism",
          label: "Стакан складной туристически",
          price: 11.95,
          img: "https://s1-goods.ozstatic.by/2000/971/350/10/10350971_0.jpg"
        },
        {
          id: 5,
          category_type: "tourism",
          label: "Утяжелители для ног 2 кг",
          price: 25.90,
          img: "https://s1-goods.ozstatic.by/2000/41/631/10/10631041_0.jpg"
        },
        {
          id: 6,
          category_type: "tourism",
          label: "Ролик массажный",
          price: 2.05,
          img: "https://s1-goods.ozstatic.by/2000/71/795/10/10795071_0.jpg"
        },
        {
          id: 7,
          category_type: "tourism",
          label: "Бутылка для воды",
          price: 1.20,
          img: "https://s1-frame.ozstatic.by/1000/71/748/10/10748071_3.jpg"
        },
        {
          id: 8,
          category_type: "tourism",
          label: "Подушка под шею",
          price: 11.95,
          img: "https://s2-goods.ozstatic.by/2000/192/688/10/10688192_0.jpg"
        },
        {
          id: 9,
          category_type: "tourism",
          label: "Скакалка со счётчиком",
          price: 25.90,
          img: "https://s2-goods.ozstatic.by/2000/893/795/10/10795893_0.jpg"
        },
        {
          id: 10,
          category_type: "tourism",
          label: "Термос",
          price: 2.05,
          img: "https://s1-goods.ozstatic.by/2000/851/963/10/10963851_0.jpg"
        },
        {
          id: 11,
          category_type: "tourism",
          label: "Подушка надувная",
          price: 1.20,
          img: "https://s1-frame.ozstatic.by/1000/581/10/101/101010581_0.jpg"
        },
        {
          id: 12,
          category_type: "tourism",
          label: "Компас",
          price: 11.95,
          img: "https://s3-goods.ozstatic.by/2000/95/672/10/10672095_0.jpg"
        },
      ]
    },
    {
      category: { id: 11, type: "health", label: "Здоровье, медтехника" },
      items: [
        {
          id: 1,
          category_type: "health",
          label: "Маска лицевая одноразовая",
          price: 25.90,
          img: "https://s5-goods.ozstatic.by/2000/419/58/101/101058419_0.jpg"
        },
        {
          id: 2,
          category_type: "health",
          label: "Раствор для линз",
          price: 2.05,
          img: "https://s4-goods.ozstatic.by/2000/707/762/10/10762707_0.jpg"
        },
        {
          id: 3,
          category_type: "health",
          label: "Пульсоксиметр",
          price: 1.20,
          img: "https://s3-goods.ozstatic.by/2000/174/949/10/10949174_0.jpg"
        },
        {
          id: 4,
          category_type: "health",
          label: "Глюкометр",
          price: 11.95,
          img: "https://s4-goods.ozstatic.by/2000/986/725/10/10725986_0.jpg"
        },
        {
          id: 5,
          category_type: "health",
          label: "Ингалятор",
          price: 25.90,
          img: "https://s4-goods.ozstatic.by/2000/286/830/10/10830286_0.jpg"
        },
        {
          id: 6,
          category_type: "health",
          label: "Ролик массажный",
          price: 2.05,
          img: "https://s1-goods.ozstatic.by/2000/71/795/10/10795071_0.jpg"
        },
        {
          id: 7,
          category_type: "health",
          label: "Контактные линзы",
          price: 1.20,
          img: "https://s1-goods.ozstatic.by/2000/60/607/10/10607060_0.jpg"
        },
        {
          id: 8,
          category_type: "health",
          label: "Стетоскоп",
          price: 11.95,
          img: "https://s2-goods.ozstatic.by/2000/82/15/101/101015082_0.jpg"
        },
        {
          id: 9,
          category_type: "health",
          label: "Термометр",
          price: 25.90,
          img: "https://s1-frame.ozstatic.by/1000/991/10/101/101010991_0.jpg"
        },
        {
          id: 10,
          category_type: "health",
          label: "Таблетница",
          price: 2.05,
          img: "https://s4-frame.ozstatic.by/1000/206/48/101/101048206_0.jpg"
        },
        {
          id: 11,
          category_type: "health",
          label: "Пластырь",
          price: 1.20,
          img: "https://s1-goods.ozstatic.by/2000/811/990/10/10990811_0.jpg"
        },
        {
          id: 12,
          category_type: "health",
          label: "Электрическая зубная щетка",
          price: 11.95,
          img: "https://s1-goods.ozstatic.by/2000/161/10/101/101010161_0.jpg"
        },
      ]
    }
  ]
}

const COUNTER_CART = {
  value: 0
}


const reducerCart = (state = COUNTER_CART) => {
  return state
}

const rootReducer = combineReducers({
  category: reducerCategory, 
  cart: reducerCart})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>