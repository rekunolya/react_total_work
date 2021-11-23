import { createStore } from "redux";

const INITIAL_STATE = {
   categories: [
    {id: 1, type: "entertainment", label: "Развлечения, творчество"},
    {id: 2, type: "family", label: "Детям и мамам"},
    {id: 3, type: "souvenirs", label: "Сувениры"},
    {id: 4, type: "books", label: "Книги"},
    {id: 5, type: "cosmetics", label: "Косметика, парфюмерия"},
    {id: 6, type: "goods", label: "Продукты, деликатесы"},
    {id: 7, type: "house", label: "Дом, сад, зоотовары"},
    {id: 8, type: "technics", label: "Техника, электроника"},
    {id: 9, type: "study", label: "Канцтовары, учеба"},
    {id: 10, type: "tourism", label: "Туризм, отдых, спорт"},
    {id: 11, type: "health", label: "Здоровье, медтехника"},
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
          img: "https://source.unsplash.com/random"
        },
        {
          id: 2,
          category_type: "study",
          label: "Тетрадь полуобщая в клетку",
          price: 2.05,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 3,
          category_type: "study",
          label: "Ластик",
          price: 1.20,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 4,
          category_type: "study",
          label: "Календарь-планер настенный",
          price: 11.95,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 5,
          category_type: "study",
          label: "Ежедневник недатированный",
          price: 25.90,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 6,
          category_type: "study",
          label: "Тетрадь полуобщая в клетку",
          price: 2.05,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 7,
          category_type: "study",
          label: "Ластик",
          price: 1.20,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 8,
          category_type: "study",
          label: "Календарь-планер настенный",
          price: 11.95,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 9,
          category_type: "study",
          label: "Ежедневник недатированный",
          price: 25.90,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 10,
          category_type: "study",
          label: "Тетрадь полуобщая в клетку",
          price: 2.05,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 11,
          category_type: "study",
          label: "Ластик",
          price: 1.20,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 12,
          category_type: "study",
          label: "Календарь-планер настенный",
          price: 11.95,
          img: "https://source.unsplash.com/random"
        },
      ]
    },
    {
      category: { id: 1, type: "family", label: "Детям и мамам" },
      items: [
        {
          id: 1,
          category_type: "study",
          label: "Ежедневник недатированный",
          price: 25.90,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 2,
          category_type: "study",
          label: "Тетрадь полуобщая в клетку",
          price: 2.05,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 3,
          category_type: "study",
          label: "Ластик",
          price: 1.20,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 4,
          category_type: "study",
          label: "Календарь-планер настенный",
          price: 11.95,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 5,
          category_type: "study",
          label: "Ежедневник недатированный",
          price: 25.90,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 6,
          category_type: "study",
          label: "Тетрадь полуобщая в клетку",
          price: 2.05,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 7,
          category_type: "study",
          label: "Ластик",
          price: 1.20,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 8,
          category_type: "study",
          label: "Календарь-планер настенный",
          price: 11.95,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 9,
          category_type: "study",
          label: "Ежедневник недатированный",
          price: 25.90,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 10,
          category_type: "study",
          label: "Тетрадь полуобщая в клетку",
          price: 2.05,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 11,
          category_type: "study",
          label: "Ластик",
          price: 1.20,
          img: "https://source.unsplash.com/random"
        },
        {
          id: 12,
          category_type: "study",
          label: "Календарь-планер настенный",
          price: 11.95,
          img: "https://source.unsplash.com/random"
        },
      ]
    }
  ]
}

const reducer = (state = INITIAL_STATE) => {
    return state
}

export const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>