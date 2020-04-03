import { verify } from "jsonwebtoken"

import { JWT_TOKEN } from "../env.json"
import { ZeitLambda, User, Context } from "./interfaces"

const protectedRoutes: ZeitLambda = lambda => (req, res, context) => {
  const authorization = req.headers.authorization
  const hasAuthorizationHeader = authorization && authorization.length > 0

  if (!hasAuthorizationHeader)
    return res.json({
      error: "Provide Bearer token",
    })

  const token = (authorization && authorization.split(" ")[1]) || ""

  verify(token, JWT_TOKEN, (error, decryptedContent) => {
    if (error) return res.json({ error })

    const newContext: Context = {
      ...context,
      user: decryptedContent as User,
    }

    lambda(req, res, newContext)
  })
}

export default protectedRoutes
