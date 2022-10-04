const mongoose = require('mongoose');
const db = require('../database/database');
const Beer = require('../../api/beers/beers.model');

const initialBeers = [
    {
        name: "Paulaner",
        image: "https://res.cloudinary.com/louregbri/image/upload/v1664541159/Beers/paulaner_lqcc3h.png",
        type: "Weissbier",
        description: "De apariencia turbia, se presenta en el vaso con un brillante color dorado aterciopelado, bajo una robusta corona de espuma que verdaderamente merece este nombre. Ya desde el comienzo de su preparación, de este clásico de la cerveza blanca de Múnich emana un ligero aroma a plátano. El conocedor aprecia toques de mango y de piña y ensalza el hermoso equilibrio de dulzor y amargor. Los amantes de la cerveza disfrutan del fino aroma de levadura y de su fabulosa suavidad burbujeante. Es la típica cerveza para tomar al aire libre, capaz de unir a personas de todo el mundo.",
        country: "Alemania",
        alcohol: 5.5,
        price: 3,
        rating: []
    },
    {
        name: "Maestra Dunkel",
        image: "https://res.cloudinary.com/louregbri/image/upload/v1664541593/Beers/maestra-dunkel_bbiglz.webp",
        type: "Lager Oscura",
        description: "De color negro café, brillante y con una espuma densa muy consistente. Cerveza de carácter maltoso con predominio de las notas tostadas, a café y chocolate, tiene un ligero toque ahumado y complementa con notas mas complejas a frutas pasas y tabaco. En boca ofrece un cuerpo moderado y sedoso, con un amargor suave ligeramente persistente.",
        country: "España",
        alcohol: 6.1,
        price:'',
        rating: []
    },
    {
        name: "El Águila Sin Filtrar",
        image: "https://res.cloudinary.com/louregbri/image/upload/v1664542572/Beers/aguila-sin-filtrar_c1mklg.png",
        type: "Lager",
        description: "Águila Sin Filtrar es una cerveza con un sabor característico, que combina la intensidad de la malta caramelizada con la frescura de una mezcla de lúpulos. La diferencia es que eliminan el proceso de filtración, manteniendo así toda la levadura dentro de la cerveza. El resultado es que puedes disfrutar de la cerveza como recién salida del tanque de fermentación. El resultado de este proceso de elaboración es una lager especial de 5,5% de alcohol en volumen, naturalmente turbia y con cuerpo, potenciado por la ausencia de filtración de la cerveza y por la utilización de la técnica de lupulado denominada 'late hopping', que consiste en añadir lúpulo al final del proceso de cocción. Un método que intensifica el aroma del lúpulo Lemondrop utilizado en la receta y que le aporta frescor a la cerveza. De esta forma, podemos apreciar toda la suavidad en boca de esta gran cerveza, que gracias a su proceso de elaboración y a su ritual a la hora de servirla, tiene un gran cuerpo y frescor.",
        ingredients: "Agua, malta de cebada, maíz y lúpulo",
        country: "España",
        alcohol: 5.5,
        price: 1.5,
        rating: []
    },
    {
        name: "La Chouffe Blonde",
        image: "https://res.cloudinary.com/louregbri/image/upload/v1664543298/Beers/la-chouffe_sql8u8.png",
        type: "Belgian Strong Ale",
        description: "La Chouffe es una cerveza belga de estilo Strong Ale, sin filtrar, de alta fermentación y con segunda fermentación en botella. Esta cerveza rubia fuerte es muy potente, y posee un sabor afrutado, especiado y ligeramente lupulizado. Se elabora con agua, levadura, malta de cebada pálida, lúpulo de las variedades Saaz-Saaz y Styrian Golding, y cilantro. Su segunda fermentación en botella se realiza agregando levadura y azúcar justo antes del embotellado.",
        ingredients: "Agua, malta de cebada, fructosa, levadura, lúpulo, cilantro",
        country: "Bélgica",
        alcohol: 8,
        price: 3,
        rating: []
    },
];

mongoose
    .connect(db.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        const allBeers = await Beer.find();

        if(allBeers.length) {
            console.log('Removing beers collection...');
            await Beer.collection.drop();
        } else {
            console.log("There's no beer in database... adding beers")
        }
    })
    .catch(error => console.log('Error removing collection from database', error))
    .then(async () => {
        await Beer.insertMany(initialBeers);
        console.log('Beers added successfully...');
    })
    .catch(error => console.log('Error adding beers to database', error))
    .finally(() => mongoose.disconnect());