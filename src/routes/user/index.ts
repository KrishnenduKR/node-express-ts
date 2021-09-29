import express from 'express'

const routes = express.Router()

routes.get('/user', (req,res) =>{
    res.status(200).send({'name': 'krish','age':'28'})
 })
 
 routes.post('/addUser', (req,res) => {
     console.log(req.body)
     res.status(200).send('New user added')
 })
 
 routes.put('/editUser/:id',(req,res)=>{
     res.status(200).send(`user ${req.params.id} updated`)
 })
 
 routes.delete('/deleteUser/:id', (req,res)=>{
     res.status(200).send(`user ${req.params.id} deleted`)
 })

 export default routes