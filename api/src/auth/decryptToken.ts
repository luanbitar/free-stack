import { NowRequest, NowResponse } from "@now/node"

import protectedRoute from "../../_utils/protectedRoute"

export default protectedRoute(
  (req: NowRequest, res: NowResponse, decryptedContent: any) => {
    res.status(200).send({ decryptedContent })
  },
)
