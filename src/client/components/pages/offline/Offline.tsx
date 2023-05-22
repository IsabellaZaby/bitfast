import { FunctionComponent } from 'react';
import Navigation from 'src/client/components/common/navigation';

const Offline: FunctionComponent = () => {
    return (
        <>
            <Navigation>
                <a href="">refresh</a>
            </Navigation>
            <main>
                <h1>You are Offline!</h1>
                <p>Come back whenever you are ready :)</p>
            </main>
        </>
    );
};

Offline.displayName = 'Offline';

export default Offline;
