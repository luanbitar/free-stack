import { NowRequest, NowResponse } from '@now/node'
import mongoose from 'mongoose'

export default async (req: NowRequest, res: NowResponse) => {
  
  const connection = await mongoose.connect(process.env.MONGO_DATABASE_URL, { useNewUrlParser: true })
  console.log(connection.listCollections)

  res.status(200).send({ MONGO_DATABASE_URL: process.env.MONGO_DATABASE_URL})
}
