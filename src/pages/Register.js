import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import {useDispatch} from 'react-redux';
import { register } from '../redux/apiCalls';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
function Register() {
  const dispatch = useDispatch();
  const [fsname,setFsname]= useState('');
  const [lsname,setLsname]= useState('');
  const [username,setusername]= useState('');
  const [email,setemail]= useState('');
  const [password,setpassword]= useState('');
  const [cpassword,setcpassword]= useState('');

  const handleReg = (e)=>{
    e.preventDefault();
    if(password!==cpassword)return alert('confirm password must be same');
    register(dispatch,{username,email,password});
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input value={fsname} placeholder="First name" onChange={(e)=>setFsname(e.target.value)} />
          <Input value={lsname} placeholder="Last name" onChange={(e)=>setLsname(e.target.value)} />
          <Input value={username} placeholder="username" onChange={(e)=>setusername(e.target.value)} />
          <Input value={email} placeholder="email" onChange={(e)=>setemail(e.target.value)} />
          <Input type='password' value={password} placeholder="password" onChange={(e)=>setpassword(e.target.value)} />
          <Input type='password' value={cpassword} placeholder="confirm password" onChange={(e)=>setcpassword(e.target.value)} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleReg}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>

  )
}

export default Register
