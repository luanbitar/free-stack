import { NowRequest, NowResponse } from '@now/node'
import jwt from 'jsonwebtoken'

export default lambda => (req: NowRequest, res: NowResponse) => {

  const authorization = req.headers.authorization
  const hasAuthorizationHeader = authorization && authorization.length > 0

  if(!hasAuthorizationHeader) return res.status(401).send({ error: 'Provide Bearer token' })

  
  // jwt.verify(token, process.env.JWT_TOKEN, (error, decryptedContent) => {
  //   if(error) {
  //       res.status(500).send({ error })
  //       return
  //     }
  //     res.status(200).send({ decryptedContent })
  //   })

  lambda(req, res)
}