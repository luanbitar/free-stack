import { AES } from "crypto-js"
import { NowRequest, NowResponse } from "@now/node"

import { notHasPayload } from "../../_utils/errors"
import { CRYPTO_CLIENT_SECRET } from "../../env.json"

export default (req: NowRequest, res: NowResponse) => {
  if (notHasPayload(req, res)) return
  const { password } = req.body

  const encrypted = AES.encrypt(password, CRYPTO_CLIENT_SECRET).toString()

  return res.status(200).json({ encrypted })
}
