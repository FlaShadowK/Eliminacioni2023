import { Link, useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <Link>
            <button type="button" onClick={() => navigate(-1)} className="back-button">⤾</button>
        </Link>
    );
}

export default BackButton;