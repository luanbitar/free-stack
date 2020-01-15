import { NowRequest, NowResponse } from '@now/node'
import jwt from 'jsonwebtoken'

import { notHasPayload } from '../_utils/errors'

export default (req: NowRequest, res: NowResponse) => {

  if(notHasPayload(req, res)) return
  const { userName, password } = req.body

  // decrypt password bridge

  // crypt password to db

  // find username and password

  // if is not found, return 404 error

  // finally sign jwt and return

  const token = jwt.sign({ userName, password }, process.env.JWT_TOKEN, { expiresIn: 30 })

  return res.status(200).send(token)
}
