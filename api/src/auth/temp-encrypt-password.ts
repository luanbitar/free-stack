import { AES } from "crypto-js"

import { ILambda } from "../../utils/interfaces"
import { notHasPayload } from "../../utils/errors"
import { CRYPTO_CLIENT_SECRET } from "../../env.json"

const tempEncryptPassword: ILambda = (req, res) => {
  const { password } = req.body

  const encrypted = AES.encrypt(password, CRYPTO_CLIENT_SECRET).toString()

  return res.json({ encrypted })
}

export default notHasPayload(tempEncryptPassword)
