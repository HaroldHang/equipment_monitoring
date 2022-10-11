const Equipments = require('../models/equipment.js');

//Create new Product
exports.create = (req, res) => {
    // Request validation
    console.log(req.body)
    if(!req.body) {
        return res.status(400).send({
            message: "Equipment content can not be empty"
        });
    }

    // Create a Product
    /*const product = new Product({
        title: req.body.title || "No product title", 
        description: req.body.description,
        price: req.body.price,
        company: req.body.company
    });*/
    const equipment = new Equipments(req.body);
    // Save Product in the database
    /*product.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the product."
        });
    });*/
    equipment.save()
    .then(data => {
        res.send({
            success : true,
            data : data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the equipment."
        });
    });
};

// Retrieve all products from the database.
/*exports.findAll = (req, res) => {
    Product.find()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving products."
        });
    });
};*/
exports.findAll = (req, res) => {
    Equipments.find().populate("departmentDivision").sort({ "createdAt" : -1 })
    .then(equipments => {
        res.send(equipments);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving equipments."
        });
    });
};

// Find a single product with a productId
/*exports.findOne = (req, res) => {
    Product.findById(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });            
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving product with id " + req.params.productId
        });
    });
};*/

exports.findOne = (req, res) => {
    Equipments.findById(req.params.equipId)
    .then(equipment => {
        if(!equipment) {
            return res.status(404).send({
                message: "Equipment not found with id " + req.params.equipId
            });            
        }
        res.send(equipment);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.equipId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving product with id " + req.params.equipId
        });
    });
};

// Update a product
/*exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }

    // Find and update product with the request body
    Product.findByIdAndUpdate(req.params.productId, {
        title: req.body.title || "No product title", 
        description: req.body.description,
        price: req.body.price,
        company: req.body.company
    }, {new: true})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.productId
        });
    });
};*/
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }

    // Find and update product with the request body
    Equipments.findByIdAndUpdate(req.params.equipId, req.body, {new: true})
    .then(equipment => {
        if(!equipment) {
            return res.status(404).send({
                message: "Equipment not found with id " + req.params.equipId
            });
        }
        res.send({
            success : true,
            data : equipment
        });
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Equipment not found with id " + req.params.equipId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.equipId
        });
    });
};
// Delete a note with the specified noteId in the request
/*exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
        }
        res.send({message: "Product deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Could not delete product with id " + req.params.productId
        });
    });
};*/

exports.delete = (req, res) => {
    Equipments.findByIdAndRemove(req.params.equipId)
    .then(equipment => {
        if(!equipment) {
            return res.status(404).send({
                message: "equipment not found with id " + req.params.equipId
            });
        }
        //res.send({message: "equipment deleted successfully!"});
        res.send({
            success : true,
            message: "equipment deleted successfully!"
        });
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "equipment not found with id " + req.params.equipId
            });                
        }
        return res.status(500).send({
            message: "Could not delete equipment with id " + req.params.equipId
        });
    });
};