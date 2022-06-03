const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema=new mongoose.Schema({
    name:{
        type: 'string',
        require:true,
        minlength:3,
         
    },
    email:{
        type:String,
        require:true,
        // unique:true,
        unique:[true,"email id is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new error("invalid email id");
            }
        }

    },
    phone:{
        type:Number,
        min:10,
        require:true,
        unique:true,
        // maxlength:10
    },
    address:{
        type:String,
        require:true,
    }
})

const Student = new mongoose.model("Student",studentSchema);

module.exports = Student;