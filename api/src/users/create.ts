import { Lambda } from "./../../utils/interfaces"
import getDatabaseReference from "../../utils/db"
import { notHasPayload } from "../../utils/errors"
import protectedRoute from "../../utils/protectedRoute"

const createUser: Lambda = async (req, res) => {
  const user = req.body

  const db = await getDatabaseReference()
  const collection = await db.collection("users")

  const response = await collection.insertOne(user)

  res.status(200).json({ response })
}

export default protectedRoute(notHasPayload(createUser))
