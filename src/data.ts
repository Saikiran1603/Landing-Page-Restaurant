const photos: Record<string, string> = {
  spaghetti: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&auto=format&fit=crop',
  gnocchi: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&auto=format&fit=crop',
  ravioli: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop',
  penne: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop',
  pasta: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop',
  risotto: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-4.0.3&auto=format&fit=crop',
  pizza: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop',
  salad: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop',
  ramen: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-4.0.3&auto=format&fit=crop',
  noodles: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop',
  pancake: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&auto=format&fit=crop',
  blueberry: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop',
  basil: 'https://images.unsplash.com/photo-1617093920598-7424a7da6136?ixlib=rb-4.0.3&auto=format&fit=crop',
  dessert: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop',
  tiramisu: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop',
  cake: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop',
  tart: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixlib=rb-4.0.3&auto=format&fit=crop',
  lemon: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop',
  drink: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop',
  mojito: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop',
  smoothie: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop',
  chef: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop',
  cook: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop',
  man: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop',
  portrait: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop',
  beard: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop',
  face: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&auto=format&fit=crop',
  table: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop',
  dishes: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop',
  restaurant: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop',
  exterior: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop',
  kitchen: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop',
  glass: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop',
  menu: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop',
  apron: 'https://images.unsplash.com/photo-1577219491135-cef7d6d7c2c7?ixlib=rb-4.0.3&auto=format&fit=crop',
}

export const img = (kw: string, w = 500, h = 500) => {
  const normalized = kw.toLowerCase()
  const match = Object.entries(photos)
    .sort(([a], [b]) => b.length - a.length)
    .find(([key]) => normalized.includes(key))
  const source = match ? match[1] : photos.restaurant
  const joiner = source.includes('?') ? '&' : '?'
  return `${source}${joiner}auto=format&fit=crop&w=${w}&h=${h}&q=80`
}

export type Dish = { id: number; name: string; price: number; cat: string; img: string }
export const categories = ['All category', 'Dinner', 'Lunch', 'Dessert', 'Drink']
export const dishes: Dish[] = [
  { id: 1, name: 'Spaghetti', price: 12.05, cat: 'Dinner', img: img('spaghetti,plate') },
  { id: 2, name: 'Gnocchi', price: 12.05, cat: 'Dinner', img: img('gnocchi') },
  { id: 3, name: 'Ravioli', price: 12.05, cat: 'Lunch', img: img('ravioli') },
  { id: 4, name: 'Penne Alla Vodak', price: 12.05, cat: 'Dinner', img: img('penne,pasta') },
  { id: 5, name: 'Risotto', price: 12.05, cat: 'Lunch', img: img('risotto') },
  { id: 6, name: 'Pizza Signature', price: 13.5, cat: 'Dinner', img: img('pizza') },
  { id: 7, name: 'Tiramisu', price: 8.5, cat: 'Dessert', img: img('tiramisu') },
  { id: 8, name: 'Lemon Tart', price: 7.9, cat: 'Dessert', img: img('lemon,tart') },
  { id: 9, name: 'Mojito', price: 6.5, cat: 'Drink', img: img('drink,mojito') },
  { id: 10, name: 'Berry Smoothie', price: 6.8, cat: 'Drink', img: img('drink,smoothie') },
]
export const chefs = [
  { name: 'Betran Komar', role: 'Head chef', bg: 'bg-gray-200 dark:bg-gray-700', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600&q=80' },
  { name: 'Ferry Sauwi', role: 'Chef', bg: 'bg-peach dark:bg-orange/30', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600&q=80' },
  { name: 'Iswan Dracho', role: 'Chef', bg: 'bg-rose-100 dark:bg-rose-900/40', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600&q=80' },
]
export const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam'
