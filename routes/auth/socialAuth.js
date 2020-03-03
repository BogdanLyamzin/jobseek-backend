const jwt = require('jsonwebtoken');
const passport = require('passport');
require('dotenv').config()

module.exports = app => {
  app.get('/facebook', passport.authenticate('facebook', {scope: 'email'}));

app.get('/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
    session: false }),
    (req, res) => {
    const token = jwt.sign({_id: req.user. _id}, process.env.TOKEN_SECRET)
                                
    res.send(`<script>
    localStorage.setItem("token", "bearer ${token}")
    location.href = "/profile"
    </script>`)
  }
)

app.get('/google', passport.authenticate('google', {scope: ['email', 'profile']}));

app.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    session: false 
  }), 
  (req, res) => {
    const token = jwt.sign({_id: req.user._id}, process.env.TOKEN_SECRET)
                                
    res.send(`<script>
    localStorage.setItem("token", "bearer ${token}")
    location.href = "/profile"
    </script>`)
    }
)

app.get('/linkedin',
  passport.authenticate('linkedin',{scope: ["r_liteprofile", "r_emailaddress"]})
);

app.get('/linkedin/callback',
  passport.authenticate('linkedin', {
    failureRedirect: '/login',
    session: false
  }), 
  async (req, res) => {
            
    const token = jwt.sign({_id: req.user._id}, process.env.TOKEN_SECRET)
                                
    res.send(`<script>
    localStorage.setItem("token", "bearer ${token}")
    location.href = "/profile"
    </script>`)
    }
)
}
