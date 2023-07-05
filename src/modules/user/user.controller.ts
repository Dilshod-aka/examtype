import { Request, Response } from "express";
import userServer from "./user.server";

class UserController {

    async getAllUser(req: Request, res: Response): Promise<void> {
        const users = await userServer.getAll();
        res.send(users);
    }

    async createUser (req: Request, res: Response): Promise<void> {
       const {username, password} = req.body;
       const users = await userServer.createUser(username, password);
       res.status(201).send(users);
    }

    async updateUser (req: Request, res: Response): Promise<void> {
        const {username} = req.body;
        const {userId } = req.params;
        const users = await userServer.updateUser(+userId, username);
        res.status(201).send(users); 
     }

     async deleteUser(req: Request, res: Response): Promise<void> {
        const {userId } = req.params;
        const users = await userServer.deleteUser(+userId);
        res.status(201).send(users); 
     }

     async getById(req: Request, res: Response): Promise<void> {
        const {userId } = req.params;
        const users = await userServer.deleteUser(+userId);
        res.status(201).send(users); 
     }
}

export default new UserController();