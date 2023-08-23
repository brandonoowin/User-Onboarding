import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Form from './Components/Forms'
import formSchema from './Components/formSchema';
import * as Yup from 'yup'

const initialFormErrors = {
  fname:'', lname:'', email:'', password:'', term :''
}

export default function App() {
const [users, setUsers] = useState([]);
const [values, setValues] = useState({ fname:'', lname:'', email:'', password:'', term :false})
const [formErrors, setFormErrors] = useState(initialFormErrors)


const onSubmit = () => {
  setValues({ fname:'', lname:'', email:'', password:'', term : false})
  axios.post(`https://reqres.in/api/users`, values)
    .then(res => {
      setUsers([res.data, ...users])
    })
    .catch(err => {
      console.error(err)
    })
}

const onChange = (name, value) => {
  validate(name, value);
  setValues({...values, [name]: value})
}

const validate = (name, value) => {
  Yup.reach(formSchema, name)
  .validate(value)
  .then(() => setFormErrors({...formErrors, [name] : '' }))
  .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}


  return (
    <div >
      <div className='form'>
        <h1>Team Builder App</h1>
      </div>
      <div className='form'>
        <Form 
        values={values}
        submit={onSubmit}
        change={onChange}
        errors={formErrors}
        />
      </div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            First Name: {user.fname}<br></br>
            Last Name: {user.lname}<br></br>
            Email: {user.email}<br></br>
            <br></br>
          </div>
        )
      })}
    </div>
  );
}


