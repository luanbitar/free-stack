import { getCollection } from "../../utils/db"
import { notHasPayload } from "../../utils/errors"
import { ILambda, IUser } from "./../../utils/interfaces"
import {
  signToken,
  decryptPasswordFromRequest,
  encryptPasswordToDatabase,
} from "../../utils/auth"

const login: ILambda = async (req, res) => {
  const { email, password } = req.body
  const collection = await getCollection("users")

  const user: IUser | null = await collection.findOne({
    email,
  })
  if (!user) return res.status(200).send({ error: "User not found." })

  const inputedPurePassword = decryptPasswordFromRequest(password)
  const inputedCipherPassword = encryptPasswordToDatabase(inputedPurePassword)
  const dbPassword = user.password

  const isInvalidPassword = inputedCipherPassword !== dbPassword
  if (isInvalidPassword)
    return res.status(200).send({
      error: "Invalid password.",
    })

  const token = signToken({ user })
  return res.status(200).send({ token })
}

export default notHasPayload(login)
