import { useSelector } from "react-redux"
import { getAllFavorites } from "../redux/feature/cartSlice";

export default function Favorite() {
    const {favorites} = useSelector((state) => state.favorites)


    console.log(favorites);
    return (
        <div>
            
        </div>
    )
}