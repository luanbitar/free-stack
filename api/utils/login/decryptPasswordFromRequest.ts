import { AES, enc } from "crypto-js"

import { CRYPTO_CLIENT_SECRET } from "../../env.json"

function decryptPasswordFromRequest(password: string): string {
  return AES.decrypt(password, CRYPTO_CLIENT_SECRET).toString(enc.Utf8)
}

export default decryptPasswordFromRequest
