import { NowRequest, NowResponse } from '@now/node'
import { MongoClient } from 'mongodb'

let cachedDb = null

async function getDatabaseReference() {
  if (cachedDb) {
    console.log(`returning cached database =DDDD`)
    return cachedDb
  }

  const connection = await MongoClient.connect(process.env.MONGO_DATABASE_URL, { useNewUrlParser: true })
  const db = await connection.db(process.env.MONGO_DATABASE_NAME)

  cachedDb = db
  return db
}

export default async (req: NowRequest, res: NowResponse) => {
  
  const db = await getDatabaseReference()
  const collection = await db.collection('users')

  const users = await collection.find({}).toArray()

  res.status(200).json({ users })
}
