import { FunctionComponent } from 'react';
import { IPlanet } from 'src/client/interfaces/IPlanet';
import styles from 'src/client/components/common/card/Card.module.scss';

type Props = {
    planet: IPlanet;
};

const Card: FunctionComponent<Props> = (props) => {
    return (
        <>
            <article className={styles.card}>
                <h2>{props.planet.name}</h2>
                <p>
                    <strong>Population: </strong>
                    {props.planet.population}
                </p>
                <p>
                    <strong>Terrain: </strong>
                    {props.planet.terrain}
                </p>
                <img
                    src={`${props.planet.name.split(' ')[0]}.jpg`}
                    alt={`a planet that is not really ${props.planet.name}`}
                    width={300}
                    height={225}
                />
            </article>
        </>
    );
};

Card.displayName = 'Card';

export default Card;
