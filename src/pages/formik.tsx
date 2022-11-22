import React from 'react'
import { useFormik } from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup'

export default function formikExample() {
  const schema = Yup.object({
    name: Yup.string().required().max(255),
    email: Yup.string().email().required().max(255),
    username: Yup.string().required().max(50),
    password: Yup.string().required().min(8).max(50),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required()
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      username: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: () => {
      alert('Deu certo')
    }
  })

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        value={formik.values.name}
        onChange={formik.handleChange}
        name="name"
        type="text"
      />
      {formik.errors.name}
      <label htmlFor="email">E-mail:</label>
      <input
        value={formik.values.email}
        onChange={formik.handleChange}
        name="email"
        type="text"
      />
      {formik.errors.email}
      <label htmlFor="username">Username:</label>
      <input
        value={formik.values.username}
        onChange={formik.handleChange}
        name="username"
        type="text"
      />
      {formik.errors.username}
      <label htmlFor="password">Password:</label>
      <input
        value={formik.values.password}
        onChange={formik.handleChange}
        name="password"
        type="text"
      />
      {formik.errors.password}
      <label htmlFor="confirmPassword">Confirm password:</label>
      <input
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        name="confirmPassword"
        type="text"
      />
      {formik.errors.confirmPassword}

      <button
        onClick={() => {
          console.log(formik.errors)
        }}
      >
        Submit
      </button>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin: 20px 0 0 0;
  }

  input {
    width: 200px;
  }

  button {
    width: 100px;
    margin: 30px 0 0 0;
  }
`
