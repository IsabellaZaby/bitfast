import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { HttpStatus } from 'src/client/contexts/http';
import Navigation from 'src/client/components/common/navigation';

const NotFound: FunctionComponent = () => {
    return (
        <HttpStatus code={404}>
            <Navigation>
                <Link to="/">return</Link>
            </Navigation>
            <main>
                <h1>Not Found</h1>
            </main>
        </HttpStatus>
    );
};

NotFound.displayName = 'NotFound';

export default NotFound;
