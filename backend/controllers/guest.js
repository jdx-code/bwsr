const Category = require('../models/Category')
const Course = require('../models/Course')

module.exports = {

    getCategories : async(req, res) => {
        try{            
            const results = await Category.find()
            res.status(200).json({ message: 'Fetching categories info..', results });
        } catch (err) {
            console.error(err)
        }
    },   
    
    getServices : async(req, res) => {
        try{            
            const results = await Course.find()
            res.status(200).json({ message: 'Fetching courses..', results });
        } catch (err) {
            console.error(err)
        }
    },    

    getSellersByCategoryId : async(req, res) => {
        try{            
            console.log(req.params.categoryId)
            const results = await Course.find({ category : req.params.categoryId })
            res.status(200).json({ message: 'Fetching products and services by Seller..', results });
        } catch (err) {
            console.error(err)
        }
    },

    getServiceDetailsByServiceId : async(req, res) => {
        try{            
            const results = await Course.findById(req.params.serviceId)
            res.status(200).json({ message: 'Courses..', results });
        } catch (err) {
            console.error(err)
        }
    }, 
}