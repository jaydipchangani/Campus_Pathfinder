import React from "react";
import {Link} from "react-router-dom"

function Header() {
  return (
    <>
      <div class="min-h-32 w-full pt-5 font-serif shadow-xl">
        <div class="float-left w-6/12 ">
          <Link to='/'><h1 class="pt-5 pl-1"><img src='./logo.png' class="max-h-16"></img></h1></Link>
        </div>

        <div class="float-left w-6/12 ">
          <h1 class="text-center text-2xl p-5 font-extrabold">Campus Navigation</h1>
        </div>

      </div>
    </>
  );
}

export default Header;
