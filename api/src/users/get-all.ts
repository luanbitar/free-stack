import { NowRequest, NowResponse } from "@now/node"

import getDatabaseReference from "../../_utils/db"
import protectedRoute from "../../_utils/protectedRoute"

export default protectedRoute(async (req: NowRequest, res: NowResponse) => {
  const db = await getDatabaseReference()
  const collection = await db.collection("users")

  const users = await collection.find({}).toArray()

  res.status(200).json({ users })
})
