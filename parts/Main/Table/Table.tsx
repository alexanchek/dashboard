import React, {FC} from 'react';
import CommonCard from '../../../components/CommonCard/CommonCard';
import styles from './Table.module.css';

const Table: FC = ():JSX.Element => {
    return (
        <CommonCard className={styles.box}>
            TABLE
        </CommonCard>
    );
};

export default Table;