const Course = require('../../models/Course')
const { userRegister, userLogin } = require('../../utils/Auth')

module.exports = {
    registerStudent : async(req, res) => {
        await userRegister(req.body, "student", res)
    },
    loginStudent : async(req, res) => {
        await userLogin(req.body, "student", res)
    },
    addFeedback : async(req, res) => {  
        try{
            const feedback = {
                rating : req.body.rating,
                comment : req.body.comment,
                userId : req.body.userId
            }
            
            const service = await Course.findById(req.params.serviceId)

            if (!service) {
                return res.status(404).json({ error: 'service not found' });
            }

            service.feedback = [feedback,...service.feedback];           
            
            await service.save();
            
            res.status(200).json({ message: 'Feedback added. course updated.' });

        } catch (err)     {
            console.error(err)
        }
    }
}