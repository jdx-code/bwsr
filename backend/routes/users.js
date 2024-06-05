const router = require("express").Router()
const { userRegister, userLogin, userAuth, checkRole, serializeUser } = require('../utils/Auth')
const adminController = require('../controllers/Auth/admin')
const studentController = require('../controllers/Auth/student')
const facultyController = require('../controllers/Auth/faculty')
const upload = require('../middleware/media_upload/multer')

// Admin registration route
router.post('/register-admin', adminController.registerAdmin)

// Student registration route
router.post('/register-student', studentController.registerStudent)

// Faculty registration route
router.post('/register-faculty', facultyController.registerFaculty)


// Admin login route
router.post('/login-admin', adminController.loginAdmin)

// Student login route
router.post('/login-student', studentController.loginStudent)

// Faculty login route
router.post('/login-faculty', facultyController.loginFaculty)

// Profile route
router.get('/profile', userAuth, async(req, res) => {
    return res.json(serializeUser(req.user))
})

// Admin PROTECTED route
router.get('/admin-protected', userAuth, checkRole(['admin']), (req, res) => {
    return res.status(200).send({
        success: true,
        user: req.user
    })
})

router.post('/admin-protected/admin-add-category', userAuth, checkRole(['admin']), adminController.adminAddCategory)

// Student PROTECTED route
router.get('/student-protected', userAuth, checkRole(['student']), (req, res) => {
    return res.status(200).send({
        success: true,
        user: req.user
    })
})

router.put('/student-protected/addFeedback/:serviceId', userAuth, checkRole(['student']), studentController.addFeedback)

// Faculty PROTECTED route
router.get('/faculty-protected', userAuth, checkRole(['faculty']), (req, res) => {
    return res.status(200).send({
        success: true,
        user: req.user
    })
})

router.post('/faculty-protected/faculty-new-course', userAuth, checkRole(['faculty']), upload.array("files", 5), facultyController.facultyNewCourse)

// Student and Faculty PROTECTED route
// router.get('/faculty-student-protected', userAuth, checkRole(['faculty', 'student']), async(req, res) => {
//     return res.json("Hello User")
// })

module.exports = router

