export interface IBasicUser {
    name: string
    password: string
}
export interface IUser extends IBasicUser {
    isRegister: boolean
}

export interface IUserDb extends IBasicUser {
    _id: string
}