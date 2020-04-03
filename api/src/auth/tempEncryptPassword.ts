import { AES } from "crypto-js"

import { Lambda } from "./../../utils/interfaces"
import { notHasPayload } from "../../utils/errors"
import { CRYPTO_CLIENT_SECRET } from "../../env.json"

const tempEncryptPassword: Lambda = (req, res) => {
  const { password } = req.body

  const encrypted = AES.encrypt(password, CRYPTO_CLIENT_SECRET).toString()

  return res.json({ encrypted })
}

export default notHasPayload(tempEncryptPassword)
