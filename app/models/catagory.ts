
import * as jwt from 'jsonwebtoken';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import {ObjectId} from 'mongodb';


const CatagorySchema = new mongoose.Schema({
    name: { type: String, default: "" },
    chartIds: { type: Array, default: [] },
    uniqueId:{type:Number,default:0}


}, {
    usePushEach: true,

    strict: true,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})


const Catagory = mongoose.model("Catagory", CatagorySchema);


module.exports = Catagory
