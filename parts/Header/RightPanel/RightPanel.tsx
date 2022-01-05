import React, {FC} from 'react';
import Button from '../../../components/Button/Button';
import styles from './RightPanel.module.css';


const RightPanel: FC = (): JSX.Element => {
    return (
        <div className={styles.box}>
            <Button type='theme'/>
            <Button type='notification' message/>
            <Button type='avatar'/>
        </div>
    );
};

export default RightPanel;