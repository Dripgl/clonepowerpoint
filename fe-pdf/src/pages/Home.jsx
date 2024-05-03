import React from "react";
import Navbar from "../components/Navbar";
import OrderPage from "../components/OrderPage";
import PreviewPdf from "../components/PreviewPdf";
import AddSignature from "../components/AddSignature";
import "../style/Home.css"


function Home() {
  return (
    <div>
      <Navbar />
       <div className="home_container">
      <div className="order_conainer">
        <OrderPage />
      </div>
      <div>
        <PreviewPdf />
      </div>
      <div>
        <AddSignature />
      </div>
    </div>
    </div>
   
  );
}

export default Home;
