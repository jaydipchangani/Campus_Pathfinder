import React from "react";
import { Link, useNavigate } from "react-router-dom";



function Herosection() {

 
  return (
    <div>
      <div class="pt-4">
        <h1 class="text-xl text-center font-bold p-2">
          Welcome to Ganpat University Campus
        </h1>
        <h1 class="text-center px-2  pb-4">
          Explore our university campus and discover all the amazing places it
          has to offer.
        </h1>
        
        <center>
        <button  class="bg-black text-white border-white borde rounded-lg font-bold py-2 px-4 hover:bg-slate-900">
            <Link to='/explore'>Start Exploring</Link>
          </button>
        </center>
        <center>

        <button  class="bg-black text-white border-white borde rounded-lg font-bold py-2 px-4 hover:bg-slate-900">
            <Link to='/nav'> Exploring</Link>
          </button>

          
        </center>
      </div>

      <div class="p-5">
        <center>
          <img src="./guni_main.jpg" class="max-h-52" alt="main"></img>
          <h1 class="text-2xl font-bold pt-2">Main Building</h1>
          <h3 class="text-lg ">
            The heart of our campus, where all the administrative offices are
            located.
          </h3>
          <button class="bg-black text-white border-white borde rounded-lg font-bold py-2 px-4 hover:bg-slate-900">
            Visit
          </button>
        </center>
      </div>
    </div>
  );
}

export default Herosection;
