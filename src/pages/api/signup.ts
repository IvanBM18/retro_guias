import UserCredentials, { User } from '../../../models/user'

import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import AuthService from '@/services/authentication/authService'

async function signupRoute(req: NextApiRequest, res: NextApiResponse){
  const { email,password, name } = await req.body
  try{
    const fbUser = await AuthService.signup({email, password} as UserCredentials,name)
    if(!fbUser) throw new Error('[ERROR] while trying to create user');

    const user = { isLoggedIn: true, name, } as User
    req.session.user = user
    await req.session.save()
    res.json(user)
  }catch(error){
    res.status(500).json({ message: (error as Error).message })
  }
}

export default withIronSessionApiRoute(signupRoute, sessionOptions)