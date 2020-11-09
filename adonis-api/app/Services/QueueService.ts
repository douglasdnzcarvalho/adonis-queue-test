import UserFinder from "App/Jobs/UserFinder";
import { Job, Queue, Worker } from "bullmq";

class QueueService {
    private isReady = false;
    private queues = new Map<string, [Queue, Worker]>();

    public initialize(){
        if(this.isReady) return;
        
        const queue1Name = 'find-user';
        const queue1 = new Queue(queue1Name);
        const worker1 = new Worker(queue1Name,  UserFinder);

        worker1.on('completed', (job: Job)=>{
            console.log(`Job ${job.id} completed!`);
        });

        this.queues.set(queue1Name, [queue1, worker1]);

        this.isReady = true;
    }

    public async shutdown(){
        for (let [queueName, [, worker]] of this.queues){
            console.log(`Closing worker for queue ${queueName}...`);

            await worker.close();
            
            this.queues.delete(queueName);
        }
    }

    public addJob(queueName: string, data: {}){
        let tuple = this.queues.get(queueName);

        if(tuple == undefined) throw new Error("Invalid queue name");

        return tuple[0].add(queueName, data);   
    }
}

/**
 * This makes our service a singleton
 */
export default new QueueService();