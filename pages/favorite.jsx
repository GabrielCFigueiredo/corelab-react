import { useSelector } from "react-redux"
import { getAllFavorites } from "../redux/feature/cartSlice";

export default function Favorite() {
    const {cartItems} = useSelector((state) => state.favorites)


    console.log(cartItems);
    return (
        <div className="container mx-auto">

            {
                cartItems.map((car) => {
                    return (
                        <div className="container mx-auto" key={car.id}>
                            <div className="flex flex-wrap pt-24">
                            <img className="h-80 block w-full rounded-t-lg" src={car.image} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}