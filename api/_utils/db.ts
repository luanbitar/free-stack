import { MongoClient } from "mongodb"

import { MONGO_DATABASE_URL, MONGO_DATABASE_NAME } from "../env.json"

let cachedDb: any = null

export default async function getDatabaseReference() {
  if (cachedDb) return cachedDb

  const connection = await MongoClient.connect(MONGO_DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = await connection.db(MONGO_DATABASE_NAME)

  cachedDb = db
  return db
}
