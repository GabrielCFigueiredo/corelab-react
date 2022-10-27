import { useDispatch, useSelector } from "react-redux";
import Card from "../components/card/card";
import NavBar from "../components/navBar/navBar";
import { getAllFavorites, removeFavorite } from "../redux/feature/cartSlice";

export default function Favorite() {
  const { cartItems } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  console.log("teste", cartItems);

  const handleDelete = (id) => {
    dispatch(removeFavorite(id));
  };
  return (
    <div className="bg-background bg-cover">
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center items-center flex-wrap gap-10 h-screen">
        {cartItems.length !== 0 ? (
          cartItems.map((car) => {
            return (
              <div
                className="w-full h-[500px] lg:w-1/4 md:w-1/3 sm:w-11/12"
                key={car._id}
              >
                <Card
                  image={car.image}
                  carName={car.carName}
                  brand={car.brand}
                  year={car.year}
                  color={car.color}
                  price={car.price}
                  description={car.description}
                  id={car._id}
                  car={car}
                />
              </div>
            );
          })
        ) : (
          <div className="bg-red-600">nao existe</div>
        )}
      </div>
    </div>
  );
}
