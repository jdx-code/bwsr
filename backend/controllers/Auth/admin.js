const Category = require('../../models/Category')
const { userRegister, userLogin } = require('../../utils/Auth')

module.exports = {
    registerAdmin : async(req, res) => {
        await userRegister(req.body, "admin", res)
    },
    loginAdmin : async(req, res) => {        
        await userLogin(req.body, "admin", res)
    },    

    adminAddCategory : async(req, res) => {
        try{
            await Category.create({
                name: req.body.name,
                desc: req.body.desc
            })
            console.log('New category added in the list..')
        } catch (err){
            console.error(err)            
        }
    }
}