import React, { useState } from "react";
import './login.css';
import { FaSpinner } from 'react-icons/fa';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({ onClose }) {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', department: 'Tech' });
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true); 

    const handleUnchange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogin = async () => {
        try {
            setIsLoading(true);
            let response = await axios.post(' https://cth-interns-portal.onrender.com/api/admin/login', {
                "email": formData.email,
                "password": formData.password
            });
            toast.success('Login successful');
            setIsLoading(false);
        } catch (error) {
            console.log(error.response.data);
            setIsLoading(false);
            toast.error(error.response.data.message);
        }
    };

    const createNewUser = async () => {
        try {
            setIsLoading(true);
            let response = await axios.post('https://cth-interns-portal.onrender.com/api/admin/signUp', {
                "name": formData.name,
                "email": formData.email,
                "password": formData.password,
                "department": formData.department
            });
            toast.success('Sign up successful');
            setIsLoading(false);
        } catch (error) {
            console.log(error.response.data);
            setIsLoading(false);
            toast.error(error.response.data.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLogin) {
            handleLogin();
        } else {
            createNewUser();
        }
    };

    return (
        <div className="login-container">
            <div className="login-image">
                {}
                <img src="" alt="Login Banner" />
            </div>
            <div className="login-form-container">
                <div className="login-header">
                    <h2>{isLogin ? 'Login' : 'Sign up'}</h2>
                </div>
                <form className="login-form" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} required onChange={handleUnchange} />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} required onChange={handleUnchange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} required onChange={handleUnchange} />
                    </div>

                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="department">Department</label>
                            <select id="department" name="department" value={formData.department} onChange={handleUnchange} required>
                                <option value="Tech">Tech</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Programs">Programs</option>
                            </select>
                        </div>
                    )}

                    <button type="submit" className="login-button">
                        {isLoading ? <FaSpinner className="spinner" /> : (isLogin ? 'Login' : 'Sign up')}
                    </button>
                </form>

                <div className="login-footer">
                    <p>{isLogin ? "Don't have an account? " : "Already have an account? "}
                        <a href="#" onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? "Sign up" : "Log in"}
                        </a>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
