const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database Connected...');
    } catch (err) {
        console.error('Error connecting to database:', err);
        throw err;
    }
}

module.exports = {
    connectToDatabase,
};