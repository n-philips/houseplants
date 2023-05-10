import { Link } from "react-router-dom";

function Details (props) {
    return (
        <section>
            <div>Plant details go here</div>
            <li className="link"><Link to='/'>back</Link></li>

        </section>
    )
}

export default Details;