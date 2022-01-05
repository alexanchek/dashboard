import React, {FC} from 'react';
import styles from './SearchPanel.module.css';
import IconSearch from './iconSearch.svg';

const SearchPanel: FC = (): JSX.Element => {
    return (
        <div className={styles.box}>
            <input className={styles.input} placeholder='Enter text here' type={'text'}/>
            <IconSearch className={styles.loupe} />
        </div>
    );
};

export default SearchPanel;