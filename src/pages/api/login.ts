import UserCredentials, { User } from '../../../models/user'

import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import AuthService from '@/services/authentication/authService'

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { email,password } = await req.body

  try {
    const fbUser = await AuthService.login({email, password} as UserCredentials)
    const user = { isLoggedIn: true, name: fbUser.displayName, avatarUrl:fbUser.photoURL } as User
    req.session.user = user
    await req.session.save()
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions)
