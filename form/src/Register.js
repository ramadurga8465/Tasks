import React,{useState,useEffect} from 'react';
import { Input } from './Input';
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import useFormPersist from 'react-hook-form-persist';
import { useNavigate } from 'react-router-dom';
import { googleLogout,useGoogleLogin } from '@react-oauth/google';
import { Previews } from './Previews';
import { Basic } from './Basic';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { FileUpload } from './FileUpload';
import { Facebook } from './Facebook';
const schema = yup.object({
  username:yup.string().required(),
  phoneNumber:yup.string().required().matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,"phone number is not valid"),
email:yup.string().required("Email is required field").email("emal is not valid!."),
password:yup.string().min(6,"Password must be at least 6 characters"),
confirmPassword:yup.string().required().oneOf([yup.ref("password")],"Password must be match.")
})
export const Register =() =>{
  const navigate    = useNavigate()
  const [data,setData] = useState({})
  const {handleSubmit,register,formState:{errors},setValue ,watch} = useForm({resolver:yupResolver(schema),
  })
  useFormPersist("storageKey", {
    watch, 
    setValue,
    storage: window.localStorage, 
  });
  const formSubmit = (data) =>{
//   console.log(data)
  setData(data)
  console.log(data.username) 
  localStorage.setItem('mydata', JSON.stringify(data));
  localStorage.setItem("loggedin",true)
  navigate('/login')
//    var aaa = JSON.parse(localStorage.getItem('mydata'));
//    console.log("get", aaa);

}

// console.log("hey",data);
// const responseMessage = (response) => {
//     console.log(response);
// };
// const errorMessage = (error) => {
//     console.log(error);
// }
const [ user, setUser ] = useState([]);
const [ profile, setProfile ] = useState([]);

const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
});

useEffect(
    () => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    },
    [ user ]
    
);

// log out function to log the user out of google and set the profile array to null
const logOut = () => {
    googleLogout();
    setProfile(null);
};



  return (
    <div className="sign-up">
      <h1>Sign Up </h1>
      <p>Enter Below details to login into account .please enter required fields.</p>
      <form onSubmit={handleSubmit(formSubmit)}>
          <Input 
          id="username"
          label="Username"
          type="text"
          placeholder="Enter Username"
          register={{...register("username")}}
          errorMessage={errors.username?.message}
         
          />
           <Input 
          id="phoneNumber"
          label="Phone Number"
          type="text"
          placeholder="Enter Phone Number"
          register={{...register("phoneNumber")}}
          errorMessage={errors.phoneNumber?.message}
          />
           <Input 
          id="email"
          label="Email"
          type="text"
          placeholder="Enter Email"
          register={{...register("email")}}
          errorMessage={errors.email?.message}
          />
           <Input 
          id="password"
          label="Password"
          type="password"
          placeholder="Enter Password"
          register={{...register("password")}}
          errorMessage={errors.password?.message}
          />
           <Input 
          id="confitrmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Re Enter Password"
          register={{...register("confirmPassword")}}
          errorMessage={errors.confirmPassword?.message}
          />
        <span style={{fontSize:'1rem',color:'black'}}>Upload passport size photo</span>
        <Previews />
        <span style={{fontSize:'1rem',color:'black'}}>Upload Resume</span>
        <Basic />
        
        <span style={{fontSize:'1rem',color:'black'}}>Upload file to server</span>
        <FileUpload />
        <button>Sign Up</button>
        
        
      </form>
      <center>
      <p style={{marginTop:'40px'}}>Or</p>
      </center>
       
      
            <br />
            <br />
            {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={() => login()}>Sign in with Google</button>
            )}
            <Facebook />
    </div>
  );
}


