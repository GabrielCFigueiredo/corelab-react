import { useForm } from "react-hook-form";
import Input from "../components/input/input";
import { joiResolver } from "@hookform/resolvers/joi";
import { postSchema } from "../modules/product/product.schema";
import axios from "axios";
import { useRouter } from "next/router";
import {
  StyledForm,
  WrapperButton,
} from "../components/form.styles/form.style";
import Button from "../components/button/button";

export default function FormAdd() {
  const router = useRouter();

  const { register, handleSubmit } = useForm({
    resolver: joiResolver(postSchema),
  });

  const handleForm = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/product/product`,
        data
      );
      if (response.status === 201) {
        router.push("/");
      }
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <input
          placeholder="digite a url da imagem"
          label={"Foto do Carro"}
          type={"text"}
          name={"image"}
          {...register("image")}
        />
        <input
          placeholder="carName"
          label={"Nome do Carro"}
          type={"text"}
          name={"carName"}
          {...register("carName")}
        />
        <input
          placeholder="brand"
          label={"Marca"}
          type={"text"}
          name={"brand"}
          {...register("brand")}
        />
        <input
          placeholder="year"
          label={"Ano"}
          type={"number"}
          name={"year"}
          {...register("year")}
        />
        <input
          placeholder="color"
          label={"Cor do Carro"}
          type={"text"}
          name={"color"}
          {...register("color")}
        />
        <input
          placeholder="price"
          label={"Preço"}
          type={"number"}
          name={"price"}
          {...register("price")}
        />
        <input
          placeholder="description"
          label={"Descrição"}
          type={"text"}
          name={"description"}
          {...register("description")}
        />
        <div>
          <Button type="submit">Criar</Button>
        </div>
      </form>
    </div>
  );
}
