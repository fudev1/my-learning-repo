const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Modèle pour la collection de citations
const Citation = mongoose.model('Citation', {
    quote: String
});

// Route pour /citations
router.get('/', async (req, res) => {
    try {
        const citations = await Citation.find();
        res.render('citations', { citations: citations });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
