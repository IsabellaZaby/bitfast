import { FunctionComponent } from 'react';
import { StaticRouter } from 'react-router-dom/server';

import App, { clientRoutes } from 'src/client/components/App';
import Javascript from 'src/server/template/components/Javascript.html';
import Stylesheets from 'src/server/template/components/Stylesheets.html';
import { HttpContextData, HttpProvider } from 'src/client/contexts/http';
import { AppStateProvider } from 'src/client/contexts/app-state';

interface IIndexProps {
    isProduction: boolean;
    location: string;
    useCSR: boolean;
    nonce: string;
    httpContextData: HttpContextData;
}

export type IndexProps = IIndexProps;

const Index: FunctionComponent<IIndexProps> = (props: IIndexProps) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link
                    rel="canonical"
                    href="https://bitfast-zo7vewfmma-oa.a.run.app/"
                />

                <title>BitFast</title>

                <meta
                    name="description"
                    content="this application is just a ... bit fast..."
                />

                <meta
                    name="theme-color"
                    media="(prefers-color-scheme: light)"
                    content="#faf2e2"
                />
                <meta
                    name="theme-color"
                    media="(prefers-color-scheme: dark)"
                    content="#000b2c"
                />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />

                <link rel="manifest" href="/manifest.json" />
                <link rel="preload" href="/Kamino-small.jpg" as="image"/>
            </head>
            <body>
                <div id="root">
                    <AppStateProvider
                        context={{
                            nonce: props.nonce,
                            isProduction: props.isProduction,
                        }}
                    >
                        <HttpProvider context={props.httpContextData}>
                            <StaticRouter location={props.location}>
                                <App />
                            </StaticRouter>
                        </HttpProvider>
                    </AppStateProvider>
                </div>
            </body>
            {props.useCSR && !(props.location === clientRoutes.offline) && (
                <Javascript
                    nonce={props.nonce}
                    isProduction={props.isProduction}
                />
            )}
            <Stylesheets
                isProduction={props.isProduction}
                nonce={props.nonce}
            />
        </html>
    );
};

Index.displayName = 'SSRIndex';

export default Index;
