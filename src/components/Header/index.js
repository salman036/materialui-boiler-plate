import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

import "./style.css";

const Header = ({ title, authRoute, btnTitle }) => {
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>

        <Link className="auth-btn" to={`/${authRoute}`}>
          <Button variant="outlined" size="small">
            {btnTitle}
          </Button>
        </Link>
      </Toolbar>
    </>
  );
};

export default Header;
