import { Lambda } from "./../../utils/interfaces"
import getDatabaseReference from "../../utils/db"
import protectedRoute from "../../utils/protectedRoute"

const getAllUsers: Lambda = async (_, res) => {
  const db = await getDatabaseReference()
  const collection = await db.collection("users")

  const users = await collection.find({}).toArray()

  return res.status(200).json({ users })
}

export default protectedRoute(getAllUsers)
