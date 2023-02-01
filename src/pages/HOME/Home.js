import { Link } from "react-router-dom";
import H from "../../components/H/Header";
import "./Home.css";

function Home() {

    return (
        <>
        <H />
        <main>
<article>
            <h1>Mein Haushaltsverzeichnis</h1>
            </article>
            <section>
            <Link className="a" to="/g">

            <div>
                <span className="one">
                <h1>Groß</h1>
                </span>
           
            </div>
            </Link>
            <Link className="a" to="/m">

            <div>
        
                <span className="tow">
                <h1>Mittel</h1>
                </span>
        
            </div>
            </Link>
          <Link className="a" to="/k">
            <div>
       
                <span className="thr">
                <h1>Klein</h1>
                </span>
            
            </div>
             </Link>
            </section>
        </main>
        </>
    );

}
export default Home;
