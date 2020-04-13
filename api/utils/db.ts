import { MongoClient, Db, Collection } from "mongodb"

import { MONGO_DATABASE_URL, MONGO_DATABASE_NAME } from "../env.json"

let cachedDb: Db | null = null

async function getDatabaseReference(): Promise<Db> {
  if (cachedDb) return cachedDb

  const connection = await MongoClient.connect(MONGO_DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db: Db = connection.db(MONGO_DATABASE_NAME)

  cachedDb = db
  return db
}

export default getDatabaseReference

export async function getCollection(
  collection: string,
): Promise<Collection<any>> {
  const db = await getDatabaseReference()

  const collectionReference = db.collection(collection)
  return collectionReference
}
