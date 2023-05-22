import { FunctionComponent } from 'react';
import styles from 'src/client/components/common/footer/Footer.module.scss';

const Footer: FunctionComponent = () => {
    return <div className={styles.footer}>© 2023</div>;
};

Footer.displayName = 'Footer';

export default Footer;
