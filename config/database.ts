const { mongoose } = require('mongoose');


export class Database {

    public async connect() {


        // let db = await mongoose.connect("mongodb://localhost:27017/CHARTS",{
        let db = await mongoose.connect("mongodb://localhost:27017/Analytics", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log('DB connected');


        require("../app/models/admin")
        require("../app/models/catagory")
        require("../app/models/chart")
        require("../app/models/project")
        require("../app/models/template")

        return db


    }
}