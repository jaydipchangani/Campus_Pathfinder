import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";

function List() {
  return (
    <>
      <Header />

      <div class="p-5">
        
      <Link to="/userform"><div class="bg-gray-200 max-h-42 max-w-40 rounded-lg float-left  ">
            <img src='./guni_main.jpg' class="max-h-40 rounded-t-lg" alt='main' ></img>
            <h1 class="text-center text-xl m-1">New Building UVPCE</h1>
        </div></Link>

        <div class="bg-gray-200 max-h-42 max-w-40 rounded-lg float-right  ">
            <img src='./guni_main.jpg' class="max-h-40 rounded-t-lg" alt='main' ></img>
             <h1 class="text-center text-xl m-1">Old Building UVPCE</h1>
        </div>

      </div>
    </>
  );
}

export default List;
