import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    fname: Yup
        .string()
        .trim()
        .required('First name is required'),
    lname: Yup
        .string()
        .trim()
        .required('Last name is required'),
    email: Yup
        .string()
        .email('Must be a valid email address')
        .required('Must include email address'),
  
    password: Yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
    term: Yup
        .boolean()
        .oneOf([true], 'You must accept Terms and Conditions')
  
  })
  
  
  export default formSchema