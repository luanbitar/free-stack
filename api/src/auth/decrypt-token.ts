import { ILambda } from "../../utils/interfaces"
import protectedRoute from "../../utils/protectedRoute"

const decryptToken: ILambda = (_, res, context) => {
  return res.status(200).send({ context })
}

export default protectedRoute(decryptToken)
