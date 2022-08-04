const mongoose = require('mongoose');

const objectSchema = {
    company_name: {
        type: String,
        required: true,

    },
    CIF: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    url_web: {
        type: String,
        required: true
    }
};
// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;

/*
// Insertar un producto
const p = new Product({
    id: 2,
    title: "Tortilla",
    price: 1.80,
    description: "Tortilla jugosa del teatro",
    image:"https://www.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4-768x530.png"
});

p.save().then((data)=>console.log(data));
*/