import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const userUpdateService = async (
  dataUser: Partial<User>,
  id: string
): Promise<Array<object | number>> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);
  const data = Object.keys(dataUser);
  if (data.includes("isAdm")) {
    return [{ message: "Not Possible update isAdm" }, 401];
  }
  if (data.includes("isActive")) {
    return [{ message: "Not Possible update isActive" }, 401];
  }
  if (data.includes("id")) {
    return [{ message: "Not Possible update id" }, 401];
  }

  await userRepository.update(account!.id, {
    ...account,
    ...dataUser,
    updatedAt: new Date(),
  });

  return [{ message: "Updated!" }, 200];
};
export default userUpdateService;
