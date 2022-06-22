import { createServer, Server } from 'http';
import express, { NextFunction, Request, Response } from 'express';

const expressApp = express();

/**
 * Ease of use with middleware impl
 */
/** Middleware that hits every route */
expressApp.use((req: Request, _res: Response, next: NextFunction ) => {
    console.log(`hitting middleware for ${req.path} route`);
    next();
});

expressApp.get('/bar', (req: Request, res: Response) => {
    res.send(`
    <div style="padding:2rem;color:deeppink;font:sans-serif;">
        ${req.method + ' /bar'}
    </div>
    `);
});

/** Middleware that hits a specific route */
/** Middleware that express offers out of the box to assist in POST reqs */
expressApp.use(express.urlencoded({ extended: true }));
expressApp.use('/foo', express.json());
expressApp.post('/foo', (req: Request, res: Response) => {
    res.send(`
    <div style="padding:2rem;color:deeppink;font:sans-serif;">
        ${JSON.stringify(req.body)}
    </div>
    `);
});

const server: Server = createServer(expressApp);

server.listen(3001, () => console.log('server live on port 3001'));