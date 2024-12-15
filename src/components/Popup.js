import "./pop.css";

export default function Popup({ onClose, title, description, thumbnail }) {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{title}</h2>
                <img className="popup-image" src={thumbnail} alt={title} />
                <p className="popup-description">{description}</p>
            </div>
        </div>
    );
}
