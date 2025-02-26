'use client';

import React from 'react'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidatedInput from '@/app/components/form-controls/ValidatedInput';
import styles from '../styles.module.scss'
import Link from 'next/link';


const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

type FormData = yup.InferType<typeof schema>;
 
const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className={styles.wrapper} >
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <h1 className={styles.title} >Sign In</h1>
        <ValidatedInput label="Email" name="email" type="email" register={register} error={errors.email} required />
        <ValidatedInput label="Password" name="password" type="password" register={register} error={errors.password} required />
        <button type="submit">Submit</button>
        <Link href='/sign-up'><p className={styles.signUpLink} >{`Don't have an account? Sign up now`}</p></Link>
      </form>
    </div>

  );
}
 
export default SignUpPage;