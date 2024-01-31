
import * as jwt from 'jsonwebtoken';
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import {ObjectId} from 'mongodb';

const TemplateSchema = new mongoose.Schema({
    name: { type: String, default: "" },
    uniqueId:{type:Number,default:0},
    catagoryIds: { type: Array, default: [] },




}, {
    usePushEach: true,
    strict: true,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})


const Template = mongoose.model("Template", TemplateSchema);


module.exports = Template
