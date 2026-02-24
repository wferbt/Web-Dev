import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 15 128GB',
    description: 'Флагманский смартфон Apple с OLED-дисплеем и мощным процессором A16.',
    price: 389990,
    rating: 4.9,
    image: 'assets/products/iphone15.jpg',
    images: [
      'assets/products/iphone15.jpg',
      'assets/products/iphone152.jpg',
      'assets/products/iphone153.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
  },
  {
    id: 2,
    name: 'Samsung Galaxy A55 5G 256GB',
    description: 'Стильный смартфон Samsung с поддержкой 5G и мощной батареей.',
    price: 249990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h52/85501100490782.jpg',
    images: [
      'assets/products/samsung1.jpeg',
      'assets/products/samsung2.jpeg',
      'assets/products/samsung3.jpeg',
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/'
  },
  {
    id: 3,
    name: 'Xiaomi Redmi Note 12 Pro',
    description: 'Смартфон с AMOLED-экраном и камерой 108 Мп.',
    price: 159990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h8b/h36/83115821469726.jpg',
    images: [
      'assets/products/redmi1.jpg',
      'assets/products/redmi2.jpg',
      'assets/products/redmi3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-nfc-8-gb-256-gb-chernyi-109772767/?c=750000000'
  },
  {
    id: 4,
    name: 'JBL Tune 510BT',
    description: 'Bluetooth-наушники с фирменным басом JBL.',
    price: 13990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h8f/h74/63867858898974.jpg',
    images: [
      'assets/products/jbl1.jpg',
      'assets/products/jbl2.jpg',
      'assets/products/jbl3.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/'
  },
  {
    id: 5,
    name: 'Apple AirPods Pro 2',
    description: 'Наушники с активным шумоподавлением нового поколения.',
    price: 159990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h8c/64010561183774.jpg',
    images: [
      'assets/products/air1.jpg',
      'assets/products/air2.jpg',
      'assets/products/air3.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-patentovannyj-uchet-114087981/'
  },
  {
    id: 6,
    name: 'Xiaomi Power Bank 20000mAh',
    description: 'Внешний аккумулятор для быстрой зарядки.',
    price: 9990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb5/hf6/63778033938462.jpg',
    images: [
        'assets/products/redmipo1.jpg',
        'assets/products/redmipo2.jpg',
        'assets/products/redmipo3.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/vneshnii-akkumuljator-xiaomi-redmi-power-bank-20000-mach-18-vt-chernyi-100322086/'
  },
  {
    id: 7,
    name: 'Samsung Galaxy Tab A9',
    description: 'Планшет для развлечений и работы.',
    price: 169990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h09/85219856367646.jpg',
    images: [
      'assets/products/Samsung Galaxy Tab A91.jpeg',
      'assets/products/Samsung Galaxy Tab A92.jpeg',
      'assets/products/Samsung Galaxy Tab A93.jpeg'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-lte-8-7-djuim-4-gb-64-gb-seryi-113807107/?c=750000000'
  },
  {
    id: 8,
    name: 'Lenovo IdeaPad 3 15ITL6',
    description: 'Надёжный ноутбук для учёбы и работы.',
    price: 209990,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hcc/h58/84403983372318.jpg',
    images: [
      'assets/products/Lenovo IdeaPad 3 15ITL61.jpg',
      'assets/products/Lenovo IdeaPad 3 15ITL62.jpg'
      ,'assets/products/Lenovo IdeaPad 3 15ITL63.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-bez-os-15itl6-82h8005jrk-109201501/?c=750000000'
  },
  {
  id: 9,
  name: 'Realme GT Neo 5',
  description: 'Производительный смартфон с быстрой зарядкой и AMOLED-экраном.',
  price: 189990,
  rating: 4.6,
  image: 'assets/products/Realme GT Neo 51.jpg',
  images: [
    'assets/products/Realme GT Neo 51.jpg',
    'assets/products/Realme GT Neo 52.jpg',
    'assets/products/Realme GT Neo 53.jpg',
  ],
  link: 'https://kaspi.kz/shop/p/realme-gt-7t-12-gb-512-gb-chernyi-141022225/?c=750000000'
},
{
  id: 10,
  name: 'Huawei Nova 11',
  description: 'Стильный смартфон с отличной фронтальной камерой.',
  price: 219990,
  rating: 4.7,
  image: 'assets/products/Huawei Nova 111.jpg',
  images: [
    'assets/products/Huawei Nova 111.jpg',
    'assets/products/Huawei Nova 112.jpg',
    'assets/products/Huawei Nova 113.jpg',
  ],
  link: 'https://kaspi.kz/shop/p/huawei-nova-11-8-gb-256-gb-chernyi-111967978/?c=750000000'
},
{
  id: 11,
  name: 'Sony WH-1000XM5',
  description: 'Премиальные наушники с активным шумоподавлением.',
  price: 229990,
  rating: 4.9,
  image: 'assets/products/Sony WH-1000XM51.jpg',
  images: [
    'assets/products/Sony WH-1000XM51.jpg',
    'assets/products/Sony WH-1000XM52.jpg',
    'assets/products/Sony WH-1000XM53.jpg',
  ],
  link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000'
},
{
  id: 12,
  name: 'Apple Watch Series 9',
  description: 'Умные часы Apple с улучшенным дисплеем и функциями здоровья.',
  price: 249990,
  rating: 4.8,
  image: 'assets/products/Apple Watch Series 91.jpg',
  images: [
    'assets/products/Apple Watch Series 91.jpg',
    'assets/products/Apple Watch Series 92.jpg',
    'assets/products/Apple Watch Series 93.jpg',
  ],
  link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000'
},

 
];