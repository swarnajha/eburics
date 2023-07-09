import React from "react";
import Container from "./Container/container"
import ReactDOM from 'react-dom'
import LeftBar from "./Body/LeftBar";



function Service ()  {
    return (
<div className="App">
    <switch>
    <div className='flex gap-6'>
     <LeftBar/>
        <Container/>
        </div>
      {/* <Sidebar/>
      <About/> */}
      {/* <Routes path="/dashboard" element={<About />} /> */}
          {/* <Route path="/" element={<About />} />
          <Route path="/dashboard" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/analytics" element={<Setting />} />
          <Route path="/productList" element={<To />} /> */}
   
        </switch>
      </div>
    );
};

export default Service
 