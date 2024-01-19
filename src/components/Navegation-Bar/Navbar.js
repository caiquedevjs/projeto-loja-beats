/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdCart } from "react-icons/io";




const NavegationBar =()=>{
    return (
        <div className="NavegationBar">
          <ul class="nav nav-underline">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Quem somos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">contatos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="false">Catalogo</a>
  </li>
</ul>
  <IoMdCart />
        </div>


    )
}

export default NavegationBar;