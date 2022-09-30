const Services = require('../models/services.js');
const Divisions = require('../models/division.js');

//Create new Services
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Services content can not be empty"
        });
    }

    // Create a Product
    const service = new Services(req.body);
    
    service.save()
    .then(data => {
        res.send({
            success : true,
            data : data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the service."
        });
    });
};

exports.createDiv = (req, res) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Services content can not be empty"
        });
    }

    // Create a Product
    const division = new Divisions(req.body);
    
    division.save()
    .then(data => {
        res.send({
            success : true,
            data : data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the division service."
        });
    });
};

// Retrieve all products from the database.
exports.findAll = (req, res) => {
    Services.find().sort({'createdAt' : -1})
    .then(Services => {
        res.send(Services);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving Services."
        });
    });
};
exports.findAllDiv = (req, res) => {
    //console.log(req.params)
    Divisions.find({service : req.params.servId}).sort({'createdAt' : -1})
    .then(Divisions => {
        res.send(Divisions);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving Services."
        });
    });
};

// Find a single product with a productId


exports.findOne = (req, res) => {
    Services.findById(req.params.servId)
    .then(service => {
        if(!service) {
            return res.status(404).send({
                message: "service not found with id " + req.params.servId
            });            
        }
        res.send(service);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.servId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving product with id " + req.params.servId
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
    Services.findByIdAndUpdate(req.params.servId, req.body, {new: true})
    .then(service => {
        if(!service) {
            return res.status(404).send({
                message: "service not found with id " + req.params.servId
            });
        }
        res.send({
            success : true,
            data : service
        });
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "service not found with id " + req.params.servId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.servId
        });
    });
};

exports.updateDiv = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }
    // Find and update product with the request body
    Divisions.findByIdAndUpdate(req.params.divId, req.body, {new: true})
    .then(division => {
        if(!division) {
            return res.status(404).send({
                message: "division not found with id " + req.params.divId
            });
        }
        res.send({
            success : true,
            data : division
        });
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "service not found with id " + req.params.divId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.divId
        });
    });
};
// Delete a note with the specified noteId in the request


exports.delete = (req, res) => {
    Services.findByIdAndRemove(req.params.servId)
    .then(service => {
        if(!service) {
            return res.status(404).send({
                message: "service not found with id " + req.params.servId
            });
        }
        //res.send({message: "service deleted successfully!"});
        res.send({
            success : true,
            message: "technician deleted successfully!"
        });
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "technician not found with id " + req.params.servId
            });                
        }
        return res.status(500).send({
            message: "Could not delete technician with id " + req.params.servId
        });
    });
};

exports.deleteDiv = (req, res) => {
    Divisions.findByIdAndRemove(req.params.divId)
    .then(division => {
        if(!division) {
            return res.status(404).send({
                message: "division not found with id " + req.params.divId
            });
        }
        //res.send({message: "service deleted successfully!"});
        res.send({
            success : true,
            message: "technician deleted successfully!"
        });
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "technician not found with id " + req.params.divId
            });                
        }
        return res.status(500).send({
            message: "Could not delete technician with id " + req.params.divId
        });
    });
};