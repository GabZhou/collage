const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogoSchema = new Schema({
    logoName: {
        type: String,
        defualt: 'none',
        required: true
    },
    logoData: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('logo', LogoSchema);