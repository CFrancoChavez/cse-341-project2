const Client = require('../models/client');

const getAllClients = async (req, res) => {
    try {
        console.log('Fetching clients...');
        const clients = await Client.find();
        console.log('Clients found:', clients);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(clients);
    } catch (err) {
        console.error('Error fetching clients:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getSingleClient = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(client);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createClient = async (req, res) => {
    try {
        const client = new Client(req.body);
        await client.save();
        res.status(201).json(client._id);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Invalid data provided.' });
    }
};

const updateClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Invalid data provided.' });
    }
};

const deleteClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndDelete(req.params.id);
        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }
        res.status(200).send();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllClients,
    getSingleClient,
    createClient,
    updateClient,
    deleteClient
};