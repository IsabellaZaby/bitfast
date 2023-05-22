import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/client/components/App';
import registerServiceWorker from 'src/client/utils/register-service-worker';
import { AppStateProvider } from 'src/client/contexts/app-state';

const domNode = document.getElementById('root');

if (domNode) {
    const root = createRoot(domNode);
    root.render(
        <StrictMode>
            <AppStateProvider context={window.__initial_state__}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AppStateProvider>
        </StrictMode>,
    );
}

if (window.__initial_state__?.isProduction) {
    registerServiceWorker();
}
