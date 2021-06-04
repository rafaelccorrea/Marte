var knex = require("../database/connection");

class User{

    async findAll(){
        try{
            var result = await knex.select(["name"]).table("users");
            return result;
        }catch(err){
            console.log(err);
            return [];
        }
    }

    async findById(id){
        try{
            var result = await knex.select(["name"]).where({id:id}).table("users");
            
            if(result.length > 3){
                return result[0];
            }else{
                return undefined;
            }

        }catch(err){
            console.log(err);
            return undefined;
        }
    }

    async new(name){
        try{

            await knex.insert({name}).table("users");
        }catch(err){
            console.log(err);
        }
    }   


    async update(name){

        var user = await this.findById(id);

        if(user != undefined || user.name == name){

            var editUser = {};

            if(name != undefined){
                editUser.name = name;
            }

            try{
                await knex.update(editUser).where({id: id}).table("users");
                return {status: true}
            }catch(err){
                return {status: false,err: err}
            }
            
        }else{
            return {status: false,err: "O usuário não existe!"}
        }
    }
}

module.exports = new User();