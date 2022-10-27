import Icon from "@mdi/react";
import { mdiSquareEditOutline } from "@mdi/js";
import { mdiDeleteForever } from "@mdi/js";
import { mdiHeart } from "@mdi/js";
import axios from "axios";
import { useState } from "react";
import { useSWRConfig } from "swr";
import { mdiStar } from "@mdi/js";
import { mdiStarOutline } from "@mdi/js";
import {
  CardDetails,
  CardImage,
  Image,
  Wrapper,
  WrapperCar,
  WrapperCarIcon,
} from "./card.styles";
import Edit from "../../pages/edit";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/feature/cartSlice";

export default function Card({
  image,
  carName,
  brand,
  year,
  color,
  price,
  description,
  id,
  car,
}) {
  const [favorite, setFavorite] = useState([]);
  const [editCar, setEditCar] = useState(false);
  const { mutate } = useSWRConfig();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.favorites);
  const [isFavorites, setIsFavorites] = useState(() => {
    const isFavoriteMovie = cartItems.find((item) => item.id === car.id);
    return !!isFavoriteMovie;
  });

  /*const handleFavorite = (
    id,
    image,
    carName,
    brand,
    year,
    price,
    description
  ) => {
    const list = [...favorite];
    const listCar = list.find((car) => car._id === id);
    if (!listCar) {
      list.push({
        _id: id,
        image: image,
        carName: carName,
        brand: brand,
        year: year,
        price: price,
        description: description,
        qtd: 1,
      });
    } else {
    }
    setFavorite(list);
  };*/

  const handleFavorite = () => {
    //dispatch(addFavorite(car));
    dispatch(removeFavorite(car.id));
    setIsFavorites((prevState) => !prevState);
  };

  const hanDelete = () => {
    //dispatch(addFavorite(car));
    dispatch(addFavorite(car));
    setIsFavorites((prevState) => !prevState);
  };

  const handleDelete = async () => {
    try {
      const deleteCar = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/product/product`,
        {
          data: {
            id,
          },
        }
      );
      if (deleteCar.status === 200) {
        mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/product/product`);
      }
    } catch (error) {}
  };

  const handleEdit = async () => {
    setEditCar(true);
  };

  const editSave = () => {
    setEditCar(false);
    mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/product/product`);
  };

  return (
    <div>
      <div>
        {!editCar && (
          <div className="container mx-auto">
            <div className=" flex flex-wrap pt-24 justify-center items-center ">
              <div className="shadow-lg rounded-lg h-full bg-white w-11/12">
                {isFavorites ? (
                  <Icon
                    path={mdiStar}
                    size={1}
                    onClick={handleFavorite}
                  />
                ) : (
                  <Icon path={mdiStarOutline} size={1} onClick={hanDelete} />
                )}
                <img
                  className="h-80 block w-full rounded-t-lg"
                  src={image}
                  alt="foto do carro"
                />
                <h1>{carName}</h1>
              </div>
            </div>
          </div>
        )}
        {editCar && (
          <Edit
            image={image}
            carName={carName}
            brand={brand}
            year={year}
            color={color}
            price={price}
            description={description}
            id={id}
            onSave={editSave}
          />
        )}
      </div>
    </div>
  );
}
