import React, {FC} from 'react';
import Chart from '../Chart/Chart';
import Table from '../Table/Table';
import styles from './LeftPart.module.css';

const LeftPart: FC = ():JSX.Element => {
    return (
        <div className={styles.box}>
            <Chart />
            <Table/>
        </div>
    );
};

export default LeftPart;