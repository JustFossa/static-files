import express, { Request, Response } from 'express';
import path from "path"
import serveIndex from 'serve-index';

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../static")))
app.use("/static", serveIndex(path.join(__dirname, "../static"), { icons: true }))

app.get("/static/:file", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../static", req.params.file))
})

app.listen(5001, () => {
    console.log('Server listening on port 5001');
});
