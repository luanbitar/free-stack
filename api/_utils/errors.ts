import { NowRequest, NowResponse } from '@now/node'

export const notHasPayload = (req: NowRequest | void, res: NowResponse): boolean => {
  const hasBodyPayload = req && req.body
  if(!hasBodyPayload) {
    res.status(406).send({ error: "Need to pass a payload" })
  }
  return !hasBodyPayload
}