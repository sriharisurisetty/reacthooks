import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import NavBar from "./components/NavBar.jsx";
import HomeDetails from "./components/HomeDetails.jsx";
import OrderSummary from "./components/OrderSummary.jsx";
import NoMatch from "./components/NoMatch.jsx";
import Products from "./Products.jsx";
import FeaturedProducts from "./components/FeaturedProducts.jsx";
import NewProducts from "./components/NewProducts.jsx";
import Users from "./components/Users.jsx";
import UserDetails from "./components/UserDetails.jsx";
import Profile from "./components/Profile.jsx";
import HookCounter from "./HookComponents/HookCounter.jsx";
import DataFetching from "./HookComponents/DataFetching.jsx";

function App() {
  return (

    <DataFetching/>
/*     <>
  <NavBar/>
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/homeDetails" element={HomeDetails()} />
        <Route path="/about" element={About()} />
        <Route path="/order-summary" element={OrderSummary() } />
        <Route path="*" element={NoMatch() } />
        <Route path="/products" element={Products() } >
        <Route index element={FeaturedProducts() } />
          <Route path="featured" element={FeaturedProducts() } />
          <Route path="new" element={NewProducts() } />
        </Route>
        <Route path="users" element={Users() } ></Route>
        <Route path="users/:userId" element={<UserDetails />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
</> */
  )
}

 export default App