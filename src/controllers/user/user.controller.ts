import { Request, Response } from "express";
import userCreateService from "../../services/user/userCreate.service";
import userDeleteService from "../../services/user/userDelete.service";
import userListService from "../../services/user/userList.service";
import userUpdateService from "../../services/user/userUpdate.service";

const userCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, isAdm } = req.body;

    const newUser = await userCreateService({ name, email, password, isAdm });

    return res.status(201).send(newUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

const userListController = async (req: Request, res: Response) => {
  try {
    const users = await userListService();

    return res.send(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

const userDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await userDeleteService(id);

    return res.status(204).json({ message: "User deleted with sucess!" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const dataUser = req.body;
    const { id } = req.params;

    const [message, status] = await userUpdateService(dataUser, id);

    return res.status(status as number).json(message);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export {
  userCreateController,
  userListController,
  userDeleteController,
  userUpdateController,
};
