const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    githubId: { type: String, unique: true },
    username: { type: String, unique: true, sparse: true }, // sparse permite valores nulos/undefined
    email: { type: String, unique: true, sparse: true },
    displayName: { type: String },
    createdAt: { type: Date, default: Date.now },
    // Puedes agregar más campos si lo necesitas
});

module.exports = mongoose.model('User', userSchema);
