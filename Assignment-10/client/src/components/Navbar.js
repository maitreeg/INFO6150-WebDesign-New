import React from "react";
import { Link, useNavigate} from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Home, Info, Work, ContactPhone, Business, ExitToApp } from "@mui/icons-material";


function Navbar() {
  const navigate = useNavigate();
  const user = sessionStorage.getItem("user");
  const userData = JSON.parse(user);
  const userRole = userData.user.type
  

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Job Search
        </Typography>
        {userRole === "admin" && (
          <>
            <IconButton color="inherit" component={Link} to="/admin" sx={{ textDecoration: 'none', fontSize: '0.8rem'  }}>Admin
            <Business />
            </IconButton>
            <IconButton color="inherit" component={Link} to="/admin/add-job" sx={{ textDecoration: 'none', fontSize: '0.8rem'  }}>Add Job
            <Business />
            </IconButton>
          </>
        )}
        {userRole !== "admin" && (
          <>
            <IconButton color="inherit" component={Link} to="/home" sx={{ textDecoration: 'none', fontSize: '0.8rem'  }}>Home
              <Home />
            </IconButton>
            <IconButton color="inherit" component={Link} to="/about" sx={{ textDecoration: 'none', fontSize: '0.8rem'  }}>About
              <Info />
            </IconButton>
            <IconButton color="inherit" component={Link} to="/joblistings" sx={{ textDecoration: 'none', fontSize: '0.8rem'  }}>Job listings
              <Work />
            </IconButton>
            <IconButton color="inherit" component={Link} to="/contact" sx={{ textDecoration: 'none', fontSize: '0.8rem'  }}>Contact
              <ContactPhone />
            </IconButton>
            <IconButton color="inherit" component={Link} to="/companies" sx={{ textDecoration: 'none', fontSize: '0.8rem'  }}>Companies
              <Business />
            </IconButton>
          </>
        )}
        <IconButton color="inherit" onClick={handleLogout} sx={{ textDecoration: 'none', fontSize: '0.8rem'  }}>Logout
          <ExitToApp />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
