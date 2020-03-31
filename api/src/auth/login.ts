import { sign } from "jsonwebtoken"
import { AES, TripleDES, enc } from "crypto-js"
import { NowRequest, NowResponse } from "@now/node"

import { notHasPayload } from "../../_utils/errors"
import {
  CRYPTO_CLIENT_SECRET,
  CRYPTO_DB_SECRET,
  JWT_TOKEN,
} from "../../env.json"

export default (req: NowRequest, res: NowResponse) => {
  if (notHasPayload(req, res)) return
  const { userName, password } = req.body

  // decrypt password bridge AES
  const decryptedPassword = AES.decrypt(
    password,
    CRYPTO_CLIENT_SECRET,
  ).toString(enc.Utf8)

  // crypt password to db TripleDES
  const encryptedPassword = TripleDES.encrypt(
    decryptedPassword,
    CRYPTO_DB_SECRET,
  ).toString()

  // find username and password

  // if is not found, return 404 error

  // finally sign jwt and return
  const token = sign(
    { userName, decryptedPassword, encryptedPassword },
    JWT_TOKEN,
    { expiresIn: 30 },
  )

  return res.status(200).send(token)
}
