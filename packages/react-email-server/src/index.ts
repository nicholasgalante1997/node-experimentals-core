import { createServer, IncomingMessage, ServerResponse } from 'http';
import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const PORT = process.env.PORT || 4501 as const;

const style = `color: cyan; margin: 4rem; font-family: serif; font-style: italic;`

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end(`<p style="${style}">hello world</p>`)
});

server.listen(PORT, () => console.info('server listening on port ' + PORT));
