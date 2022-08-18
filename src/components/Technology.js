import "./styles/technology.css";
import React from "react";
import { Button } from "@mui/material";
const Technology = ({ Icon }) => {
  return (
    <div>
      <Button>
        <Icon />
      </Button>
    </div>
  );
};

export default Technology;
