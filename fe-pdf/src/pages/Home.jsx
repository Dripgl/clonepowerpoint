import React from "react";
import OrderPage from "../components/OrderPage";
import PreviewPdf from "../components/PreviewPdf";
import AddSignature from "../components/AddSignature";
import "../style/Home.css"


function Home() {
  return (
    <div className="home_container">
      
      <div className="content_box1">
        <OrderPage />
      </div>
      <div className="content_box2">
        <PreviewPdf />
      </div>
      <div className="content_box3">
        <AddSignature />
      </div>
  
    </div>
   
  );
}

export default Home;
