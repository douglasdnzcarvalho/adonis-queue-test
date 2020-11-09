import QueueService from "App/Services/QueueService";

export default class UsersController {
    async index(){
        return QueueService.addJob('find-user', { user_id: 10 });
    }
}
