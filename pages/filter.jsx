import { joiResolver } from "@hookform/resolvers/joi";
import Link from "next/link";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/input/input";
import { CartContext } from "../Context";

export default function Filter() {
  const { setPrice, price } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm({});

  const handleFilter = (data) => {
    setPrice(data)
  };
  console.log("price", price);

  return (
    <div>
      <form onSubmit={handleSubmit(handleFilter)}>
        <Input
          placeholder="brand"
          label={"Marca"}
          type={"text"}
          name={"brand"}
          {...register("brand")}
        />
        <Input
          placeholder="year"
          label={"Ano"}
          type={"number"}
          name={"year"}
          {...register("year")}
        />
        <Input
          placeholder="color"
          label={"Cor do Carro"}
          type={"text"}
          name={"color"}
          {...register("color")}
        />
        <Input
          placeholder="preço minimo"
          label={"Preço Min"}
          type={"number"}
          name={"minimum-price"}
          {...register("minimum-price")}
        />
        <Input
          placeholder="preço maximo"
          label={"Preço Max."}
          type={"nimber"}
          name={"price-max"}
          {...register("price-max")}
        />
        <Link href={"/"}>
          <button type="submit">salvar</button>
        </Link>
      </form>
    </div>
  );
}
