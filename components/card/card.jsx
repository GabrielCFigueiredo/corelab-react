import Icon from "@mdi/react";
import { mdiSquareEditOutline } from "@mdi/js";
import axios from "axios";
import { useState } from "react";
import { useSWRConfig } from "swr";
import { mdiStar } from "@mdi/js";
import { mdiStarOutline } from "@mdi/js";
import { mdiTrashCanOutline } from '@mdi/js';
import { mdiPencil } from '@mdi/js';
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

  const handleFavorite = (id) => {
    //dispatch(addFavorite(car));
    dispatch(removeFavorite(id));
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
            <div className=" flex flex-wrap pt-3 justify-center items-center ">
              <div className="shadow-lg rounded-lg  bg-white w-11/12 ">
              <div className="flex justify-end pr-20 mr-3 " >
                  <Icon className="absolute bg-white rounded cursor-pointer my-3 " path={mdiPencil} size={1.5} color={"black"} onClick={handleEdit} />
                </div>
                <div className="flex justify-end pr-10 mr-3 " >
                  <Icon className="absolute bg-white cursor-pointer rounded mt-3 " path={mdiTrashCanOutline} size={1.5} color={"red"} onClick={handleDelete} />
                </div>
                {isFavorites ? (
                  <div className="flex justify-end mr-3 ">
                    <Icon
                      className="absolute bg-black cursor-pointer rounded mt-3 "
                      path={mdiStar}
                      size={1.5}
                      onClick={handleFavorite}
                      color={"yellow"}
                    />
                  </div>
                ) : (
                  <div className="flex justify-end mr-3">
                    <Icon
                      className="absolute w-16 h-16 bg-black cursor-pointer rounded mt-3 "
                      path={mdiStarOutline}
                      size={1.5}
                      onClick={hanDelete}
                      color={"white"}
                    />
                  </div>
                )}
                <img
                  className="h-80 block w-full rounded-t-lg"
                  src={image}
                  alt="foto do carro"
                />
                <div>
                  <h1><span className="font-extrabold">Nome do Produto:</span> {carName}</h1>
                </div>
                <div>
                  <span><span className="font-extrabold">Marca:</span> {brand}</span>
                </div>
                <div>
                  <span><span className="font-extrabold">Ano de Fabricação:</span> {year}</span>
                </div>
                <div>
                  <span><span className="font-extrabold">Valor do produto:</span> {price}</span>
                </div>
                <div>
                  <span><span className="font-extrabold">Informação do produto:</span> {description}</span>
                </div>
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
            setEditCar={setEditCar}
          />
        )}
      </div>
    </div>
  );
}
