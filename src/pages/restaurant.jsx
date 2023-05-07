import { useParams } from 'react-router-dom';
import NavBarSite from "../components/Navbar-site";
import Restaurantes from "../components/Restaurante";

function Restaurant(props) {
    const { id } = useParams()
    return (
        <div className="App">
            <p>{props.restaurante}</p>
            <NavBarSite/>
            <Restaurantes fk={id}/>
        </div>
    );
}

export default Restaurant;