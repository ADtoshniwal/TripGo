import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
// import heroImg from "../assets/asset1.jpg";

function Home() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero"
        heroImg="https://plus.unsplash.com/premium_photo-1675368244123-082a84cf3072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1900&q=80"
        title="Your journey Your Story"
        text="Choose your favourite destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
