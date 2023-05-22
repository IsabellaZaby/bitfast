import { FunctionComponent, ReactNode, Children, useContext } from 'react';
import styles from 'src/client/components/common/navigation/Navigation.module.scss';
import { DeviceContext } from 'src/client/contexts/device';

interface INavigation {
    children: ReactNode;
}

const Navigation: FunctionComponent<INavigation> = ({ children }) => {
    const device = useContext(DeviceContext);

    const classNames = [
        device.isMobile ? 'mobile' : 'desktop'
    ]
        .toString()
        .replace(',', ' ');

    const getNavigationNodes = () => {
        if (device.isMobile) {
            return Children.map(children, (child) => {
                return <li className="mobile">{child}</li>;
            });
        }

        return Children.map(children, (child) => {
            return <li>{child}</li>;
        });
    };

    return (
        <nav className={styles.navigation}>
            <ul className={classNames.toString()}>{getNavigationNodes()}</ul>
        </nav>
    );
};

Navigation.displayName = 'Navigation';

export default Navigation;
