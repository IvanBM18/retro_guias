import UserCredentials, { User } from '../../models/user';
// import { User } from 'firebase/auth';
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import AuthService from '@/services/authentication/authService'

async function signupRoute(req: NextApiRequest, res: NextApiResponse){
  const { email, password, name, type } = await req.body
  let newUser : any;
  try{
    if(type == 'google'){
      newUser = await AuthService.googleSignUp()
    }else {
      newUser = await AuthService.signup({email, password} as UserCredentials,name)
    }
    
    const user = {id:newUser.uid , isLoggedIn: true, name, email, avatarUrl:newUser.photoURL } as User
    req.session.user = user
    await req.session.save()
    res.json(user)
  }catch(error){
    res.status(500).json({ message: (error as Error).message })
  }
}

export default withIronSessionApiRoute(signupRoute, sessionOptions)