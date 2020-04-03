import getDatabaseReference from "../../utils/db"
import { notHasPayload } from "../../utils/errors"
import protectedRoute from "../../utils/protectedRoute"

export default protectedRoute(async (req, res) => {
  if (notHasPayload(req, res)) return

  const user = req.body

  const db = await getDatabaseReference()
  const collection = await db.collection("users")

  const response = await collection.insertOne(user)

  res.status(200).json({ response })
})
