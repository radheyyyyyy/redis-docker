const redis=require('redis')

const client=redis.createClient(
    {url:"redis://redisQueue:6379"}
);



async function run(){
    console.log("Worker 2 started successfully");
    try{
        await client.connect();
        while (1) {
            const data = await client.brPop("users", 0);
            console.log(data);
        }

    }
    catch (err){
        console.log("Worker2:"+"\n"+err);
    }

}

run()