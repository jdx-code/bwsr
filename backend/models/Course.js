const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema(
    {
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category', // Reference to the Category model
        },        
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model
        },
        name: {
            type: String,
            required: true
        },
        about: {
            type: String,            
        },
        price: {
            type: Number,            
        },                
        videoUrl: {
            type: String,
            required: true,
        },
        feedback: [{
            rating: {
                type: Number,
            },
            comment: {
                type: String,
            },
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User', 
            }
        }],
        photos: {
            type: Array,            
        },  
        cloudinary_ids: {
            type: Array,
        }        
    }, 
    { timestamps: true }
)

module.exports = mongoose.model("courses", CourseSchema)