import React from "react";
 

export default function Form(props) {
    const { fname, lname, email, password, term } = props.values
    const { change, submit, errors} = props;

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target; 
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        submit()
    }
    return (
        <div>
            <p style={{color: 'red'}}>{errors.fname}</p>
            <p style={{color: 'red'}}>{errors.lname}</p>
            <p style={{color: 'red'}}>{errors.email}</p>
            <p style={{color: 'red'}}>{errors.password}</p>
            <p style={{color: 'red'}}>{errors.term}</p>
            <form onSubmit={handleSubmit}>
                <label>First Name:&nbsp; 
                    <input 
                    className="fname"
                    value={fname}
                    type='text' 
                    name='fname' 
                    placeholder="enter first name" 
                    onChange={handleChange}/><br></br>
                </label>
                <label>Last Name:&nbsp; 
                    <input 
                    className="lname"
                    value={lname}
                    type='text' 
                    name='lname' 
                    placeholder="enter last name" 
                    onChange={handleChange}/><br></br>
                </label>
                <label>email:&nbsp; 
                    <input 
                    className="email"
                    value={email}
                    type='email' 
                    name='email'  
                    placeholder="enter email" 
                    onChange={handleChange}/><br></br>
                </label>
                <label>Password:&nbsp; 
                    <input 
                    className="pw"
                    value={password}
                    type='password' 
                    name='password' 
                    placeholder="enter password" 
                    onChange={handleChange}/><br></br>
                </label>
                <label>Terms of Service:&nbsp; 
                    <input 
                    className="tos"
                    type='checkbox' 
                    name='term' 
                    checked={term}
                    onChange={handleChange}/><br></br>
                </label>

                <input type='submit' value='Submit' />
            </form>
        </div>
    );
}