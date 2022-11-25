import React from 'react';
import ReactDOM from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import { HomePage } from './src/subpackages/home';
import { RegionPage } from './src/subpackages/region';

const pages = [
    {
        component: HomePage,
        filename: 'home.ssg.html',
    },
    {
        component: RegionPage,
        filename: 'region.ssg.html'
    }
] as const;

let templateHtml: string;

try {
    templateHtml = fs.readFileSync(
        path.resolve(
            process.cwd(), 'html', 'ssg.template.html'
          ),
        { encoding: 'utf-8' }
    );
} catch (e: any) {
    console.log('>compile-static-markup.js - operation throws error');
    console.error((e as Error).message, (e as Error).stack);
    throw e as Error;
}

const htmlArray = templateHtml.split("{{#app}}");

let entryHtmlSnippet = htmlArray[0];
let exitHtmlSnippet = htmlArray[1];

if (
    typeof entryHtmlSnippet === 'undefined' ||
    typeof exitHtmlSnippet === 'undefined'
) {
    throw new Error(
        'issue parsing html template. aborting operation;'
    );
}

function writeMarkupFromPipeableStream(){
    try {
        console.log('>compile-static-markup.js - operation begin')
        for (const page of pages) {
            let writeStream = fs.createWriteStream(path.resolve(process.cwd(), '.generated-markup', page.filename));
            writeStream.write(entryHtmlSnippet, (err) => {
                if (err) {
                    console.error((err as Error).message); // echo the error
                    writeStream.end(); // close the stream
                    throw err; // rethrow the error
                } else {
                    console.log('>compile-static-markup.js - wrote entryHtmlSnippet to stream!');
                }
            });
            const { component: Page } = page;
            const pageStream = ReactDOM.renderToPipeableStream(
                <Page />,
                {
                    onShellError(error) {
                        console.log('>compile-static-markup.js - operation throws error');
                        console.error((error as Error).message, (error as Error).stack);
                        writeStream.end();
                        throw error;
                    },
                    onError(error) {
                        console.log('>compile-static-markup.js - operation throws error');
                        console.error((error as Error).message, (error as Error).stack);
                        writeStream.end();
                        throw error;
                    },
                    onAllReady(){
                        pageStream.pipe(writeStream);
                        let isWriteable = writeStream.write(
                            exitHtmlSnippet,
                            (err) => {
                                if (err) {
                                    console.error((err as Error).message); // echo the error
                                    writeStream.end(); // close the stream
                                    throw err; // rethrow the error
                                }
                            }
                        );

                        if (!isWriteable) {
                            // drain the stream buffer if the app has filled its internal buffer / eclipsed high water mark
                            writeStream.once('drain', () => {
                                console.log('write stream buffer filled. queueing drain event');
                            })
                            writeStream.write(
                                exitHtmlSnippet,
                                (err) => {
                                    if (err) {
                                        console.error((err as Error).message); // echo the error
                                        writeStream.end(); // close the stream
                                        throw err; // rethrow the error
                                    }
                                }
                            );
                        }

                        writeStream.end();
                    }
                }
            );
        }
    } catch (e: any) {
        console.log('>compile-static-markup.js - operation throws error');
        console.error((e as Error).message, (e as Error).stack);
    } finally {
        console.log('>compile-static-markup.js - operation ended')
    }
}

writeMarkupFromPipeableStream();
