import protectedRoute from "../../utils/protectedRoute"

export default protectedRoute((_, res, decryptedContent) => {
  return res.status(200).send({ decryptedContent })
})
