import React, { useEffect, useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router';
import { UserContext } from '../../Context/UserContext';
import axios from 'axios';


export const Login = () => {
    const {auth,setAuth,setuserId} = React.useContext(UserContext);

    const initialFormData ={
        firstname: '',
        lastname: '',
        emailregister: '',
        passwordregister: '',
      }
        const [formData, setFormData] = useState(initialFormData);
        const [message, setmesage] = useState("");
      
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };

        const handleRegister = async (e) => {
          e.preventDefault();
          try {
            const response = await axios.post('http://127.0.0.1:8000/api/UserRegister', formData);
            setFormData(initialFormData)
            if (response.data.user) {
                setuserId(response.data.user.id)
                setAuth(true)
               nav("/acceuill")
                console.log(auth)
            }else{
              setmesage(response.data.message)
            }
          } catch (error) {
            console.error('Registration failed:', error);
          }
      
        };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const nav =useNavigate()
    const handleSubmit = async (e) => {
      
      e.preventDefault();
  
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/UserLogin', {
          email:email,
          password:password
        });
        
        if (response.data.user) {
          setuserId(response.data.user.id)
          setAuth(true)
         nav("/acceuill")
          console.log(auth)
        }else{
          setmesage(response.data.msg)
        }
      
      } catch (error) {
        console.error('Login failed:', error);
      }
  
    };
  
  console.log(auth)

    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".containerform");

        const signUpClickHandler = () => {
            container.classList.add("sign-up-mode");
        };

        const signInClickHandler = () => {
            container.classList.remove("sign-up-mode");
        };

        if (sign_up_btn && sign_in_btn && container) {
            sign_up_btn.addEventListener("click", signUpClickHandler);
            sign_in_btn.addEventListener("click", signInClickHandler);
        }

        // Clean up the event listeners when component unmounts
        return () => {
            if (sign_up_btn && sign_in_btn) {
                sign_up_btn.removeEventListener("click", signUpClickHandler);
                sign_in_btn.removeEventListener("click", signInClickHandler);
            }
        };
    }, []);

  return (
  
    <div class="containerform">
          
        <div class="forms-container">
            <div class="signin-signup">
                
                <form onSubmit={handleSubmit} action="#" class="form sign-in-form" id="signin">
                    <h2 class="title">Sign in</h2>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" name='email' onChange={(e)=>setEmail(e.target.value)} placeholder="Email" autocomplete="off" id="emailname" />
                    </div>
                    <div class="input-field passfield">
                        <i class="fas fa-lock"></i>
                        <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} placeholder="Password" id="passname" class="pass1" />
                       
                    </div>

                    <input type="submit" value="Sign in" class="btn solid" />
                    <p class="social-text">Or Sign in with social platforms</p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </form>
              
                <form onSubmit={handleRegister} action="#" class="form sign-up-form" id="signup">
                    <h2 class="title">Sign up</h2>
                    <div class="input-field namefield">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="First Name"  
                        value={formData.firstname}
                 onChange={handleInputChange} 
                 name='firstname'
                 autocomplete="off" maxlength="20" id="fname" />
                    </div>
                    <div class="input-field namefield">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Last Name"  
                        value={formData.lastname}
                 onChange={handleInputChange} 
                 name='lastname'
                 autocomplete="off" maxlength="20" id="fname" />
                    </div>
                    <div class="input-field efield">
                        <i class="fas fa-envelope"></i>
                        <input type="email"
                          value={formData.emailregister}
                          onChange={handleInputChange} 
                          name='emailregister'
                           placeholder="Email" autocomplete="off" id="ename" />
                    </div>
                    <div class="input-field passfield">
                        <i class="fas fa-lock"></i>
                        <input type="password" 
                         value={formData.passwordregister}
                         onChange={handleInputChange} 
                         name='passwordregister'
                         placeholder="Password" id="pass" class="pass1" />
                       
                    </div>
                   
                    <input type="submit" value="Sign up" class="btn signup-btn" />
                    <p class="social-text">Or Sign up with social platforms</p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>

        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                    <h3>Create Account</h3>
                    <p style={{width:"330px"}}>
                        Sign up if you don't have an account  
                       
                    </p>
                    <button class="btn transparent" id="sign-up-btn">
                        Sign up
                    </button>
                </div>
              
            </div>
            <div class="panel right-panel">
                <div class="content">
                    <h3>Log in</h3>
                    <p style={{width:"230px"}}>
                        Sign in here if you already have an account
                        
                    </p>
                    <button class="btn transparent" id="sign-in-btn">
                        Sign in
                    </button>
                </div>
                {/* <img src="../../../images/login.png" class="image" alt="" /> */}
            </div>
        </div>
    </div>
   

   
  )
}
