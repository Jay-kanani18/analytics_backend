import mongoose, { mongo } from "mongoose";
import Admin from "../models/admin";
export class AdminService{

    async registerAdmin(data:any){
        try{

            
            return  Admin.create(data)
        }catch(e){

            return false
        }
    }
}