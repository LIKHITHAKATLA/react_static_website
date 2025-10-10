
// import "./App.css"
// import AboutUs from "./components/AboutUs/AboutUs"
// import ContactUs from "./components/ContactUs/ContactUs"
// import Footer from "./components/Footer/Footer"
// import Gallary from "./components/Gallary/Gallary"
// import Home from "./components/Home/Home"
// import Navbar from "./components/Navbar/Navbar"
// import Services from "./components/Services/Services"
// function App(){
//   return (
//     <div>
      
//       <Navbar></Navbar>
//       <Home></Home>
//       <AboutUs></AboutUs>
//       <Gallary></Gallary>
//       <Services></Services>
//       <ContactUs></ContactUs>
//       <Footer></Footer>
      
//     </div>
//   )

// }

// export default App






import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallary from "./components/Gallary/Gallary";
import Services from "./components/Services/Services";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Gallary />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
