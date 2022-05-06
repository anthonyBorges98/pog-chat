import { useState } from "react"

function signUp() {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        password2: '',
    });

    const { userName, email, password, password2 } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const user = {userName, email, password, password2}}
        navigate('/');
    return (
        <div className='container'>
            <form className='sign-up-form' onSubmit={onSubmit}>
                <input type='text' placeholder="Username" name='userName' value={userName} onChange={onChange} />
                <input type='email' placeholder="Email" name='email' value={email} onChange={onChange} />
                <input type='password' placeholder="Password" name='password' value={password} onChange={onChange} />
                <input type='password' placeholder="Confirm Password" name='password2' value={password2} onChange={onChange} />
            </form>
        </div>
    )
}

export default signUp;

