const { response } = require('express');
const express = require('express');
const router = express.Router();
const ImageLog = require('../models/imageLog');

router.get('/:id', async (req, res) => {
    
    try {
        
        const imageLog = await ImageLog().save();
           res.json({ error: false, imageLog });
       } catch (err) {
           res.json({ error: true, message: err.message});
       }    
});

router.get('/:id', async (req, res) =>{
    const id = req.params.id

    try {

        const imageLog = await ImageLog.findOne({ _id: id })

        if(!imageLog) {
            res.status(422).json({message: 'Imagem não encontrada!'})
            return
        }

      res.status(200).json(imageLog)  
    } catch (error) {
        res.status(500).json({ error: error })
    }
})


module.exports = router;