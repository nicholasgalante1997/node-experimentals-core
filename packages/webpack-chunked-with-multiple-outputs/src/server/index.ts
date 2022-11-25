import { createServer } from 'http';
import express from 'express';
import cors from 'cors';
import path from 'path';

const PORT = process.env.PORT || 8000;

const expressServer = express();

expressServer.use(cors());
expressServer.use(express.json());
expressServer.use(express.static(path.resolve(process.cwd(), '.out')));

const httpServer = createServer(expressServer);

httpServer.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
