/* Register.jsx */
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import{Button,Form,FormGroup,Label,Input} from 'reactstrap';
import {GoogleLoginButton} from 'react-social-login-buttons';
import loginImg from "./Images/Logo.png";
export class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Form className="login-form">
        <div className="Image">
            <img  width="300" src={loginImg}/>
        </div>
        <FormGroup className="mt-3">
        <Label>Email</Label><br/>
        <Input type="email" placeholder="Email"/>
        </FormGroup>
        <FormGroup>
        <Label>Password</Label><br/>
        <Input type="password" placeholder="Password"/>
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Login</Button>
        <div className="text-center pt-3"> Or continue with your social account</div>
        <GoogleLoginButton className="mt-3 mb-3"/>
        <div className="text-center">
          <a href="">Sign-up</a>
        <span className="p-2">|</span>
        <a href="">Forgot Password</a>
        </div>
      </Form>
    );
  }
}