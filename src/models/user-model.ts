export interface UserModel{
    "id": string,
    "name": string,
    "username": string,
    "email": string,
    "phone": string
}
export interface UserArrayModel{
    all_users:UserModel[],
    individual_user:UserModel
}