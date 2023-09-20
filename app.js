import express from 'express';

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use('/', (req,res) => {
    return res.status(200).json({ message: "Hello from AWS"});
})

app.listen(3001);