import React, {FC} from 'react';
import Header from '../../../components/Htag/Htag';
import TopPanel from '../TopPanel/TopPanel';
import styles from './Dashboard.module.scss';

const Dashboard: FC = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <Header tag='h1'>
                Dashboard
            </Header>
            <div className={styles.box}>
                <TopPanel/>
            </div>
        </div>
    );
};

export default Dashboard;