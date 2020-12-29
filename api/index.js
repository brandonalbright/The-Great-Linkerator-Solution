const apiRouter = require('express').Router();

const {
    client,
    sync,
    getAllLinks,
    createLink
} = require('../data_layer/index')

apiRouter.get('/api/links', async (req, res, next) => {
    try {
        const allLinks = await getAllLinks();

        res.send({
            links: allLinks
        });
    } catch(error) {
        next(error)
    }
})

apiRouter.post('/api/links', async (req, res, next) => {
    try {
        const newLink = await createLink(req.body);
       
        res.send(
            newLink   
        );
        
    } catch(error){
        next(error)
    }
}) 

// need to write closeLink in datatbase

// apiRouter.delete('/api/links/:linkId', async (req, res, next) => {

//     try {
//         const closedLink = await closeLink(req.reportId);
        
//         res.send(closedLink);
        
//     } catch(error){
//         next(error)
//     }
    
// }) 
