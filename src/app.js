const express=require('express');
require("./db/conn");
const Student = require('./models/students');
const app = express();
const port=process.env.PORT || 8000;
const studentRouter = require('./routers/student');
app.use(express.json());

app.use(studentRouter);
//create a router

//we need to define the router

// we need to register the router

// })
// app.post('/students',(req, res) => {
//     console.log(req.body)
//     const user=new Student(req.body);
//     user.save().then(() => {
//         res.status(200).send(user);
//     }).catch(err => {
//         res.status(404).send(err);
//     })
    
// })
//this is using async and await
// app.post('/students',async (req, res) => {
// try{

//     const user=  new Student(req.body);
//    const createUser=await user.save()
//     // user.save().then(() => {
//         res.status(200).send(createUser);
// }
//     catch(e){

//         res.status(404).send(e);
//     }
//     })
    
// app.get('/students',async (req, res) => {
//     try{
//         const studentsData=await Student.find();
//         res.send(studentsData);
        
//     }
//     catch(e){
//         res.send(e);
//     }
    
// })
// app.get('/students/:id', async (req, res) => {
//     try{
//         const _id=req.params.id;
//        const studentData=await Student.findById(_id);
//        console.log(studentData)
//        if(!studentData){
//            return res.status(404).send();
//        }
//        else{
//            res.send(studentData);   
//        }
       
        
//     }
//     catch(e) {
//         res.status(500).send(studentData)
// console.log(e)
//     }
// })
// //updating the student data
//  app.patch('/students/:id', async (req, res) => {
//      try {
//          const _id=req.params.id;
//          const updateStudent=await Student.findByIdAndUpdate(_id,req.body,{
//              new:true
//          });
//          res.send(updateStudent);
//      } catch (error) {
//          res.status(404).send(error);
//      }
//  })

//  //deleting the student data from
// app.delete('/students/:id',async (req, res)=>{
//     try {
        
//        const deleteStudent= await Student.findByIdAndDelete(req.params.id);
//        if(!req.params.id){
//           return res.status(400).send();
//        }
//         res.send(deleteStudent);
        

//     } catch (error) {
//         res.status(500).send(error);
        
//     }
// })

// app.get('/students/name',async (req, res)=>{
//     const name=req.params.name;
//     const StudentName = await Student.findByName(name);
//     res.send(StudentName);
//     console.log(StudentName);
  

app.listen(port,(req, res)=>{
    console.log(`connectd successfuly to ${port}`)
})