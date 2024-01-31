
import * as jwt from 'jsonwebtoken';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import {ObjectId} from 'mongodb';


const ChartsSchema = new mongoose.Schema({
    name: { type: String, default: "" },
    type: { type: Number, default: null },

    collection: { type: String, default: "" },
    query: { type: String, default: "" },
    
    uniqueId:{type:Number,default:0}


}, {
    usePushEach: true,
    strict: true,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})


const Chart = mongoose.model("Chart", ChartsSchema);


module.exports = Chart
