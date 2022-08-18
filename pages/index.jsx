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
  WrapperIconSearching,
  WrapperIconsettings,
  WrapperInput,
  WrapperLayout,
} from "../components/index.styles/index.style";
import Button from "../components/button/button";
import Link from "next/link";
import FavoriteCard from "../components/favorite/favorite";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data.products);

export default function Home() {
  const { setData, favorite, filter, setFilter, price } =
    useContext(CartContext);

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/product`,
    fetcher
  );

  const lista =
    data &&
    data.filter((car) => {
      return Object.keys(car).some((key) =>
        car[key]
          .toString()
          .toLowerCase()
          .includes(filter.toString().toLowerCase())
      );
    });
  return (
    <Wrapper>
      <WrapperLayout>
        <WrapperInput>
          <WrapperIconSearching>
            <Icon path={mdiMagnify} size={1} />
          </WrapperIconSearching>
          <Input
            placeholder="Pesquisar"
            onChange={(e) => setFilter(e.target.value)}
          />

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
      </WrapperLayout>
      <div>
        <h1>Favoritos :</h1>
      </div>
      <WrapperCardCar>
        {favorite &&
          favorite.map((favorite) => {
            return (
              <CardCard key={favorite.id}>
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
              </CardCard>
            );
          })}
      </WrapperCardCar>
      <WrapperCardCar>
        {lista &&
          lista.map((car) => {
            return (
              <CardCard key={car._id}>
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
