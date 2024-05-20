import React from "react";
import Header from "./header";
import Box from "./Box";
import Nav from "./nav";
import { Link } from "react-router-dom";

function Explore() {
  return (
    <div>
      
      <div class="min-h-32 w-full pt-5 font-serif shadow-xl">
        <div class="float-left w-6/12 ">
        <Link to='/'><h1 class="pt-5 pl-1"><img src='./logo.png' class="max-h-16"></img></h1></Link>
        </div>

        <div class="float-left w-6/12 ">
          <h1 class="text-center text-2xl p-5 font-extrabold">Campus Navigation</h1>
        </div>

      </div>
      <div class="font-serif pt-5">
        <h1 class="text-center text-2xl ">Choose a Place to visit</h1>
      </div>

      <div class="p-5">
        <Link to='/nav2'>
          <div class="bg-white min-h-38 max-h-42 max-w-40 rounded-lg float-left m-2 shadow-lg border-2">
            <img src='./hostel.png' class="h-28 w-32 rounded-lg" alt='main' ></img>
            <h1 class="text-center text-xl pb-1 font-semibold">Hostels</h1>
          </div>
        </Link>

        <Link to='/list'>
        <div class="bg-white min-h-38 max-h-42 max-w-40 rounded-lg float-right m-2 shadow-lg border-2">
          <img src='./clg.png' class="h-28 w-32 rounded-lg" alt='main' ></img>
          <h1 class="text-center text-xl pb-1 font-semibold">Colleges</h1>
        </div></Link>

        <div class="bg-white min-h-38 max-h-42 max-w-40 rounded-lg float-left m-2 shadow-lg border-2">
          <img src='./mess.jpg' class="h-28 w-32 rounded-lg m-" alt='main' ></img>
          <h1 class="text-center text-xl pb-1 font-semibold">Mess</h1>
        </div>

        <div class="bg-white h-34  w-34 rounded-lg float-right m-2 shadow-lg border-2">
          <img src='./sport.jpg' class="h-28 w-32 rounded-lg" alt='main' ></img>
          <h1 class="text-center text-lg pb-1 font-semibold">Sport Complex</h1>
        </div>

        <div class="bg-white min-h-38 max-h-42 max-w-40 rounded-lg float-left m-2 shadow-lg border-2">
          <img src='./hospital.jpg' class="h-28 w-32 rounded-lg" alt='main' ></img>
          <h1 class="text-center text-xl pb-1 font-semibold">Hospital</h1>
        </div>

        <div class="bg-white min-h-38 max-h-42 max-w-40 rounded-lg float-right m-2 shadow-lg border-2">
          <img src='./canteen.jpg' class="h-28 w-32 rounded-lg" alt='main' ></img>
          <h1 class="text-center text-xl pb-1 font-semibold">Canteen</h1>
        </div>

        <div class="bg-white min-h-38 max-h-42 max-w-40 rounded-lg float-left m-2 shadow-lg border-2">
          <img src='./parking.jpg' class="h-28 w-32 rounded-lg m-" alt='main' ></img>
          <h1 class="text-center text-xl pb-1 font-semibold">Parking</h1>
        </div>

        <div class="bg-white h-34  w-34 rounded-lg float-right m-2 shadow-lg border-2">
          <img src='./gym.jpg' class="h-28 w-32 rounded-lg" alt='main' ></img>
          <h1 class="text-center text-lg pb-1 font-semibold">Gym</h1>
        </div>

        <div class="bg-white h-34  w-34 rounded-lg float-left m-2 shadow- border-2">
          <img src='./other.jpg' class="h-28 w-32 rounded-lg" alt='main' ></img>
          <h1 class="text-center text-lg pb-1 font-semibold">Other</h1>
        </div>




      </div>
    </div>
  );
}

export default Explore;
