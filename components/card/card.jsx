import Icon from "@mdi/react";
import { mdiSquareEditOutline } from "@mdi/js";
import { mdiDeleteForever } from "@mdi/js";
import { mdiHeart } from "@mdi/js";
import axios from "axios";
import { useState } from "react";
import { useSWRConfig } from "swr";
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
import { addFavorite } from "../../redux/feature/cartSlice";

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

  const handleFavorite = (car) => {
    dispatch(addFavorite(car));
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
            <div className=" flex flex-wrap pt-24 ">
              <div className="shadow-lg rounded-lg h-full bg-white w-screen">
                <img className="h-80 block w-full rounded-t-lg" src={image} alt="foto do carro" />
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
