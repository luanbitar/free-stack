import { sign } from "jsonwebtoken"

import { JWT_TOKEN } from "../../env.json"

function signToken(user: any): string {
  return sign(user, JWT_TOKEN, { expiresIn: 30 })
}

export default signToken
