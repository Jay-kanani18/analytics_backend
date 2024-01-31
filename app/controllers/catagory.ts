import { JsonController, Get, Post, Delete, BodyParam } from 'routing-controllers';
import { User } from '../validators/user';
import { ResponsesClass } from '../utils/response';

@JsonController('/catagory')
export class CatagoryController {

    constructor(private response:ResponsesClass){}


    @Get('/get_for_what')
    getForWhat() {
        try {

        } catch (e) {
            console.log(e);
        }
    }

    @Post('/get_for_what')
    postForWhat() {

    }

    @Post('/add_for_what')
    addForWhat(@BodyParam('data') data: any) {

    }

    @Post('/save_for_what')
    saveForWhat(@BodyParam('data') data: any) {

    }

    @Delete('/remove_for_what')
    removeForWhat() {
    }

}
