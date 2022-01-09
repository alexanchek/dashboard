import React, { FC } from "react";
import BlueButton from "../../components/BlueButton/BlueButton";
import CommonCard from "../../components/CommonCard/CommonCard";
import Htag from "../../components/Htag/Htag";
import Input from "../../components/Input/Input";
import styles from "./SignIn.module.css";

const SignIn: FC = (): JSX.Element => {
  return (
    <div className={styles.box}>
      <Htag tag={"h2"} className={styles.title}>
        Welcome Back!
      </Htag>
      <div className={styles.subtitle}>Sign in to your account to continue</div>
      <CommonCard className={styles.loginCard}>
        <div className={styles.email}>
          <Htag tag={"h4"}>Email</Htag>
          <Input
            placeholder="Enter your email"
            typeField="email"
            className={styles.input}
          />
        </div>
        <div className={styles.password}>
          <Htag tag={"h4"}>Password</Htag>
          <Input
            placeholder="Enter your password"
            typeField="password"
            className={styles.input}
          />
        </div>
        <div className={styles.forgotPassword}>Forgot your Password?</div>
        <div className={styles.formRow}>
            <input type="checkbox" id="rememberMe" className={styles.checkbox}/>
            <label htmlFor="rememberMe" className={styles.rememberMe}>Remember me next time</label>
        </div>
        <BlueButton>Sign in</BlueButton>
      </CommonCard>
    </div>
  );
};

export default SignIn;
