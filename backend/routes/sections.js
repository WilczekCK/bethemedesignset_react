
module.exports = function(app, isAuthorizedToRoute){
    const sectionController = require('../controllers/section.controller');

    app.route('/sections')
        .get(async (req, res) => {
            const results = await sectionController
                .setWhereObj(req.query.where)
                .records;
            
            res.send( results );
        })
        .post(isAuthorizedToRoute, (req,res) => {
            res.send('POST route');
        })
        .delete(isAuthorizedToRoute, (req,res) => {
            res.send('DELETE route');
        })
        .patch(isAuthorizedToRoute, (req,res) => {
            res.send('PATCH route');
        })
        .put(isAuthorizedToRoute, (req,res) => {
            res.send('PUT route');
        })
}