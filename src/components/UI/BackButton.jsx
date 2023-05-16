import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button type="button" onClick={() => navigate(-1)} className="back-button">⤾</button>
    );
}

export default BackButton;