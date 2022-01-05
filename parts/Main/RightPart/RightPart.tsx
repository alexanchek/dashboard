import React, {FC} from 'react';
import CategoriesBlock from '../CategoriesBlock/CategoriesBlock';
import SideBlock from '../SideBlock/SideBlock';
import styles from './RightPart.module.css';

const RightPart: FC = ():JSX.Element => {
    return (
        <div className={styles.box}>
            <SideBlock />
            <CategoriesBlock/>
        </div>
    );
};

export default RightPart;