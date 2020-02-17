const {Schema, model} = require("mongoose");

const Cv = Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Candidate',
        required: true
    },
    activeCV: {
        type: Boolean,
        required: true,
        default: true
    },
     cvSkill: {
        type: Array,
         required: true
     },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});



module.exports = model ("Cv", Cv);
