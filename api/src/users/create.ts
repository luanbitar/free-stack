import { getCollection } from "../../utils/db"
import { notHasPayload } from "../../utils/errors"
import { ILambda, IUser } from "./../../utils/interfaces"
import {
  decryptPasswordFromRequest,
  encryptPasswordToDatabase,
} from "../../utils/auth"

const createUser: ILambda = async (req, res) => {
  const { email, password: inputedPassword } = req.body
  const collection = await getCollection("users")

  const alreadyExistsUser: IUser | null = await collection.findOne({
    email,
  })
  if (!!alreadyExistsUser)
    return res.status(200).send({ error: "User already exists." })

  const decryptedPassword = decryptPasswordFromRequest(inputedPassword)
  const password = encryptPasswordToDatabase(decryptedPassword)

  const response = await collection.insertOne({ email, password })

  return res.status(200).json({ response })
}

export default notHasPayload(createUser)
