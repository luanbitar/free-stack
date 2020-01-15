import jwt from 'jsonwebtoken'
import { AES, TripleDES, enc } from 'crypto-js'
import { NowRequest, NowResponse } from '@now/node'

import { notHasPayload } from '../_utils/errors'

export default (req: NowRequest, res: NowResponse) => {

  if(notHasPayload(req, res)) return
  const { userName, password } = req.body

  // decrypt password bridge AES
  const CLIENT_SECRET = process.env.CRYPTO_CLIENT_SECRET || 'CRYPTO_CLIENT_SECRET'
  const decryptedPassword = AES.decrypt(password, CLIENT_SECRET).toString(enc.Utf8)
  
  // crypt password to db TripleDES
  const DB_SECRET = process.env.CRYPTO_DB_SECRET || 'CRYPTO_DB_SECRET'
  const encryptedPassword = TripleDES.encrypt(decryptedPassword, DB_SECRET).toString()

  // find username and password

  // if is not found, return 404 error

  // finally sign jwt and return

  const token = jwt.sign({ userName, decryptedPassword, encryptedPassword }, process.env.JWT_TOKEN, { expiresIn: 30 })

  return res.status(200).send(token)
}
