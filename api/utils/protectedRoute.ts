import { verify } from "jsonwebtoken"

import { JWT_TOKEN } from "../env.json"
import { IZeitLambda, IUser, IContext } from "./interfaces"

const protectedRoutes: IZeitLambda = (lambda) => (req, res, context) => {
  const authorization = req.headers.authorization
  const hasAuthorizationHeader = authorization && authorization.length > 0

  if (!hasAuthorizationHeader)
    return res.json({
      error: "Provide Bearer token",
    })

  const token = (authorization && authorization.split(" ")[1]) || ""

  verify(token, JWT_TOKEN, (error, decryptedContent) => {
    if (error) return res.json({ error })

    const newContext: IContext = {
      ...context,
      user: decryptedContent as IUser,
    }

    lambda(req, res, newContext)
  })
}

export default protectedRoutes
