import { JsonController, Get, Post, Delete, BodyParam, UseAfter, UseBefore, Body, Res } from 'routing-controllers';
// import { requestValidator } from '../middleware/auth';
// import { decpryption, encpryption } from '../middleware/encrypted';
import { ResponsesClass } from '../utils/response';
import { Response } from 'express';
import { AdminService } from '../dataservice/admin';

const responseClass = new ResponsesClass()

@JsonController('/admin')
// @UseBefore(decpryption) 
// @UseBefore(requestValidator) 
// @UseAfter(encpryption)
export class AdminController extends AdminService {


    @Post('/register')
    async adminRegister(@BodyParam('data') data: any, @Res() response: Response) {
        try {
            let message = ''


            let admin = await this.registerAdmin(data)

            if (!admin) {
                console.log('admn not created');
                let error = 0
                return responseClass.errorResponse(message, error, response)
            }
            console.log(admin);
            return responseClass.successResponse(message, data, response)

        } catch (e) {
            let message = ''

            console.log(e);
            return responseClass.errorResponse(message, 0, response)

        }
    }

    @Get('/login')
    postForWhat() {



    }





}

