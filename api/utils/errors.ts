import { IZeitLambda } from "./interfaces"

export const notHasPayload: IZeitLambda = (lambda) => (req, res) => {
  const notHasBodyPayload = !!req && !!req.body

  if (!notHasBodyPayload) {
    return res.json({ error: "Need to pass a payload" })
  }

  lambda(req, res)
}
