import { Lambda } from "./../../utils/interfaces"
import { notHasPayload } from "../../utils/errors"
import signToken from "../../utils/login/signToken"
import encryptPasswordToDatabase from "../../utils/login/encryptPasswordToDatabase"
import decryptPasswordFromRequest from "../../utils/login/decryptPasswordFromRequest"

const login: Lambda = (req, res) => {
  const { userName, password } = req.body

  const decryptedPassword = decryptPasswordFromRequest(password)

  const encryptedPassword = encryptPasswordToDatabase(decryptedPassword)

  // find username and password
  // if is not found, return 404 error
  // finally sign jwt and return

  const token = signToken({ userName, decryptedPassword, encryptedPassword })

  return res.status(200).send({ token })
}

export default notHasPayload(login)
