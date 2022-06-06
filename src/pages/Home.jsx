import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Products from "../components/Products/Products";

const Home = () => {
  return <div>{
    <Products />
    }</div>;
};

export default Home;
