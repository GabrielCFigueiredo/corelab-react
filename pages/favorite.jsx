import { useSelector } from "react-redux"
import { getAllFavorites } from "../redux/feature/cartSlice";

export default function Favorite() {
    const {cartItems} = useSelector((state) => state.favorites)


    console.log(cartItems);
    return (
        <div>
            {
                cartItems.map((car) => {
                    return (
                        <div key={car.id}>
                            <img className="h-80 block w-full rounded-t-lg" src={car.image} />
                        </div>
                    )
                })
            }
        </div>
    )
}