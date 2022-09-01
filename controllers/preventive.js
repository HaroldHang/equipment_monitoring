const Preventive = require('../models/preventive.js');

//Create new Product
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Body content can not be empty"
        });
    }

    // Create a Product
    const preventive = new Preventive(req.body);
    
    preventive.save()
    .then(data => {
        res.send({
            success : true,
            data : data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the preventive."
        });
    });
};

// Retrieve all products from the database.

exports.findAll = (req, res) => {
    Preventive.find().sort({'createdAt' : -1})
    .then(Preventive => {
        res.send(Preventive);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving Preventive."
        });
    });
};

// Find a single product with a productId


exports.findOne = (req, res) => {
    Preventive.findById(req.params.preventId)
    .then(preventive => {
        if(!preventive) {
            return res.status(404).send({
                message: "preventive not found with id " + req.params.preventId
            });            
        }
        res.send(preventive);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.preventId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving product with id " + req.params.preventId
        });
    });
};

// Update a product

exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }

    // Find and update product with the request body
    Preventive.findByIdAndUpdate(req.params.preventId, req.body, {new: true})
    .then(preventive => {
        if(!preventive) {
            return res.status(404).send({
                message: "preventive not found with id " + req.params.preventId
            });
        }
        res.send({
            success : true,
            data : preventive
        });
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "preventive not found with id " + req.params.preventId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.preventId
        });
    });
};
// Delete a note with the specified noteId in the request


exports.delete = (req, res) => {
    Preventive.findByIdAndRemove(req.params.preventId)
    .then(preventive => {
        if(!preventive) {
            return res.status(404).send({
                message: "preventive not found with id " + req.params.preventId
            });
        }
        //res.send({message: "preventive deleted successfully!"});
        res.send({
            success : true,
            message: "preventive deleted successfully!"
        });
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "preventive not found with id " + req.params.preventId
            });                
        }
        return res.status(500).send({
            message: "Could not delete preventive with id " + req.params.preventId
        });
    });
};