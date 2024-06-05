const Course = require('../../models/Course')
const { userRegister, userLogin } = require('../../utils/Auth')
const cloudinary = require('../../middleware/media_upload/cloudinary')

module.exports = {
    registerFaculty : async(req, res) => {
        await userRegister(req.body, "faculty", res)
    },
    loginFaculty : async(req, res) => {
        await userLogin(req.body, "faculty", res)
    },

    facultyNewCourse : async(req, res) => {
        try {

            // Upload the files to Cloudinary
            const uploadPromises = req.files.map((file) => {
                return cloudinary.uploader.upload(file.path, {
                    folder: 'learning-platform'
                })
            })

            // Wait for all files to be uploaded to cloudinary
            const results = await Promise.all(uploadPromises)
            const imageUrls = results.map((result) => result.secure_url)
            const cloudinary_ids = results.map((result) => result.public_id)

            console.log('categoryId ', req.body.categoryId);
            console.log('userId ', req.body.userId);
            console.log('name ', req.body.name);

            const newCourse = await Course.create({
                category: req.body.categoryId,
                user: req.body.userId,
                name: req.body.name,
                about: req.body.about,
                price: req.body.price,
                videoUrl: req.body.videoUrl,                
                photos: imageUrls,
                cloudinary_ids: cloudinary_ids,
            });

            console.log('New course added by faculty.');
            res.status(200).json({ message: 'New course added successfully', newCourse });
        } catch (err) {
            console.error(err)
        }
    }
}
 
