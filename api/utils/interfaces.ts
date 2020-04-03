import { NowRequest, NowResponse } from "@now/node"

export interface User {
  name: string
  email: string
}

export interface Context {
  user?: User
}

export type Lambda = (
  req: NowRequest,
  res: NowResponse,
  context?: Context,
) => NowResponse | Promise<NowResponse> | any

export type ZeitLambda = (lambda: Lambda) => Lambda
