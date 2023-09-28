const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

const UserRepository=require('../repository/user-repository');

const {JWT_KEY}=require('../config/server-config');

class UserService{
    constructor()
    {
        this.userRepository=new UserRepository();
    }

  async create(data)
  {
    try {
        const user=await this.userRepository.create(data);
        return user;
    } catch (error) {
        console.log("error in service layer")
        throw {error}
    }
  }

  async signIn(email,plainPassword)
  {
    try {
      //step 1 - fetch the user using the email
      const user=await this.userRepository.getByEmail(email);
      //step 2 - compare incomming password with the stored encrypted password
      const passwordMatch=await this.checkPassword(plainPassword,user.password);
      if(!passwordMatch)
      {
         console.log("password didn't match");
         throw {error:"incorrect password"}
      }

      const newJWT=this.createToken({email:user.email,id:user.id})
      return newJWT;

    } catch (error) {
      console.log("error in signIn")
        throw {error}
    }
  }

  createToken(user)
  {
    try {     
      const result=jwt.sign(user,JWT_KEY,{expiresIn:'1h'});
      return result;
    } catch (error) {
      console.log("error in token creation")
    }
  }
  
  verifyToken(token)
  {
    try {
      const response=jwt.verify(token,JWT_KEY);
      return response;
    } catch (error) {
      console.log("error in token validation")
      throw error;
    }
  }

  checkPassword(userInputPlainPassword,encryptedPassword)
  {
    try {
      return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
    } catch (error) {
      console.log("error in token validation")
      throw error;
    }
  }
}

module.exports=UserService;