
import * as cluster from 'cluster';
const thisCluster = (cluster as any) as cluster.Cluster;


export class ClusterConfig {

    private workers:any = [];

    /**
     * Set Up Worker as The number of core available
     *
     * @memberof ClusterConfig
     */

    setupWorker = (): void => {
        let numCores = require('os').cpus().length;
        console.log('Master cluster setting up ' + numCores + ' workers');

        for (let i = 0; i < numCores; i++) {
            // creating workers and pushing reference in an array
            // these references can be used to receive messages from workers
            this.workers.push(thisCluster.fork());

            // to receive messages from worker process
            this.workers[i].on('message', function (message:string) {
                console.log(message);
            });
        }

        thisCluster.on('online', function (worker:any) {

            console.log(worker);
            console.log('Worker ' + worker.process.pid + ' is listening');
            
        });

        thisCluster.on('exit',  (worker:any, code:any, signal:any) => {
            console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
            console.log('Starting a new worker');
            thisCluster.fork();
            this.workers.push(thisCluster.fork());
            // to receive messages from worker process
            this.workers[this.workers.length - 1].on('message', function (message:string) {
                console.log(message);
            });
        });
    }
    /**
     * Initilise the Worked if Master is called
     * Return True for Worker 
     * 
     * @param isClusterEnable is Cluster is apply or not, True if you want create cluster
     * @param callback Return true in case worker if Clustering is enable
     * @param callback Return true in case clutering is not enable
     *
     * @memberof ClusterConfig
     */
    initaliseCLuster = (isClusterEnable: boolean, callback: (isReady: boolean) => void) => {
        if (isClusterEnable && thisCluster.isMaster) {
            this.setupWorker();
        } else {
            callback(true);
        }
    }
}