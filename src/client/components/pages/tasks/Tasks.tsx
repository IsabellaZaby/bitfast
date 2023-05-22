import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Navigation from 'src/client/components/common/navigation';
import styles from 'src/client/components/pages/tasks/Tasks.module.scss';

const Tasks: FunctionComponent = () => {
    return (
        <>
            <Navigation>
                <Link to="/">Start</Link>
            </Navigation>
            <main className={styles.tasks}>
                <h1>Task</h1>
                <p>Find as many performance bottlenecks as you can</p>

                <ol>
                    <li>
                        Ignore all pages other than the front page (planet
                        overview page)
                    </li>
                    <li>Get a representative Lighthouse Score</li>
                    <li>
                        Use the Performance Panel in the Chrome Dev Tools as
                        well as other relevant tools you can think of for a
                        detailed performance analysis.
                    </li>
                    <li>
                        Privately write down whatever performance issue you
                        find, as well as your suggestion on how to solve it.
                    </li>
                    <li>
                        Give an estimation on which score you think is reachable
                    </li>
                </ol>
                <h2>Hints</h2>
                <ul>
                    <li>
                        Functionality and general design/layout of the
                        Application should stay the same after improvements
                        (even if it is not pretty 🙈)
                    </li>
                    <li>
                        Data comes from{' '}
                        <Link to="https://swapi.dev/">swapi.dev</Link>.
                    </li>
                    <li>
                        The src folder of this repository contains ~1100 lines
                        of code (without comments/blank lines)
                    </li>
                </ul>
            </main>
        </>
    );
};

Tasks.displayName = 'Tasks';

export default Tasks;
