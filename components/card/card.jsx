import Icon from "@mdi/react";
import { mdiSquareEditOutline } from "@mdi/js";
import { mdiDeleteForever } from "@mdi/js";
import { mdiHeart } from "@mdi/js";
import axios from "axios";
import { useContext, useState } from "react";
import { useSWRConfig } from "swr";
import {
  CardDetails,
  CardImage,
  Image,
  Wrapper,
  WrapperCar,
  WrapperCarIcon,
} from "./card.styles";
import { CartContext } from "../../Context";
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
  car
}) {
  const [favorite, setFavorite] = useState([]);
  const [editCar, setEditCar] = useState(false);
  const { mutate } = useSWRConfig();
  const dispatch = useDispatch()
  

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
    
    dispatch(addFavorite(car))
  }
  
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
      <Wrapper>
        <WrapperCarIcon>
          <div>
            <Icon
              path={mdiSquareEditOutline}
              size={1}
              color="blue"
              onClick={handleEdit}
            />
          </div>
          <div>
            <Icon path={mdiDeleteForever} size={1} onClick={handleDelete} />
          </div>
          <div>
            <Icon
              path={mdiHeart}
              size={1}
              color="red"
              onClick={() => handleFavorite(car)}
            />
          </div>
        </WrapperCarIcon>
        {!editCar && (
        <WrapperCar>
            <CardImage>
              <Image src={image} alt="foto do carro"></Image>
              <h1>{carName}</h1>
            </CardImage>

            <CardDetails>
              <div>
                <span>Marca: {brand}</span>
              </div>
              <div>
                <span>Ano: {year}</span>
              </div>
              <div>
                <span>Cor: {color}</span>
              </div>
              <div>
                <span>preço: {price}</span>
              </div>
              <div>
                <span>Descrição: {description}</span>
              </div>
            </CardDetails>
          </WrapperCar>
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
      </Wrapper>
    </div>
  );
}
