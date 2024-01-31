

 export class ResponsesClass {

    public successResponse(message:string, data:any,res:any) {
        console.log("sucess");
        return res.json( {
            status: true,
            message,
            data: data || null,
            // error: null
        });
    }
    
    
    public errorResponse(message:string,error:any,res:any) {
       console.log("fail");
        return res.json ({
            status: false,
            message: message,
            // data: null,
            error
        });
    }

}

// module.exports = new ResponsesClass();