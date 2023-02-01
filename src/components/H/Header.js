import { Link } from "react-router-dom";
import "./Header.css";

function H() {

    return (
        <header>
            <nav>
 <Link to="/"><h1>Home</h1></Link>
 <Link to="/k"><h1>Kleiner</h1></Link>
 <Link to="/m"><h1>Mittel</h1></Link>
 <Link to="/g"><h1>Groß</h1></Link>
 <Link to="/o"><h1>Objekt Hinzufügen</h1></Link>
            </nav>
        </header>
    );

}
export default H;
