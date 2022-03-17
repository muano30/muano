---
Layout: 
Title: "How to show backend error message in frontEnd"
date: "2022-03-11"
---

# Introduction.

On the previous blog post i failed to explain how to show error message we get in backend from the package @hapi/joi to frontEnd, i have a solution now on how to show those error message i just don't know if it is the right way to show those error message, but i think they are different ways in which we can show those eror messages.


# Body.

## Explanation.

import {
    USER_LOADED,
    USER_LOADING,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
  } from "../actionTypes/user";
  
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    err: null,
  
    user: null,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOADING:
        return {
          ...state,
          isLoading: true,
        };
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: action.payload,
        };
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        localStorage.setItem("token", action.payload.token);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          isLoading: false,
          newUser: action.payLoad,
        };
  
      case LOGOUT_SUCCESS:
      case LOGIN_FAIL:
      case REGISTER_FAIL:
        localStorage.removeItem("token");
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: null,
          isLoading: null,
          // err: action.payload.msg
        };
      default:
        return state;
    }
  };

In my authReducer where i have a case REGISTER_FAIL in the return i commented out err: action.payload.msg which i will get all the errors that will happen after the registration fail.I have to show all this errors in the registerform form if the user get error while registering, this is what i have done for now, is user try to register with the email that already exist they will get an error that says email already exist or if the user try to use incorrect email format they will get the message that correspond with the error they have committed.

import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import useForm from './useForm'
import {useSelector} from 'react-redux'
const RegisterForm = () => {
  const { handleChange, handleSubmit, formInfo } = useForm();
  const state = useSelector(state => state.error)
  return (
    <Container>
      <div>

      {/* {JSON.stringify(state.msg)} */}
      </div>

We use useSelector to avoid passing props, so what i have done is to get the state with all the errors  from backEnd, but the error that i'm looking for is on msg. To display the specific erros that will be committed by the user  i used this text as i have commented it out on code above {/* {JSON.stringify(state.msg)} */} it will show the specific error as user have commited trying to register without meeting the requirement needed.


Note: the erros need to be diplayed on the register form so that the user will be able to see the mistake they have made.

The advise they told me is that i have to validate both frontEND and backEnd so that no user will do wrong thing trying to access the app.

# Conlusion.

If this doesn't help you can use the same link on the previous blog-post to check what i have done. 


