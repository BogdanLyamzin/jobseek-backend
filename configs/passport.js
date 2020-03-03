const ExtractJwt = require('passport-jwt').ExtractJwt
const JwtStrategy = require('passport-jwt').Strategy
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy
const User = require('../models/User')
require('dotenv').config()

const jwtStrategy = new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN_SECRET
}, async function(payload, done) {
    const user = await User.findById(payload._id)
    if(user) {
       return done(null, user)
    }
    done(null, false, {msg: 'please log in'})

})
const facebookStrategy = new FacebookStrategy({
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: "/api/auth/facebook/callback",
    profileFields : ['id', 'displayName', 'emails','photos']
  },
  function(accessToken, refreshToken, profile, done) {
     User.findOne({'socId': profile.id}, async function(err, user) {
         if(user) {
             return done(null, user)
         }
         if(err) {
            return done(err)
         } else {

             const newUser = new User({
                 displayName: profile.displayName,
                 email: profile.emails[0].value,
                 type: "user",
                 socId: profile.id
             })
             await newUser.save()
             return done(null, newUser)
         }
     })
  }
);

const googleStrategy = new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: "/api/auth/google/callback",
    profileFields : ['id', 'displayName', 'emails','photos']
  },
  function(accessToken, refreshToken, profile, done) {
     User.findOne({'socId': profile.id}, async function(err, user) {
         if(user) {
             return done(null, user)
         }
         if(err) {
            return done(err)
         } else {
             const newUser = new User({
                 displayName: profile.displayName,
                 email: profile.emails[0].value,
                 type: "user",
                 socId: profile.id
             })
             await newUser.save()
             return done(null, newUser)
         }
     })
  }
);

const linkedinStrategy = new LinkedInStrategy({
    clientID: process.env.LINKEDIN_ID,
    clientSecret:  process.env.LINKEDIN_SECRET,
    callbackURL: "/api/auth/linkedin/callback",
    profileFields: [
        "id",
        "email-address",
    ]

  },
  function(accessToken, tokenSecret, profile, done) {
      console.log(profile)
    User.findOne({'socId': profile.id}, async function(err, user) {
        if(user) {
            return done(null, user)
        }
        if(err) {
           return done(err)
        } else {
            
            const newUser = new User({
                    socId: profile.id,
                type: "user"

            })
            
            await newUser.save()
            return done(null, newUser)
        }
    })
  }
);

module.exports.jwtStrategy = jwtStrategy
module.exports.facebookStrategy = facebookStrategy
module.exports.googleStrategy = googleStrategy
module.exports.linkedinStrategy = linkedinStrategy