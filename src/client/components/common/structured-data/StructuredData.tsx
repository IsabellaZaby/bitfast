import { FunctionComponent, useContext } from 'react';
import { AppStateContext } from 'src/client/contexts/app-state';

const buildJsonLd = () => {
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'BitFast',
        description: 'this application is just a ... bit fast...',
        url: 'https://bitfast-zo7vewfmma-oa.a.run.app/',
    });
};

const jsonLd = buildJsonLd();

const StructuredData: FunctionComponent = () => {
    const { nonce } = useContext(AppStateContext);
    return (
        <script
            nonce={nonce}
            type="application/ld+json"
            suppressHydrationWarning={true}
            dangerouslySetInnerHTML={{
                __html: jsonLd,
            }}
        />
    );
};

StructuredData.displayName = 'StrucuredData';

export default StructuredData;
