import { createServer, IncomingMessage, ServerResponse } from 'http';
import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

type RustMockExceptionableFunctionResolution = { statusCode: string; internalKey: string; }

type EmailSendResponse = {
    ok?: () => RustMockExceptionableFunctionResolution;
    err?: (err: Error) => RustMockExceptionableFunctionResolution;
};

type EmailConstruct = {
    subject: string;
    sender: string;
    recipient: string;
    send: (mailOptions: Mail.Options) => EmailSendResponse;
};

class EmailEntity {
    constructor() {}
}

const PORT = process.env.PORT || 4501 as const;

const style = `color: cyan; margin: 4rem; font-family: serif; font-style: italic;`

const handleSendEmail = (email: EmailConstruct) => {};

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end(`<p style="${style}">hello world</p>`)
});

server.listen(PORT, () => console.info('server listening on port ' + PORT));
