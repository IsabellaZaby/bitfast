import { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';

import 'src/assets/styles/index.scss';

import Layout from 'src/client/components/common/layout';
import Front from 'src/client/components/pages/front';
import Offline from 'src/client/components/pages/offline';
import NotFound from 'src/client/components/pages/not-found';
import Tasks from 'src/client/components/pages/tasks';
import Planet from 'src/client/components/pages/planet';
import { DeviceProvider } from 'src/client/contexts/device';

export enum clientRoutes {
    start = '/',
    tasks = '/task',
    offline = '/offline',
    planet = '/planet/*',
    notFound = '*',
}

const App: FunctionComponent = () => {
    return (
        <DeviceProvider>
            <Layout>
                <Routes>
                    <Route path={clientRoutes.start} element={<Front />} />
                    <Route path={clientRoutes.planet} element={<Planet />} />
                    <Route path={clientRoutes.tasks} element={<Tasks />} />
                    <Route path={clientRoutes.offline} element={<Offline />} />
                    <Route
                        path={clientRoutes.notFound}
                        element={<NotFound />}
                    />
                </Routes>
            </Layout>
        </DeviceProvider>
    );
};

App.displayName = 'App';

export default App;
