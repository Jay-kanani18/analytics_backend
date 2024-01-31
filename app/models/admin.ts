
import * as jwt from 'jsonwebtoken';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import {ObjectId} from 'mongodb';



const AdminSchema = new mongoose.Schema({
    name: { type: String, require:true},
    email: { type: String, require:true },
    token: { type: String, default: "" },
    password: { type: String, required:true },
    uniqueId:{type:Number,default:0}


}, {
    usePushEach: true, 
    strict: true,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})




export default mongoose.model("Admin", AdminSchema);
