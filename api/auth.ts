import { NowRequest, NowResponse } from '@now/node'
import jwt from 'jsonwebtoken'

import { notHasPayload } from './_utils/errors'

export default (req: NowRequest, res: NowResponse) => {
  
  if(notHasPayload(req, res)) return
  const { token } = req.body

  jwt.verify(token, process.env.JWT_TOKEN, (error, decryptedContent) => {
    if(error) {
      res.status(500).send({ error })
      return
    }
    res.status(200).send({ decryptedContent })
  })
}
