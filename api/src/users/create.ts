import getDatabaseReference from "../../_utils/db"
import { notHasPayload } from "../../_utils/errors"
import protectedRoute from "../../_utils/protectedRoute"

export default protectedRoute(async (req, res) => {
  if (notHasPayload(req, res)) return

  const user = req.body

  const db = await getDatabaseReference()
  const collection = await db.collection("users")

  const response = await collection.insertOne(user)

  res.status(200).json({ response })
})
