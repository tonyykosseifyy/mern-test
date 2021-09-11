import User from '../models/user';
import { hashPassword , comparePassword } from '../helpers/auth' ;

export const register = async (req, res) => {
  const { name , email , password , secret } = req.body ;

  if(!name) return res.status(400).send("Name is required") ;
  console.log('name is here')
  console.log(`password: ${password}`)
  if(!password || password.length < 6 ) return res.status(400).send("Password is required and should be 6 characters long")

  if(!secret) return res.status(400).send("Answer is required") ;
    console.log('secret is here')
    if ( !email ) return res.status(400).send("Email is required") ;
    
    const exist = await User.findOne({ email }) ;
    if (exist) return res.status(400).send("Email is taken");
    console.log('email not taked ')
    const hashedPassword = await hashPassword(password) ;

    const user = new User({name , email , password: hashedPassword ,secret }) ;

    try {
      await user.save()
      console.log("Saved")
      return res.json({ok: true})
    } catch(err) {
      console.log(err)
      return res.status(400).send("Error, Try again") ;
    }

};
