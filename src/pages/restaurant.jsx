import NavBarSite from "../components/Navbar-site";
import Restaurantes from "../components/Restaurante";

function Restaurant() {
    return (
        <div className="App">
            <NavBarSite/>
            <Restaurantes/>
        </div>
    );
}

export default Restaurant;