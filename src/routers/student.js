const express = require('express');
const router=new express.Router();
const Student = require('../models/students');

router.get('/',(req, res) => {
    res.send("hello world i am sammed");
})

//this is using async and await
router.post('/students',async (req, res) => {
    try{
    
        const user=  new Student(req.body);
       const createUser=await user.save()
        // user.save().then(() => {
            res.status(200).send(createUser);
    }
        catch(e){
    
            res.status(404).send(e);
        }
        })
        
    router.get('/students',async (req, res) => {
        try{
            const studentsData=await Student.find();
            res.send(studentsData);
            
        }
        catch(e){
            res.send(e);
        }
        
    })
    router.get('/students/:id', async (req, res) => {
        try{
            const _id=req.params.id;
           const studentData=await Student.findById(_id);
           console.log(studentData)
           if(!studentData){
               return res.status(404).send();
           }
           
           else{
               res.send(studentData);   
           }
           
            
        }
        catch(e) {
            res.status(500).send(studentData)
    console.log(e)
        }
    })
    //updating the student data
     router.patch('/students/:id', async (req, res) => {
         try {
             const _id=req.params.id;
             const updateStudent=await Student.findByIdAndUpdate(_id,req.body,{
                 new:true
             });
             res.send(updateStudent);
         } catch (error) {
             res.status(404).send(error);
         }
     })
    
     //deleting the student data from
    router.delete('/students/:id',async (req, res)=>{
        try {
            
           const deleteStudent= await Student.findByIdAndDelete(req.params.id);
           if(!req.params.id){
              return res.status(400).send();
           }
            res.send(deleteStudent);
            
    
        } catch (error) {
            res.status(500).send(error);
            
        }
    })
    module.exports=router;