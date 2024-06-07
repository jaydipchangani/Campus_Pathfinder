import React from 'react';
import Header from './header';
import Herosection from './Herosection'
// import { supabase } from './config/supabaseClient';
function Home(){
    // console.log(supabase)
    return(
        <>
        
        <Header/>
        <Herosection/>
        </>
    );
}

export default Home;