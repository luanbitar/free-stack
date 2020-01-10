import { NowRequest, NowResponse } from '@now/node'
import jwt from 'jsonwebtoken'

import { notHasPayload } from './_utils/errors'

export default (req: NowRequest, res: NowResponse) => {
  
  if(notHasPayload(req, res)) return
  const { userName, password } = req.body

  const TEST_VARIABLE = process.env.TEST_VARIABLE

  const token = jwt.sign({ id: 1 }, 'secret_key', { expiresIn: 30 }) // 30 segundos

  return res.status(200).send({ userName, password, token, TEST_VARIABLE })
}
