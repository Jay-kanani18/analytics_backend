import { JsonController, Get, Post, Delete, BodyParam, Res, Req } from 'routing-controllers';
import { User } from '../validators/user';
import { ResponsesClass } from '../utils/response';
import { ProjectService } from '../dataservice/project';
import { Utils } from '../utils/utils';
import { body } from 'express-validator';
const responseClass = new ResponsesClass()

@JsonController('/project')
export class ProjectController extends ProjectService {



    @Post('/create')
    async createProject(@Req() req:Request, @Res() response: Response) {
        try {
            let message = ''

            console.log('wook');

           let valids:any =  Utils.validateRequestBody([ // IT CAN BE OPTIMIZE
            body('name').notEmpty().isString().withMessage('name is required'), 
            body('email').notEmpty().isString().isEmail().withMessage('Email must be a valid email'),
            body('dbString').notEmpty().isString().withMessage('DB String must be a valid email'),
            body('password').notEmpty().isString().withMessage('Password must be a valid email'),
          ])


           if(valids.error){

            console.log(valids);
            return  responseClass.errorResponse(message, 0, response)
           }

           console.log(valids);
           return
            // let project = await this.projectCreate(data)

            // if (!project) {
            //     console.log('project not created');
            //     let error = 0
            //     return responseClass.errorResponse(message, error, response)
            // }
            // return responseClass.successResponse(message, data, response)

        } catch (e) {
            let message = ''

            console.log("catch");
            console.log(e);
            return responseClass.errorResponse(message, 0, response)

        }
    }

    @Get('/details')
    projectDetails(@BodyParam('data') data: any) {

    }

    @Get('/update')
    projectUpdate(@BodyParam('data') data: any) {

    }

    @Delete('/delete')
    projectDelete() {

    }

}
