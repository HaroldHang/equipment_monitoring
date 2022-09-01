const Corrective = require('../models/corrective.js');

//Create new Product
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Body content can not be empty"
        });
    }

    // Create a Product
    const corrective = new Corrective(req.body);
    
    corrective.save()
    .then(data => {
        res.send({
            success : true,
            data : data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the corrective."
        });
    });
};

// Retrieve all products from the database.

exports.findAll = (req, res) => {
    Corrective.find().sort({'createdAt' : -1})
    .then(Corrective => {
        res.send(Corrective);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving Corrective."
        });
    });
};

// Find a single product with a productId


exports.findOne = (req, res) => {
    Corrective.findById(req.params.correctId)
    .then(corrective => {
        if(!corrective) {
            return res.status(404).send({
                message: "corrective not found with id " + req.params.correctId
            });            
        }
        res.send(corrective);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.correctId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving product with id " + req.params.correctId
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
    Corrective.findByIdAndUpdate(req.params.correctId, req.body, {new: true})
    .then(corrective => {
        if(!corrective) {
            return res.status(404).send({
                message: "corrective not found with id " + req.params.correctId
            });
        }
        res.send({
            success : true,
            data : corrective
        });
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "corrective not found with id " + req.params.correctId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.correctId
        });
    });
};
// Delete a note with the specified noteId in the request


exports.delete = (req, res) => {
    Corrective.findByIdAndRemove(req.params.correctId)
    .then(corrective => {
        if(!corrective) {
            return res.status(404).send({
                message: "corrective not found with id " + req.params.correctId
            });
        }
        //res.send({message: "corrective deleted successfully!"});
        res.send({
            success : true,
            message: "corrective deleted successfully!"
        });
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "corrective not found with id " + req.params.correctId
            });                
        }
        return res.status(500).send({
            message: "Could not delete corrective with id " + req.params.correctId
        });
    });
};