const mongoose = require('mongoose');
const db = require('../database/database');
const Beer = require('../../api/beers/beers.model');

const initialBeers = [
    {
        name: "Paulaner",
        image: "https://res.cloudinary.com/louregbri/image/upload/v1664541159/Beers/paulaner_lqcc3h.png",
        type: "Weissbier",
        description: "De apariencia turbia, se presenta en el vaso con un brillante color dorado aterciopelado, bajo una robusta corona de espuma que verdaderamente merece este nombre. Ya desde el comienzo de su preparación, de este clásico de la cerveza blanca de Múnich emana un ligero aroma a plátano. El conocedor aprecia toques de mango y de piña y ensalza el hermoso equilibrio de dulzor y amargor. Los amantes de la cerveza disfrutan del fino aroma de levadura y de su fabulosa suavidad burbujeante. Es la típica cerveza para tomar al aire libre, capaz de unir a personas de todo el mundo.",
        ingredients: "Agua, malta de trigo, malta de cebada, levadura, lúpulo",
        country: "Alemania",
        alcohol: 5.5,
        rating: []
    },
    {
        name: "Maestra Dunkel",
        image: "https://res.cloudinary.com/louregbri/image/upload/v1664541593/Beers/maestra-dunkel_bbiglz.webp",
        type: "Lager Oscura",
        description: "De color negro café, brillante y con una espuma densa muy consistente. Cerveza de carácter maltoso con predominio de las notas tostadas, a café y chocolate, tiene un ligero toque ahumado y complementa con notas mas complejas a frutas pasas y tabaco. En boca ofrece un cuerpo moderado y sedoso, con un amargor suave ligeramente persistente.",
        ingredients: "Agua, malta de cebada, lúpulo",
        country: "España",
        alcohol: 6.1,
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