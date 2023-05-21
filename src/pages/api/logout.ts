import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../models/user'
import AuthService from '@/services/authentication/authService'

function logoutRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  AuthService.logout()
  req.session.destroy()
  res.json({ isLoggedIn: false, name: '', avatarUrl: '', email: '', id: '' })
}

export default withIronSessionApiRoute(logoutRoute, sessionOptions)
