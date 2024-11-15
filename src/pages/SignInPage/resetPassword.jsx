
import React, { useState } from 'react';
import { resetPassword } from '../../firebase/authService';

const ResetPassword = () => {
    const [email, setEmail] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            await resetPassword(email);
            alert('Password reset email sent!');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleResetPassword}>
            <h2 className='reset_heading'>Reset Password</h2>
            <input className='reset_Email'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <button className='reset_button' type="submit">Reset Password</button>
        </form>
    );
};

export default ResetPassword;
