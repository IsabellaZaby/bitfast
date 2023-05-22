import { createContext, ReactElement, useState, useEffect } from 'react';

export type Device = {
    isMobile: boolean;
};

const initialDeviceContext: Device = {
    isMobile: true,
};

type ProviderProps = {
    children?: ReactElement;
};

export const DeviceContext = createContext<Device>(initialDeviceContext);

export const DeviceProvider = ({ children }: ProviderProps) => {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const getIsMobile = () =>
            typeof window !== 'undefined' && screen.width < 768;

        addEventListener('resize', () => {
            setIsMobile(getIsMobile());
        });
        setIsMobile(getIsMobile());
    }, []);

    return (
        <DeviceContext.Provider value={{ isMobile }}>
            {children}
        </DeviceContext.Provider>
    );
};
