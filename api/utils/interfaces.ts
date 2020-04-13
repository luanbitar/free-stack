import { NowRequest, NowResponse } from "@now/node"

export interface IErrorObject {
  error: string | IError
}

export interface IError {
  message?: string
  type?: string | number
}

export interface IUser {
  email: string
  password: string
}

export interface IContext {
  user?: IUser
}

export type ILambda = (
  req: NowRequest,
  res: NowResponse,
  context?: IContext,
) => NowResponse | Promise<NowResponse> | any

export type IZeitLambda = (lambda: ILambda) => ILambda
