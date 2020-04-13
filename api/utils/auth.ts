import { sign } from "jsonwebtoken"
import { SHA3, AES, enc } from "crypto-js"

import { JWT_TOKEN, CRYPTO_CLIENT_SECRET } from "../env.json"

export function signToken(user: any): string {
  return sign(user, JWT_TOKEN, { expiresIn: "1 day" })
}

export function encryptPasswordToDatabase(password: string): string {
  return SHA3(password).toString()
}

export function decryptPasswordFromRequest(password: string): string {
  return AES.decrypt(password, CRYPTO_CLIENT_SECRET).toString(enc.Utf8)
}
