import { useDispatch, useSelector } from "react-redux"
import { getAllFavorites, removeFavorite } from "../redux/feature/cartSlice";

export default function Favorite() {
    const {cartItems} = useSelector((state) => state.favorites)
    const dispatch = useDispatch()

    console.log("teste",cartItems);

    const handleDelete = (id) => {
        dispatch(removeFavorite(id))
    }
    return (
        <div className="container mx-auto">

            {
                cartItems.map(({car, image, id}) => {
                    return (
                        <div className="container mx-auto" key={id}>
                            <div className="flex flex-wrap pt-24">
                            <img className="h-80 block w-full rounded-t-lg" src={image} />
                            </div>
                            <button onClick={()=>handleDelete(id)}>remove</button>
                        </div>
                    )
                })
            }
        </div>
    )
}