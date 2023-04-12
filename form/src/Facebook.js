import React,{useState} from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
export const Facebook = () => {
    const[profile,setProfile] = useState(null);

  return (
    <div>
        {!profile?
    <LoginSocialFacebook appId="533849735531045" onResolve={(response)=>{
        console.log(response)
        setProfile(response.data)
    }}
    onReject={(error)=>{
        console.log(error)
    }

    }>
        <FacebookLoginButton />
    </LoginSocialFacebook> :""}
    {profile?
    <div>
    <h1>{profile.name}</h1>
    <img src={profile.picture.data.url}/>
    </div>:""}
    </div>
  )
}
