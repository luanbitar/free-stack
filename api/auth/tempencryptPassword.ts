import { NowRequest, NowResponse } from '@now/node'
import { AES } from 'crypto-js'

import { notHasPayload } from '../_utils/errors'

export default (req: NowRequest, res: NowResponse) => {

  if(notHasPayload(req, res)) return
  const { password } = req.body

  const CLIENT_SECRET = process.env.CRYPTO_CLIENT_SECRET || 'CRYPTO_CLIENT_SECRET'
  const encrypted = AES.encrypt(password, CLIENT_SECRET).toString()
  
  return res.status(200).json({ encrypted })
}
