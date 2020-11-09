const { setQueues, router } = require('bull-board/dist/index');
const { Queue } = require('bullmq');

const app = require('express')();

const run = async () => {
    setQueues([
        new Queue('find-user')
    ]);

    app.use('/ui', router);

    app.listen(3000, () => {
        console.log('Queue Dashboard running on 3000...');
        console.log('For the UI, open http://localhost:3000/ui');
        console.log('Make sure Redis is running on port 6379 by default');
    });
}

run();