import React from "react";
import './App.css'
import Header from "./components/Header";
import Card from "./components/Card";
import ProgramCard from "./components/ProgramCard";
import Footer from "./components/Footer";
function App() {


  return (
    <>
    <section >
      <Header />
      </section>
      <section className="Intro" >
        <Card 
        img = "journalist.jpg"
        heading = "Meet Mr. Arun"
        
        /> 
      </section>
 
      <section className="description">
   
      <p> <span class="purple-text">A Padma Shri Laureate</span> ,From Doordarshan to NDTV India, Mr Arun's illustrious career spanned across various platforms, showcasing his versatility and commitment to journalistic excellence. 
     His engaging hosting style captivated audiences nationwide, whether he was exploring the diverse culinary landscape or facilitating direct citizen engagement.
      With all this experience, now after retirement he wishes to share his knowledge with the aspiring journalists.</p>

  </section>


   <h2> If you want to gain practical knowledge</h2>
    <button><h3> JOIN THIS COURSE</h3></button>
  

    <section className="programDetails">
       <ProgramCard />

    </section>

<section>
  <Footer />
</section>
    </>
  )
}

export default App
