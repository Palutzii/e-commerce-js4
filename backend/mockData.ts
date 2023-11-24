export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    stock: number;
    imageUrl: string;
}
export const products: Product[] = [
    {
        id: '1',
        name: 'Christmas Lights',
        price: 10.00,
        description: 'Bright and colorful lights to decorate your home.',
        stock: 100,
        imageUrl: "/christmas-lights.png"
    },
    {
        id: '2',
        name: ' LED String Lights',
        price: 19.99,
        description: 'Brighten up your holiday decor with these colorful LED string lights. Perfect for both indoor and outdoor use, they add a festive glow to any space.',
        stock: 100,
        imageUrl: "/led-string-lights.png"
    },
    {
        id: '3',
        name: 'Handcrafted Christmas Ornaments',
        price: 9.99,
        description: 'Our collection of handcrafted Christmas ornaments includes a variety of unique designs to adorn your tree and create cherished holiday memories.',
        stock: 300,
        imageUrl: "/handcrafted-christmas-ornaments.png"
    },
    {
        id: '4',
        name: 'Snowy Pre-Lit Christmas Tree',
        price: 149.99,
        description: 'Bring a winter wonderland indoors with our pre-lit artificial Christmas tree featuring snow-covered branches and built-in LED lights.',
        stock: 50,
        imageUrl: "/snowy-xmas-tree.png"
    },
    {
        id: '5',
        name: 'Inflatable Outdoor Decorations',
        price: 79.99,
        description: 'Make a statement in your yard with inflatable holiday decorations, including Santa Claus, snowmen, and more, designed for outdoor use.',
        stock: 75,
        imageUrl: "/inflatables.png"
    },
    {
        id: '6',
        name: 'Festive Wreaths and Garlands',
        price: 29.99,
        description: 'Elevate your home decor with our festive wreaths and garlands, crafted from high-quality materials and adorned with holiday accents.',
        stock: 200,
        imageUrl: "/festive-wreaths.png"
    },
    {
        id: '7',
        name: 'Holiday Scented Candles',
        price: 12.99,
        description: 'Fill your home with the delightful scents of the season with our holiday-themed scented candles, available in various fragrances.',
        stock: 150,
        imageUrl: "/candles.png"
    },
    {
        id: '8',
        name: 'Holiday Decorative Pillows',
        price: 14.99,
        description: 'Add a cozy touch to your living space with our decorative holiday pillows, featuring cheerful patterns and colors.',
        stock: 100,
        imageUrl: "/pillows.png"
    },
    {
        id: '9',
        name: 'Christmas Tableware Set',
        price: 39.99,
        description: 'Set a festive table with our holiday-themed tableware sets, featuring plates, cups, and tablecloths adorned with seasonal designs.',
        stock: 100,
        imageUrl: "/tableware.png"
    },
    {
        id: '10',
        name: 'DIY Christmas Decoration Kit',
        price: 24.99,
        description: 'Get creative with our DIY decoration kit, including craft materials and step-by-step instructions to make your personalized holiday decor.',
        stock: 80,
        imageUrl: "/dyi.png"
    },
    {
        id: "11",
        name: "Sparkling Star Topper",
        price: 24.99,
        description: "A dazzling star-shaped tree topper adorned with reflective crystals and LED lighting to create a magical glow atop your Christmas tree.",
        stock: 150,
        imageUrl: "/xmas-star.png"
    },
    {
        id: "12",
        name: "Festive Countdown Calendar",
        price: 18.50,
        description: "A charming advent calendar featuring tiny pockets for each day, perfect for hiding small treats and notes as you count down to Christmas.",
        stock: 200,
        imageUrl: "/xmas-calendar.png"
    },
    {
        id: "13",
        name: "Glittering Snow Globe",
        price: 35.00,
        description: "A beautiful, handcrafted snow globe with a winter village scene, swirling with glitter when shaken, encapsulating the spirit of the holidays.",
        stock: 120,
        imageUrl: "/snow-globe.png"
    },
    {
        id: "14",
        name: "New Year's Eve Party Pack",
        price: 29.99,
        description: "A comprehensive party pack including hats, noisemakers, and confetti poppers to ring in the New Year with a bang.",
        stock: 250,
        imageUrl: "/eve-pack.png"
    },
    {
        id: "15",
        name: "Winter Wonderland Backdrop",
        price: 15.99,
        description: "A large, festive backdrop depicting a snowy winter scene, perfect for holiday photos and decoration.",
        stock: 100,
        imageUrl: "/xmas-backdrop.png"
    },
    {
        id: "16",
        name: "Gourmet Hot Chocolate Kit",
        price: 22.50,
        description: "A deluxe hot chocolate kit with premium cocoa, marshmallows, and peppermint sticks for cozy holiday evenings.",
        stock: 180,
        imageUrl: "/choco.png"
    },
    {
        id: "17",
        name: "Festive Door Mat",
        price: 19.99,
        description: "A durable and cheerful door mat with a holiday motif to welcome guests during the festive season.",
        stock: 160,
        imageUrl: "/door-mat.png"
    },
    {
        id: "18",
        name: "Holiday Spice Potpourri",
        price: 13.50,
        description: "A fragrant blend of holiday spices and dried fruits to fill your home with the scents of the season.",
        stock: 200,
        imageUrl: "/spice.png"
    },
    {
        id: "19",
        name: "Velvet Stocking Collection",
        price: 28.00,
        description: "Luxurious velvet stockings available in various festive colors, perfect for hanging by the fireplace.",
        stock: 300,
        imageUrl: "/stocking.png"
    },
    {
        id: "20",
        name: "Jolly Santa Figurine",
        price: 32.99,
        description: "A charming and detailed figurine of Santa Claus, bringing a classic touch to your holiday decor.",
        stock: 90,
        imageUrl: "/santa.png"
    },
    {
        id: "21",
        name: "Crystal Ice Cycle Ornaments",
        price: 14.99,
        description: "Elegant, crystal-like icicle ornaments that add a touch of winter wonder to any tree.",
        stock: 250,
        imageUrl: "/crystal.png"
    },
    {
        id: "22",
        name: "Midnight Fireworks Kit",
        price: 49.99,
        description: "A safe and dazzling fireworks kit to light up the night sky on New Year's Eve.",
        stock: 75,
        imageUrl: "/fire.png"
    },
    {
        id: "23",
        name: "Holiday Plush Blanket",
        price: 29.99,
        description: "A soft, warm blanket with a festive design, perfect for snuggling up during cold winter nights.",
        stock: 200,
        imageUrl: "/blanket.png"
    },
    {
        id: "24",
        name: "Enchanted Forest Puzzle",
        price: 16.99,
        description: "A 1000-piece puzzle depicting a whimsical winter forest scene, a fun activity for the whole family during the holidays.",
        stock: 150,
        imageUrl: "/puzzle.png"
    }

];