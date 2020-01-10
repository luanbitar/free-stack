import { NowRequest, NowResponse } from '@now/node'
import jwt from 'jsonwebtoken'

import { notHasPayload } from './_utils/errors'

export default (req: NowRequest, res: NowResponse) => {
  
  if(notHasPayload(req, res)) return
  const { token } = req.body
  console.log({ MONGO_DATABASE_URL: process.env.MONGO_DATABASE_URL })

  jwt.verify(token, 'secret_key', (error, decryptedContent) => {
    if(error) {
      res.status(500).send({ error })
      return
    }
    res.status(200).send({ decryptedContent })
  })
}
