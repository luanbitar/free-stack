import { NowRequest, NowResponse } from "@now/node"

import { notHasPayload } from "../../_utils/errors"
import signToken from "../../_utils/login/signToken"
import encryptPasswordToDatabase from "../../_utils/login/encryptPasswordToDatabase"
import decryptPasswordFromRequest from "../../_utils/login/decryptPasswordFromRequest"

export default (req: NowRequest, res: NowResponse) => {
  if (notHasPayload(req, res)) return

  const { userName, password } = req.body

  const decryptedPassword = decryptPasswordFromRequest(password)

  const encryptedPassword = encryptPasswordToDatabase(decryptedPassword)

  // find username and password
  // if is not found, return 404 error
  // finally sign jwt and return

  const token = signToken({ userName, decryptedPassword, encryptedPassword })

  return res.status(200).send(token)
}
