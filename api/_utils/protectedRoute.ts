import { verify } from "jsonwebtoken"
import { NowRequest, NowResponse } from "@now/node"

import { JWT_TOKEN } from "../env.json"

export type Lambda = (
  req: NowRequest,
  res: NowResponse,
  decryptedContent: any,
) => any

export default (lambda: Lambda) => (req: NowRequest, res: NowResponse) => {
  const authorization = req.headers.authorization
  const hasAuthorizationHeader = authorization && authorization.length > 0

  if (!hasAuthorizationHeader)
    return res.status(401).send({
      error: {
        name: `BearerTokenNotProvided`,
        message: `Provide Bearer token`,
      },
    })

  const token = (authorization && authorization.split(" ")[1]) || ""

  verify(token, JWT_TOKEN, (error, decryptedContent) => {
    if (error) return res.status(401).send({ error })

    lambda(req, res, decryptedContent)
  })
}
