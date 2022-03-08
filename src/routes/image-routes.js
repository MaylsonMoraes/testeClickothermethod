const express = require('express');
const router = express.Router();
const Image = require('../models/image');


//list all decrescent
router.get('/', async (req, res) => {
    try {
        const images = await Image.find({},{title: 1, _id: 0}).sort({date: -1});
        res.json({ error: false, images});
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

//um registro aleatorio
router.get('/random', async (req, res) => {
    try {
     const aleatorio = await Image.aggregate(
            [ { $sample: { size: 1 } } ]
         )
        res.json({ error: false, aleatorio });
    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});


//criar registro
router.post('/', async (req, res) => {
    try {
        const image = req.body;
        const response = await new Image(image).save();
        res.json({ error: false, image: response });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
    
    
});

//atualizar somente o registro com o id
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const novo_image = req.body;
        const image = await Image.findByIdAndUpdate(id, novo_image);
        res.json({ error: false, image });
    } catch (err) {
        res.json({ error:true, message: err.message });
    }
});

//Deletar somente o registro com id
router.delete('/:id', async (req, res) => {

        try {
            const id = req.params.id;
            const image = await Image.findByIdAndDelete( id );

            res.status(200).json({message: 'Arquivo removido com sucesso!'});

        } catch (err) {
            res.status(422).json({message: 'O arquivo não foi encontrado!'});
        }
});


module.exports = router;