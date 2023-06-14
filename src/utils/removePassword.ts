import { User } from "../entities/user.entity";

export const removePassword = (user: User) => {
   const { password, ...userResponse } = user;
   return userResponse;
};
