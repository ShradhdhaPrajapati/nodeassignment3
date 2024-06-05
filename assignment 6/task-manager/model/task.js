const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema ({
    title:{
        type:String,
        required: true
    },

    description:{
        type: String,
        required:true
    },
    status:{
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    },
    created_at:{
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Task', TaskSchema);