import { ILambda } from "./../../utils/interfaces"
import { getCollection } from "../../utils/db"
import protectedRoute from "../../utils/protectedRoute"

const getAllUsers: ILambda = async (_, res) => {
  const collection = await getCollection("users")

  const users = await collection.find({}).toArray()

  return res.status(200).json({ users })
}

export default protectedRoute(getAllUsers)
