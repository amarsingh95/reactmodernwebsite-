import React from 'react';
import imgPath from './flat.png';
const Home=()=>
{
    return (
        <>
        <section className="home-section">
            <img src={imgPath} />
        <div>
            <h1>This is Mordern Website Design</h1>
            <span>This is Below Navbar</span>

        </div>
        </section>
        <section>
            This is Another section
        </section>

      </>  
    );
}

export default Home;