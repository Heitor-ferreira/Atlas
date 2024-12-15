import { useContext, useState } from "react";
import { Context } from "../context/Context";

import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import MoreIcon from '@mui/icons-material/More';
import Popup from './Popup';
import "./Card.css";

export default function Product({
    id,
    thumbnail,
    title,
    description,
}) {
    const { addItemToCart } = useContext(Context);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };


    return (
        <div className="card-body">
            <div className="card-img">
            <img src={thumbnail} alt={title} />
            </div>
            <div className="card-content">
                <div>
                    <h2>{title}</h2>
                </div>
                <p className="card-actions">
                    <button
                        onClick={() => addItemToCart(id)}
                    >
                        <BookmarkAddIcon sx={{ fontSize: 30 }} />
                    </button>

                    <button onClick={togglePopup}><MoreIcon sx={{ fontSize: 30 }} />
                    </button>
                    {isPopupOpen && (
                        <Popup
                            onClose={togglePopup} // Fecha o popup
                            title={title}
                            description={description}
                            thumbnail={thumbnail}
                        />
                    )}

                </p>
            </div>

        </div>
    );
}
