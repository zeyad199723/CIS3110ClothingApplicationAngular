export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;

}

export const products: Product[] = [
  {
    id: 1,
    name: "Micheal Kors Paisley Eyelet Smocked Dress",
    price: 120.00,
    description: "Is a smocked bodice and paisley embroidery, it features a fully-lined skirt that falls to a ruffled hem. Complete the look with neutral-hued sandals and a tote.",
    image: 'assets/Images/ID1.jpg'

  },

  {
    id: 2,
    name: "Calvin Klein Relaxed Button-Down Shirt",
    price: 80.00,
    description: "Effortlessly chic, this button-down shirt is cut in a relaxed, slightly oversized fit. Designed with long sleeves and a point collar. Detailed with barrel cuffs at the sleeve openings.",
    image: 'assets/Images/ID2.jpg'

  },
  {
    id: 3,
    name: "Tommy Hilfiger RUGBY STRIPE T-SHIRT",
    price: 40.00,
    description: "Tommy Hilfiger men's T-shirt. Made from soft, comfortable cotton, our tee is cut in an easy fit. ",
    image: 'assets/Images/ID3.jpg'

  },
  {
    id: 4,
    name: "Men’s Roxborough Luxe Hooded Jacket",
    price: 175.00,
    description: "A combination of goose down and synthetic Heatseeker™ Eco insulation make the Men’s Roxborough Luxe Hooded Jacket a versatile and functional cold-weather layer. The water-repellent finish helps you stay dry when the clouds roll in.",
    image: 'assets/Images/ID4.jpg'

  },
  {
    id: 5,
    name: "541™ ATHLETIC TAPER FIT Jeans",
    price: 110.00,
    description: "A contemporary look with a relaxed feel and a slightly tailored finish.",
    image: 'assets/Images/ID5.jpg'

  },
  
  
];