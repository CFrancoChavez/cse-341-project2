const validator = require('../helpers/validate');

const validateProduct = (req, res, next) => {
    const validationRule = {
        name: 'required|string',
        price: 'required|numeric',
        description: 'string',
        category: 'string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    validateProduct
};