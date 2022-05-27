const Tech = require('../models/Tech');
var techDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateTech: updateTech
}

function findAll() {
    return Tech.findAll();
}

function findById(id) {
    return Tech.findByPk(id);
}

function deleteById(id) {
    return Tech.destroy({ where: { id: id } });
}

function create(tech) {
    var newTech = new Tech(tech);
    return newTech.save();
}

function updateTech(tech, id) {
    var updateTech = {
        title: tech.title,
        technologies: tech.technologies,
        description: tech.description,
        budget: tech.budget,
        contact_email: tech.contact_email
    };
    return Tech.update(updateTech, { where: { id: id } });
}
module.exports = techDao;