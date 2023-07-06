import React,{ useRef, useState} from "react";
import {  Card, Col, Container, Form, Row } from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { authActions } from "./authentication";
import './LoginStyles.css'


const Login = () => {

    const [isLogin, setIsLogin] = useState(true)
    const [loading, setLoading] = useState(false)
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    
   
    const history = useHistory()
    const dispatch = useDispatch()

    const submitHandler = async(event) => {
        event.preventDefault()
        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value
        setLoading(true)
       
        if(isLogin) {
          
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAIyZ-UnXtXcWkfqp-eNXm7G0Tog1D6O-4",
         {
           method: "POST",
           body: JSON.stringify({
             email: enteredEmail,
             password: enteredPassword,
             returnSecureToken: true,
           })
         }
       ) 
       setLoading(false)
         if(response.ok){
          const data = await response.json();
          console.log(data);
          dispatch(authActions.login({token : data.idToken, email : data.email}))
          history.replace('/home')
         } else {
          const data = await response.json()
          alert(data.error.message)
         }


    } else {
      try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAIyZ-UnXtXcWkfqp-eNXm7G0Tog1D6O-4", {
          method : 'POST',
          body : JSON.stringify({
            email : enteredEmail,
            password : enteredPassword,
            returnSecureToken : true
          }) 
        }
      ) 
      setLoading(false)
      if (response.ok){
          const data = await response.json()
          alert('user registered successfully')
      }
      else {
        const data = await response.json()
       alert(data.error.message)
      }
      }
      catch(error) {
        console.log(error)
      }
       
    }

    emailInputRef.current.value = ''
    passwordInputRef.current.value = ''
   

    }

    const resetPassword = () => {
      history.push('/changepassword')

    }

    const toggleHandler = () => {
      setIsLogin(prev => !prev)
    }

    

   return (
    
     <div className="form">
       <Container className='con' >
         <Row className="container justify-content-center m-2">
           {/* Add justify-content-center class to center the row */}
           <Col lg={5}>
             <Card className="conatiner shadow-1g m-5 p-1 bg-transparent border-0">
               <Card.Body>
                 <Form className="container" onSubmit={submitHandler}>
                   <Card.Header className="p-2 card-header-no-shadow" style={{ textAlign: "center", color:'white'}}>
                     <h4>{isLogin ? "Login" : "Signup"}</h4>
                   </Card.Header>
                   <Form.Group className="m-2">
                     <Form.Control
                       type="text"
                       placeholder="Email"
                       ref={emailInputRef}
                     />
                   </Form.Group>

                   <Form.Group className="m-2">
                     <Form.Control
                       type="password"
                       placeholder="Password"
                       ref={passwordInputRef}
                     />
                   </Form.Group>

                   
                   <div className="btn1">

                   {loading ? (
                       "loading..."
                     ) : (
                        <button type="submit">
                            {isLogin ? "Login" : "Signup"}
                        </button>
                    //    <Button
                    //      className="mt-2"
                    //      style={{ marginLeft: "40%" }}
                    //      type="submit"
                    //    >
                    //      {isLogin ? "Login" : "Signup"}
                    //    </Button>
                     )}
                   </div>

                   <div className="mobilebtn">

                    {<button type="button"
                       onClick={resetPassword}>
                        {isLogin
                         ? "Forgot Password"
                         : ""}

                    </button> }
                    
                   </div>


                   <div className="btn2">
                    <button  type="button"
                       onClick={toggleHandler}>
                        {isLogin
                         ? "Create New Account"
                         : "Login With Existing Account"}

                    </button>
                   </div>
                 </Form>
               </Card.Body>
             </Card>
           </Col>
         </Row>
       </Container>

     </div>
     
   );
}


export default Login