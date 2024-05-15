import React from "react";
import Header from "./header";

function Location() {
  return (
    <>
      <Header />
      <h1 class="font-bold text-xl pt-3">Live Location & Route</h1>
      <div class="bg-white max-w-auto min-h-auto">
        <img src="./guni_main.jpg" class=" min-w-80  p-5" />
      </div>
      <h1 class="font-bold text-xl pt-3">Next Location Photo</h1>
      <img src="./guni_main.jpg" class="p-5 min-w-80 " />
    </>
  );
}

export default Location;
