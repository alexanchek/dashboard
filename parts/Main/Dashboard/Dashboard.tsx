import React, {FC} from 'react';
import Header from '../../../components/Header/Htag';
import TopPanel from '../TopPanel/TopPanel';
import styles from './Dashboard.module.scss';

const Dashboard: FC = (): JSX.Element => {
    return (
        <div>
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