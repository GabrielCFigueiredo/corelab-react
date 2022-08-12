import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { mdiTune } from "@mdi/js";
import axios from "axios";
import { useContext } from "react";
import Card from "../components/card/card";
import Input from "../components/input/input";
import { CartContext } from "../Context";
import {
  CardCard,
  Wrapper,
  WrapperButton,
  WrapperCardCar,
  WrapperCardFavorite,
  WrapperIconSearching,
  WrapperIconsettings,
  WrapperInput,
} from "./index.styles";
import Button from "../components/button/button";
import Link from "next/link";
import FavoriteCard from "../components/favorite/favorite";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data.products);

export default function Home() {
  const { setData, favorite } = useContext(CartContext);
 
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/product`,
    fetcher
  );
  return (
    <Wrapper>
      <WrapperInput>
        <WrapperIconSearching>
          <Icon path={mdiMagnify} size={1} />
        </WrapperIconSearching>
        <Input placeholder="Pesquisar" />

        <WrapperIconsettings>
          <Link href="/filter">
            <Icon path={mdiTune} size={1} />
          </Link>
        </WrapperIconsettings>
      </WrapperInput>
      <WrapperButton>
        <Link href={"/form"}>
          <Button>Adicionar</Button>
        </Link>
      </WrapperButton>
      <div>
        <h1>Favoritos :</h1>
      </div>
      <WrapperCardCar>
        {favorite &&
          favorite.map((favorite) => {
            return (
              <div key={favorite.id}>
                <FavoriteCard
                  image={favorite.image}
                  carName={favorite.carName}
                  brand={favorite.brand}
                  year={favorite.year}
                  color={favorite.color}
                  price={favorite.price}
                  description={favorite.description}
                  id={favorite._id}
                />
              </div>
            );
          })}
      </WrapperCardCar>
      <WrapperCardCar>
        {data &&
          data.map((car) => {
            return (
              <CardCard key={car.id}>
                <Card
                  image={car.image}
                  carName={car.carName}
                  brand={car.brand}
                  year={car.year}
                  color={car.color}
                  price={car.price}
                  description={car.description}
                  id={car._id}
                />
              </CardCard>
            );
          })}
      </WrapperCardCar>
    </Wrapper>
  );
}
