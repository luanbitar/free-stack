import getDatabaseReference from "../../_utils/db"
import protectedRoute from "../../_utils/protectedRoute"

export default protectedRoute(async (_, res) => {
  const db = await getDatabaseReference()
  const collection = await db.collection("users")

  const users = await collection.find({}).toArray()

  res.status(200).json({ users })
})
