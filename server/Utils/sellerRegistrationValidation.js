const Joi = require("joi");
const passwordComplexity=require("joi-password-complexity")
const validate=(data)=>{
   
    
    const schema=Joi.object({
        name:Joi.string().required().label("name"),
        email:Joi.string().email().required().label("email"),
        password:passwordComplexity().required().label("password"),
        address:Joi.string().required().label("address"),
        pin:Joi.number().required().label("pin")
        // img:Joi.string().required().label("Image"),
    });
    return schema.validate(data)
  
} ;
module.exports = {validate}