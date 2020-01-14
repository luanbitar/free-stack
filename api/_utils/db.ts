import { MongoClient } from 'mongodb'

let cachedDb = null

export default async function getDatabaseReference() {
  if (cachedDb) return cachedDb

  const connection = await MongoClient.connect(process.env.MONGO_DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  const db = await connection.db(process.env.MONGO_DATABASE_NAME)

  cachedDb = db
  return db
}