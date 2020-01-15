import { NowRequest, NowResponse } from '@now/node'
import jwt from 'jsonwebtoken'

export default lambda => (req: NowRequest, res: NowResponse) => {

  const authorization = req.headers.authorization
  const hasAuthorizationHeader = authorization && authorization.length > 0

  if(!hasAuthorizationHeader) return res.status(401).send({ error: {
    name: `BearerTokenNotProvided`,
    message: `Provide Bearer token`
  } })

  const token = authorization && authorization.split(' ')[1]

  jwt.verify(token, process.env.JWT_TOKEN, (error, decryptedContent) => {
    if(error) return res.status(401).send({ error })

    lambda(req, res, decryptedContent) 
  })

}