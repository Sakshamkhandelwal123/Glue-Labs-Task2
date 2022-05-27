const techDao = require('../dao/tech.dao');
var techController = {
    addTech: addTech,
    findTechs: findTechs,
    findTechById: findTechById,
    updateTech: updateTech,
    deleteById: deleteById
}

function addTech(req, res) {
    let tech = req.body;
    techDao.create(tech).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTechById(req, res) {
    techDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    techDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Tech deleted successfully",
                tech: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateTech(req, res) {
    techDao.updateTech(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Tech updated successfully",
                tech: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findTechs(req, res) {
    techDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = techController;