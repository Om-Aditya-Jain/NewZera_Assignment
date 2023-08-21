import React, { useState } from "react";
import "./Links.scss";
import Contact from "../contact/Contact";
import { Link } from "react-router-dom";

const Links = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="Links">
      <Link to="/About">
        <div className="Links__Link">About</div>
      </Link>
      <Link to="/Blog">
        <div className="Links__Link">Blog</div>
      </Link>
      <Link to="/Careers">
        <div className="Links__Link">Careers</div>
      </Link>
      <div
        className="Links__Link"
        onClick={() => {
          setOpen(true);
        }}
      >
        Contact
      </div>
      <Contact open={open} setOpen={setOpen} />
    </div>
  );
};

export default Links;
