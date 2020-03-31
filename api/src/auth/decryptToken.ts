import protectedRoute from "../../_utils/protectedRoute"

export default protectedRoute((_, res, decryptedContent) => {
  res.status(200).send({ decryptedContent })
})
