import React, {FC} from 'react';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import styles from './Header.module.css';
import RightPanel from './RightPanel/RightPanel';

const Header:FC = (): JSX.Element => {
    return (
        <div className={styles.box}>
            <SearchPanel />
            <RightPanel />
        </div>
    );
};

export default Header;