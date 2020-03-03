const User = require('../../models/User')
const crypto = require('crypto')
const transporter = require('../../configs/sendMail')
const resPassMail = require('../../emails/resetPassword')
const {MAIL_SENT, MAIL_NOT_EXIST} =  require('../../utils/validator/type') 

module.exports = app => {
    app.post('/mailconfirm', async (req, res) => {
        try{
         const user = await User.findOne({email: req.body.email})
         if(!user) {
            return res.send({status: "error", message: MAIL_NOT_EXIST})
         }
     
         crypto.randomBytes(32, async(err, bufer)=> {
             if(err) {
                 return res.send({status: "error", message: 'something went wrong'})
             }
             const token = bufer.toString('hex')
             user.resetToken = token
             user.resetTokenExp = Date.now() + 3600000
             await user.save()
             await transporter.sendMail(resPassMail(user.email, token))
             res.send({status: "success", message: MAIL_SENT})
     
         })
     
        } catch(error) {
            res.send({status: "error", message: error})
        }
     })
     
}
