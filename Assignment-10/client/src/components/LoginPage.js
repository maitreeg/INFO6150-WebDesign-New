


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Container, Typography, TextField, Button, Box } from '@mui/material';
// import { useNavigate } from "react-router-dom";
// import jobSearchLogo from "../images/logo.jpeg";
// import { LoginAction } from '../store/actions/LoginAction';
// import { connect } from 'react-redux';
// import thunk from 'redux-thunk';


// function LoginPage(props) {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const user = sessionStorage.getItem("user");
//     if (user) {
//       try {
//         const userData = JSON.parse(user);
//         if (userData && userData.type === "admin") {
//           navigate("/admin");
//         } else {
//           navigate("/home");
//         }
//       } catch (error) {
//         console.error("Error parsing user data:", error);
//       }
//     }
//   }, [navigate]);

//   const handleSubmit = async (email, password) => {
//     setIsLoading(true);
//     let payload = { email, password };
//     try {
//       const response = await axios.post("http://localhost:8000/user/authenticate", payload);
//       if (response.status === 200) {
//         const userData = response.data;
//         sessionStorage.setItem("user", JSON.stringify(userData));
//         if (userData.user.type === "admin") {
//           navigate("/admin");
//           props.loginAction({ userDetails: userData, userRole: 'admin' });
//         } else {
//           navigate("/home");
//           props.loginAction({ userDetails: userData, userRole: 'employee' });
//         }
//       } else {
//         setError("Invalid email or password");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError("Internal server error");
//     } finally {
//       setIsLoading(false);
//     }
//   };
  

//   return (
//     <Container maxWidth="sm">
//       <Box mt={5} mb={4} textAlign="center">
//         <img
//           src={jobSearchLogo}
//           alt="Job Search Logo"
//           style={{ maxWidth: "1200px", height: "200px" }}
//         />
//         <Typography variant="h4" mt={3}>Lets Start with your Job Search</Typography>
//         <Typography variant="body1" color="textSecondary">Your career opportunities</Typography>
//       </Box>
//       <form onSubmit={(e) => {
//           e.preventDefault();
//           handleSubmit(email, password);
//         }}>
//         {error && <Typography variant="body2" color="error">{error}</Typography>}
//         <TextField
//           id="email"
//           label="Email"
//           variant="outlined"
//           fullWidth
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           margin="normal"
//         />
//         <TextField
//           id="password"
//           label="Password"
//           type="password"
//           variant="outlined"
//           fullWidth
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           margin="normal"
//         />
//         <Box mt={2} textAlign="center">
//           <Button variant="contained" color="primary" type="submit">Login</Button>
//         </Box>
//       </form>
//     </Container>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     userDetails: state.login.userDetails,
//   };
// };

// const mapDispatchToProps = {
//   loginAction: LoginAction,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);



// // add back button on addJob page which goes back to admin
// // make sure other pages on navbar not visible to admin
// // admin should not see a list of user's with admin itself or other admin



import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import jobSearchLogo from "../images/logo.jpeg";
import { LoginAction } from '../store/actions/LoginAction';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from "react-redux";
import { addUser }from "./reducer";

function LoginPage(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      try {
        const userData = JSON.parse(user);
        if (userData && userData.type === "admin") {
          navigate("/admin");
        } else {
          navigate("/home");
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, [navigate]);

  const handleSubmit = async (email, password) => {
    setIsLoading(true);
    let payload = { email, password };
    try {
      const response = await axios.post("http://localhost:8000/user/authenticate", payload);
      if (response.status === 200) {
        const userData = response.data;

      /*
      Adding redux code here
      */
     dispatch(addUser(userData));

        sessionStorage.setItem("user", JSON.stringify(userData));
        if (userData.user.type === "admin") {
          navigate("/admin");
          props.loginAction({ userDetails: userData, userRole: 'admin' });
        } else {
          navigate("/home");
          props.loginAction({ userDetails: userData, userRole: 'employee' });
        }
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Internal server error");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <Container maxWidth="sm">
      <Box mt={5} mb={4} textAlign="center">
        <img
          src={jobSearchLogo}
          alt="Job Search Logo"
          style={{ maxWidth: "1200px", height: "200px" }}
        />
        <Typography variant="h4" mt={3}>Lets Start with your Job Search</Typography>
        <Typography variant="body1" color="textSecondary">Your career opportunities</Typography>
      </Box>
      <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(email, password);
        }}>
        {error && <Typography variant="body2" color="error">{error}</Typography>}
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          margin="normal"
        />
        <Box mt={2} textAlign="center">
          <Button variant="contained" color="primary" type="submit">Login</Button>
        </Box>
      </form>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.login.userDetails,
  };
};

const mapDispatchToProps = {
  loginAction: LoginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);



// add back button on addJob page which goes back to admin
// make sure other pages on navbar not visible to admin
// admin should not see a list of user's with admin itself or other admin