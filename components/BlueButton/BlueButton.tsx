import classNames from 'classnames';
import React, { FC } from 'react';
import CommonCard from '../CommonCard/CommonCard';
import styles from './BlueButton.module.css';
import {BlueButtonProps} from './BlueButton.props';

const BlueButton: FC<BlueButtonProps> = ({children, className, ...props}):JSX.Element => {
    return (
        <div className={styles.button}>
            {children}
        </div>
    );
};

export default BlueButton;