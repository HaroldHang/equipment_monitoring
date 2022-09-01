const Technicians = require('../models/technician.js');

//Create new Product
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Techinician content can not be empty"
        });
    }

    // Create a Product
    const technician = new Technicians(req.body);
    
    technician.save()
    .then(data => {
        res.send({
            success : true,
            data : data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the technician."
        });
    });
};

// Retrieve all products from the database.

exports.findAll = (req, res) => {
    Technicians.find().sort({'createdAt' : -1})
    .then(Technicians => {
        res.send(Technicians);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving Technicians."
        });
    });
};

// Find a single product with a productId


exports.findOne = (req, res) => {
    Technicians.findById(req.params.techId)
    .then(technician => {
        if(!technician) {
            return res.status(404).send({
                message: "technician not found with id " + req.params.techId
            });            
        }
        res.send(technician);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.techId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving product with id " + req.params.techId
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
    Technicians.findByIdAndUpdate(req.params.techId, req.body, {new: true})
    .then(technician => {
        if(!technician) {
            return res.status(404).send({
                message: "technician not found with id " + req.params.techId
            });
        }
        res.send({
            success : true,
            data : technician
        });
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "technician not found with id " + req.params.techId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.techId
        });
    });
};
// Delete a note with the specified noteId in the request


exports.delete = (req, res) => {
    Technicians.findByIdAndRemove(req.params.techId)
    .then(technician => {
        if(!technician) {
            return res.status(404).send({
                message: "technician not found with id " + req.params.techId
            });
        }
        //res.send({message: "technician deleted successfully!"});
        res.send({
            success : true,
            message: "technician deleted successfully!"
        });
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "technician not found with id " + req.params.techId
            });                
        }
        return res.status(500).send({
            message: "Could not delete technician with id " + req.params.techId
        });
    });
};