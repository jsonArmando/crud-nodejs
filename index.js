const express = require('express')
const app = express()
const PORT=2745

app.use(express.json())

const Service = require('./src/services')
console.log(Service.getUsers)
app.get('/',(req,res)=>{
    res.json({
        message:"Hello Word",
        body: Service.getUsers()
    })
})

app.post('/',(req,res)=>{
    let { body: newUser } = req
    let user= Service.createUser(newUser)
    res.status(201).json({
        message:"Usuario Creado",
        body: user
    })
})

app.get('/:id',(req,res)=>{
    let { params : {id}} = req
    let user = Service.getUser(id)
    res.json({
        message:`Usuario: ${user}`,
        body: user
    })
})

app.put("/:id", (req, res) => {
    let identificador = req.params.id;
    let { body: updateData } = req;
    let usuario =  Service.updateUser(identificador, updateData);
    res.json({
      message: `Usuario id ${identificador}, actualizado`,
      body: usuario,
    });
  });

app.delete('/:id',(req,res)=>{
    let id = req.params.id
    let userDelete = Service.deleteUser(id)
    res.json({
        message: `Usuario ${userDelete}, eliminado`,
        body: userDelete,
    })

})

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})