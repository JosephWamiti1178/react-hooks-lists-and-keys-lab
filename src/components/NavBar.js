import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const link = links.map((link)=>{
    return <a  href={"#" + link} key={link} >{link}</a>
  })

  return <nav>{link}</nav>;
}

export default NavBar;
