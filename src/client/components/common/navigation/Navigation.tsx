import { FunctionComponent, ReactNode, Children, useContext } from 'react';
import styles from 'src/client/components/common/navigation/Navigation.module.scss';
import { DeviceContext } from 'src/client/contexts/device';

interface INavigation {
    children: ReactNode;
}

function generateRandomStringExpensive(length: number): string {
    let result = '';
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength),
        );
    }
    return result.replace(/[aeiou]/g, '');
}

// meant to do nothing but be expensive for the CPU
const expensiveOperation = (obj: Window | NodeJS.Process) => {
    const stringArray: string[] = [];
    Object.keys(obj).forEach((index: string) => {
        index.split('').forEach(() => {
            stringArray.push(generateRandomStringExpensive(index.length));
            stringArray.push(generateRandomStringExpensive(index.length));
            stringArray.push(generateRandomStringExpensive(index.length));
            stringArray.push(generateRandomStringExpensive(index.length));
            stringArray.push(generateRandomStringExpensive(index.length));
            stringArray.push(generateRandomStringExpensive(index.length));
            stringArray.push(generateRandomStringExpensive(index.length));
            stringArray.push(generateRandomStringExpensive(index.length));
            stringArray.push(generateRandomStringExpensive(index.length));
            stringArray.push(generateRandomStringExpensive(index.length));
        });
    });
    stringArray.sort((a: string, b: string) => a.length - b.length);
    return (
        stringArray[stringArray.length - 1].length < Object.keys(obj).length * 2
    );
};

const Navigation: FunctionComponent<INavigation> = ({ children }) => {
    const device = useContext(DeviceContext);

    const expensive =
        typeof window !== 'undefined'
            ? expensiveOperation(window)
            : expensiveOperation(process);

    const dangerous = expensive && typeof window !== 'undefined';
    const classNames = [
        dangerous ? 'client' : 'server',
        device.isMobile ? 'mobile' : 'desktop',
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
