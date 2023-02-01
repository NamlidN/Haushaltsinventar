import { Link } from "react-router-dom";
import H from "../../components/H/Header";
import "./Wal.css"



function Wal(){



    return(
<div className="walD">
<H/>
<br />
<br />
<br />
<br />
    <div className="BOX">
<br />
<br />
<br />
<br />
                <div> <Link to="/ok" >KLEIN</Link> </div>
                <div> <Link to="/om" >MITTEL</Link> </div>
                <div> <Link to="/og"> GROß</Link> </div>                  
</div>
</div>
        
    )
}
export default Wal