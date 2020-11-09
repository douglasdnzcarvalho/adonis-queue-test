import { IocContract } from '@adonisjs/fold';
import QueueService from 'App/Services/QueueService';

export default class AppProvider {
  constructor (protected $container: IocContract) {
  }

  public register () {
    // Register your own bindings
  }

  public boot () {
    // IoC container is ready
  }

  public async shutdown () {
    // Cleanup, since app is going down

    await QueueService.shutdown();
  }

  public ready () {
    // App is ready

    QueueService.initialize();
  }
}
