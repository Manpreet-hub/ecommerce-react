import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Latest Western Dresses in Fashion Dresse for Women",
    img: "https://res.cloudinary.com/dffedqurw/image/upload/v1647943944/photo-1521820298019-160c4bc0dc91_w3zzfy.jpg",
    price: 1999,
    category: "Women",
    inStock: true,
    fastDelivery: true,
    rating: 4,
    originalPrice: 4000,
  },
  {
    _id: uuid(),
    title: " Cotton Printed suit with Palazzo & Dupatta Set",
    img: "https://res.cloudinary.com/dffedqurw/image/upload/v1647941927/suit_quhtcn.jpg",
    price: 2999,
    category: "Women",
    inStock: true,
    fastDelivery: true,
    rating: 5,
    originalPrice: 5000,
  },
  {
    _id: uuid(),
    title: "Blue Shirt",
    img: "https://res.cloudinary.com/dffedqurw/image/upload/v1647943857/photo-1596755094514-f87e34085b2c_f3nm7y.jpg",
    price: 1999,
    category: "Men",
    inStock: true,
    fastDelivery: true,
    rating: 4,
    originalPrice: 3000,
  },
  {
    _id: uuid(),
    title: "Men's Slim Fit Full Sleeves Printed Casual Shirt",
    img: "https://m.media-amazon.com/images/I/615ElM9ls6L._AC_UL480_FMwebp_QL65_.jpg",
    price: 1999,
    category: "Men",
    inStock: true,
    fastDelivery: true,
    rating: 3,
    originalPrice: 3000,
  },
  {
    _id: uuid(),
    title: "Men's Formal Shirt",
    img: "https://m.media-amazon.com/images/I/61kgtdMZbTL._AC_UL480_FMwebp_QL65_.jpg",
    price: 1199,
    category: "Men",
    inStock: true,
    fastDelivery: true,
    rating: 5,
    originalPrice: 4000,
  },
  {
    _id: uuid(),
    title: "Men's Slim Fit Full Sleeves Printed Casual Shirt",
    img: "https://m.media-amazon.com/images/I/81uNNEU2dmL._AC_UL480_FMwebp_QL65_.jpg",
    price: 1299,
    category: "Men",
    inStock: true,
    fastDelivery: true,
    rating: 5,
    originalPrice: 4000,
  },
  {
    _id: uuid(),
    title: "AWG Men's Cotton Regular Fit Solid Polo Neck T-Shirt",
    img: "https://m.media-amazon.com/images/I/61WTEg8WWbL._AC_UL480_FMwebp_QL65_.jpg",
    price: 1299,
    category: "Men",
    inStock: true,
    fastDelivery: true,
    rating: 3,
    originalPrice: 1600,
  },
  {
    _id: uuid(),
    title: "kids collection",
    img: "https://res.cloudinary.com/dffedqurw/image/upload/v1647941961/kids_kymhzw.jpg",
    price: 1499,
    category: "Kids",
    inStock: true,
    fastDelivery: true,
    rating: 4,
    originalPrice: 2000,
  },
  {
    _id: uuid(),
    title: "Jockey Men's Regular Fit Round Neck Half Sleeved T-Shirt",
    img: "https://res.cloudinary.com/dffedqurw/image/upload/v1647943884/photo-1581655353564-df123a1eb820_q8fk7u.jpg",
    price: 1099,
    category: "Men",
    inStock: true,
    fastDelivery: true,
    rating: 2,
    originalPrice: 1200,
  },

];
