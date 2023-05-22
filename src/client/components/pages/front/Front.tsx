import { FunctionComponent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { clientRoutes } from 'src/client/components/App';
import { IPlanet } from 'src/client/interfaces/IPlanet';
import Navigation from 'src/client/components/common/navigation';
import StructuredData from 'src/client/components/common/structured-data';
import Card from 'src/client/components/common/card';

import styles from 'src/client/components/pages/front/Front.module.scss';
import Footer from 'src/client/components/common/footer';

const Front: FunctionComponent = () => {
    const [planets, setPlanets] = useState<IPlanet[]>([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/planets/')
            .then((res) => res.json())
            .then((data) => {
                const results: IPlanet[] = [];
                data.results.forEach((planet: IPlanet, index: number) => {
                    setTimeout(() => {
                        results.push(planet);
                        setPlanets([...results]);
                    }, index * 50);
                });
            });
    }, []);

    const planetMap = (planet: IPlanet, index: number) => (
        <Link key={`/planet/${index + 1}`} to={`/planet/${index + 1}`}>
            <Card key={planet.name} planet={planet} />
        </Link>
    );

    return (
        <>
            <Navigation>
                <Link to={clientRoutes.start}>Planets</Link>
                <Link to={clientRoutes.tasks}>Task</Link>
            </Navigation>
            <main className={styles.front}>
                {[...planets].reverse().map(planetMap)}
            </main>
            <StructuredData />
            <Footer />
        </>
    );
};

Front.displayName = 'Front';

export default Front;
