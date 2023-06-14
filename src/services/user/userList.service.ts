import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { removePassword } from "../../utils/removePassword";

const userListService = async (): Promise<User[]> => {
   const userRepository = AppDataSource.getRepository(User);

   const users = await userRepository.find();

   const usersWithoutPassword = users.map((user: User) => removePassword(user));

   return usersWithoutPassword;
};
export default userListService;
