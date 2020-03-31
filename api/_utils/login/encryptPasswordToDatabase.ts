import { TripleDES } from "crypto-js"

import { CRYPTO_DB_SECRET } from "../../env.json"

function encryptPasswordToDatabase(password: string): string {
  return TripleDES.encrypt(password, CRYPTO_DB_SECRET).toString()
}

export default encryptPasswordToDatabase
