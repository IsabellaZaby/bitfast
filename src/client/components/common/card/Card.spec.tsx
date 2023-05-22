import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Card from 'src/client/components/common/card/Card';
import { IPlanet } from 'src/client/interfaces/IPlanet';

const MockPlanet: IPlanet = {
    name: 'Tatooine',
    rotation_period: '23',
    orbital_period: '304',
    diameter: '10465',
    climate: 'arid',
    gravity: '1 standard',
    terrain: 'desert',
    surface_water: '1',
    population: '200000',
    index: 0,
};

describe('Card Component', () => {
    it('displays card', async () => {
        const { container } = render(<Card planet={MockPlanet} />);
        expect(container.getElementsByTagName('article').length).toEqual(1);
        expect(container.getElementsByTagName('img').length).toEqual(1);
        expect(container.getElementsByTagName('p').length).toEqual(2);
        expect(container.getElementsByTagName('h2').length).toEqual(1);
    });
});
