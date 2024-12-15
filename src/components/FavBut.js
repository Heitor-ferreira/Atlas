import { Link } from "react-router-dom";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useContext } from "react";
import { Context } from "../context/Context";
import "./FavBut.css";


const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: -10,
        top: 0,
        border: `2px solid #000`,
        padding: "0 4px",
        backgroundColor: "#fff",
    },
}));

export default function FavBut() {
    const { items } = useContext(Context);

    const cartQuantity = items.length;

    return (
        <div>

            <Link to="/favorite">
                <div className="button-favorite">
                    <StyledBadge badgeContent={cartQuantity}>
                        <BookmarksIcon aria-label="cart" size="large"
                            sx={{
                                fontSize: 40,
                                color: '#000',


                            }}
                        > </BookmarksIcon>
                    </StyledBadge>
                </div>
            </Link>

        </div>
    );
}