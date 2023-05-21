import UserCredentials, { User } from '../../models/user'

import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import AuthService from '@/services/authentication/authService'

async function verifyUserRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isVerified = await AuthService.isVerified()
    if(isVerified){
        res.json({
            ...req.session.user,
            isLoggedIn: true,
            isVerified: true})
    }else{
        res.json({
            ...req.session.user,
            isLoggedIn: true,
            isVerified: false})
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}

export default withIronSessionApiRoute(verifyUserRoute, sessionOptions)
