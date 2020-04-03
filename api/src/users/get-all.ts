import getDatabaseReference from "../../utils/db"
import protectedRoute from "../../utils/protectedRoute"

export default protectedRoute(async (_, res) => {
  const db = await getDatabaseReference()
  const collection = await db.collection("users")

  const users = await collection.find({}).toArray()

  return res.status(200).json({ users })
})
