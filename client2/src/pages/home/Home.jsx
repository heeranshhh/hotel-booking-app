import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
// import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import "./home.css";

const Home = () => {
  return (
    <div>
       {/* Navbar:prestige booking title and register/login */}
      <Navbar />
      {/* Header:stays, flights to the searchbar */}
      <Header/>
      <div className="homeContainer">
        <Featured/>
        {/* <h1 className="homeTitle">Browse by property type</h1> */}
        {/* <PropertyList/> */}
        <FeaturedProperties/>
      </div>
    </div>
  );
};

export default Home;
