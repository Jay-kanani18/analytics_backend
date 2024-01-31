
import * as jwt from 'jsonwebtoken';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import {ObjectId} from 'mongodb';

const ProjectSchema = new mongoose.Schema({
    name: { type: String, require:true },
    email: { type: String, require:true },
    token: { type: String, default: "" },
    dbString: { type: String, require:true },
    password: { type: String, default: "" },
    profile: { type: String, require:true },
    logo: { type: String, require:true },
    templateIds: { type: Array, default: [] },
    defaultCountry: { type: ObjectId, default: "" },
    defaultCity: { type: ObjectId, default: "" },
    catagoryIds: { type: Array, default: [] },
    uniqueId:{type:Number,default:0}


}, {
    usePushEach: true,
    strict: true,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})





export default  mongoose.model("Project", ProjectSchema);
