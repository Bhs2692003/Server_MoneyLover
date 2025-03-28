const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const moment = require('moment-timezone');
const { repeatOptions } = require('../../util/options');


const schema = mongoose.Schema;

const budgetSchema = new schema({

    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        require: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category',
        require: true
    },
    type: {
        type: Number,
        require: true
    },
    dayStart: {
        type: String,
        require: true
    },
    dayEnd: {
        type: String,
        require: false,
        default: null
    },
    note: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    frequency: {
        type: String,
        enum: repeatOptions,
        default: 'Never'
    },
    createdAt: String,
    updatedAt: String,

},
    {
        timestamps: { currentTime: () => moment().tz('Asia/Ho_Chi_Minh').format() },
    }
);

budgetSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});


const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;   