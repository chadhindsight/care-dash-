import React, { useState } from 'react';

const Register = () => {
// Only call Hooks from React function components.
//  Don’t call Hooks from regular JavaScript functions
// Maybe set all values related to user model
const [username, setUserName] = useState('')
const [password, setPassword] = useState('')

    return (
            <div>
                <a class="" href="/auth/google" role="button">
                    <i class="fab fa-google"></i>
                    Sign Up with Google
                </a>
            </div>
        );
}

export default Register;

// fullname: String,
//primaryPharmacy: String,
//conditions: [String]