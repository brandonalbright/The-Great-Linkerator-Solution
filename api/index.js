const apiRouter = require('express').Router();

const {
    client,
    sync,
    getAllLinks
} = require('../data_layer/index')

apiRouter.get('/api/links', async (req, res, next) => {
    try {
        const allLinks = await getAllLinks;

        res.send({
            links: allLinks
        });
    } catch(error) {
        next(error)
    }
})

