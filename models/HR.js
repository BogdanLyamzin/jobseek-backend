const {Schema, model} = require("mongoose");

const HR = Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phone:  {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    companyId: {
         type: Schema.Types.ObjectId,
         ref: "Company",        
//        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true,
    },    
    avatar: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = model("HR", HR);