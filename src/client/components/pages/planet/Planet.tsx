import { FunctionComponent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { clientRoutes } from 'src/client/components/App';
import { IPlanet } from 'src/client/interfaces/IPlanet';
import Navigation from 'src/client/components/common/navigation';

import styles from 'src/client/components/pages/planet/Planet.module.scss';

const Planet: FunctionComponent = () => {
    const [planet, setPlanet] = useState<IPlanet | null>(null);

    function fetchPlanet() {
        const index = window.location.pathname.split('/')[2];
        fetch(`https://swapi.dev/api/planets/${index}`)
            .then((res) => res.json())
            .then((data: IPlanet) => {
                setPlanet(data);
            });
    }

    useEffect(() => {
        fetchPlanet();
    }, []);

    return (
        <>
            <Navigation>
                <Link to="/">Planets</Link>
                <Link to={clientRoutes.tasks}>Task</Link>
            </Navigation>
            <main>
                <article className={styles.planet}>
                    {planet ? (
                        <>
                            <div>
                                <h1>{planet.name}</h1>
                                <ul>
                                    <li>
                                        <strong>Population: </strong>
                                        {planet.population}
                                    </li>
                                    <li>
                                        <strong>Climate: </strong>
                                        {planet.climate}
                                    </li>
                                    <li>
                                        <strong>Diameter: </strong>
                                        {planet.diameter}
                                    </li>
                                    <li>
                                        <strong>Gravity: </strong>
                                        {planet.gravity}
                                    </li>
                                    <li>
                                        <strong>Orbital Period: </strong>
                                        {planet.orbital_period}
                                    </li>
                                    <li>
                                        <strong>Rotation Period: </strong>
                                        {planet.rotation_period}
                                    </li>
                                    <li>
                                        <strong>Surface Water: </strong>
                                        {planet.surface_water}
                                    </li>
                                    <li>
                                        <strong>Terrain: </strong>
                                        {planet.terrain}
                                    </li>
                                </ul>
                            </div>
                            <img src={`/${planet.name}.jpg`} />
                        </>
                    ) : (
                        ''
                    )}
                </article>
            </main>
        </>
    );
};

Planet.displayName = 'Planet';

export default Planet;
