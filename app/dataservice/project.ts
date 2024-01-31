import { JsonController, Get, Post, Delete, BodyParam } from 'routing-controllers';
import { User } from '../validators/user';
import { ResponsesClass } from '../utils/response';
import Project from "../models/project";
@JsonController('/project')
export class  ProjectService {

    projectCreate(data:any){
        try{
            return  Project.create(data)
        }catch(e){

            return false
        }
    }



}
