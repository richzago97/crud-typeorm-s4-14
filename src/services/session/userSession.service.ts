import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userLoginService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.findOneBy({ email });

  if (!users) {
    throw new Error("Account not found");
  }

  if (!users.password) {
    throw new Error("Password not found");
  }

  if (!bcrypt.compareSync(password, users.password)) {
    throw new Error("Wrong email/password");
  }

  const token = jwt.sign({ email: email }, String(process.env.SECRET_KEY), {
    expiresIn: "24h",
    subject: users.id,
  });

  return token;
};

export default userLoginService;
