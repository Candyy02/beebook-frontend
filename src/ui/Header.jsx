import React, { useRef, useState } from "react";
import Button from "../ui/Button";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";
import HoverBookTypes from "./HoverBookTypes";
import { debounce } from "lodash";
import Search from "./Search";
const Header = () => {
  const navigate = useNavigate();

  const inputRef = useRef();
  return (
    <div className="header">
      <a onClick={() => navigate("/")} className="logo">
        <img className="logo-image" alt="logo" src="/images/logo.png" />
      </a>
      <HoverBookTypes />
      <Search />

      <div className="btns">
        <Button variation="secondary">Đăng nhập</Button>
        <Button variation="primary">Đăng ký</Button>
      </div>
    </div>
  );
};

export default Header;
