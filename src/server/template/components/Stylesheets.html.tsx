import { FunctionComponent } from 'react';
import { readdirSync } from 'fs';
import { resolve, extname } from 'path';
import Logger from 'src/server/utils/logger';

interface IStylesheetProps {
    nonce: string;
    isProduction: boolean;
}
export type StylesheetProps = IStylesheetProps;

let styleFiles: string[] = [];

try {
    styleFiles = readdirSync(resolve(__dirname + '/../client/css')).filter(
        (fileName) => extname(fileName) === '.css',
    );
} catch (allFilesError) {
    Logger.warn('HTML-Template: no css files found in current context');
}

const Stylesheets: FunctionComponent<StylesheetProps> = (
    props: StylesheetProps,
) => {
    return (
        <>
            {styleFiles.map((file) => (
                <link
                    key={file}
                    nonce={props.nonce}
                    rel="stylesheet"
                    href={`/css/${file}`}
                />
            ))}
        </>
    );
};

Stylesheets.displayName = 'SSRStylesheets';

export default Stylesheets;
