const data = require('./MOCK_DATA.json')

module.exports = {
    getUsers: () => data,
    getUser: (id) =>{
        let identificador = Number(id)
        let user=data.filter((person)=>person.id===identificador)
        return user
    },
    createUser:(dataUser) =>{
        let newUser={
            id: data.length +1,
            ...dataUser,
        }
        data.push(newUser)
        return newUser
    },
    updateUser: (identificador, updateData) => {
        let id = Number(identificador);
        let usuarioBuscado = data.find((cliente) => {
          return cliente.id === id;
        });
        usuarioBuscado.first_name = updateData.first_name;
        usuarioBuscado.last_name = updateData.last_name;
        usuarioBuscado.email = updateData.email;
        return usuarioBuscado;
      },
    deleteUser:(identificador)=>{
        let id = Number(identificador);
        let usuarioEliminado = data.find((user)=> user.id==identificador)
        let posicion =  data.findIndex((usuario) => usuario.id === id)
        data.splice(posicion, 1)
        return usuarioEliminado
    }
}