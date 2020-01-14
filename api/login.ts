import { NowRequest, NowResponse } from '@now/node'
import jwt from 'jsonwebtoken'

import { notHasPayload } from './_utils/errors'

export default (req: NowRequest, res: NowResponse) => {

  if(notHasPayload(req, res)) return
  const { userName, password } = req.body

  

  const token = jwt.sign({ userName, password }, process.env.JWT_TOKEN, { expiresIn: '1d' })

  return res.status(200).send(token)
}
