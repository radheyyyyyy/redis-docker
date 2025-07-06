const redis = require('redis');
const express=require('express');
const app=express();
app.use(express.json());
const client=redis.createClient(
    {url:"redis://redisQueue:6379"}
);

client.connect().then(()=>{
    console.log("Connected to redis!");
}).catch(err=>{console.log(err)})

app.post("/",async (req,res)=>{
    const {email,pass}=req.body;
    try {
        await client.lPush("users", JSON.stringify({email, pass}));

        res.json({
            msg: "added to redis queue"
        })
    }
    catch (err){
        console.log(err);
        res.json({
            msg:"failed to push"
        })
    }
});

app.listen(3000)