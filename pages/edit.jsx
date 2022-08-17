import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button from "../components/button/button";
import InputEdit from "../components/inputEdit/inputEdit";
import { postSchema } from "../modules/product/product.schema";
import { StyledFormEdit, WrapperButton, WrapperEdit } from "../components/edit.styles/edit.style";

export default function Edit({
  image,
  carName,
  brand,
  year,
  color,
  price,
  description,
  id,
  onSave,
}) {
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    resolver: joiResolver(postSchema),
    mode: "all",
  });

  const editSave = async (data) => {
    try {
      const edit = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/product/product`,
        {
          image: data.image,
          carName: data.carName,
          brand: data.brand,
          year: data.year,
          color: data.color,
          price: data.price,
          description: data.description,
          id: id,
        }
      );
      if (edit.status === 200) {
        onSave();
      }
    } catch (error) {}
  };
  return (
    <WrapperEdit>
      <StyledFormEdit onSubmit={handleSubmit(editSave)}>
        <InputEdit
          placeholder="digite a url da imagem"
          label={"Foto do Carro"}
          type={"text"}
          name={"image"}
          defaultValue={image}
          {...register("image")}
        />
        <InputEdit
          placeholder="carName"
          label={"Nome do Carro"}
          type={"text"}
          name={"carName"}
          defaultValue={carName}
          {...register("carName")}
        />
        <InputEdit
          placeholder="brand"
          label={"Marca"}
          type={"text"}
          name={"brand"}
          defaultValue={brand}
          {...register("brand")}
        />
        <InputEdit
          placeholder="year"
          label={"Ano"}
          type={"number"}
          name={"year"}
          defaultValue={year}
          {...register("year")}
        />
        <InputEdit
          placeholder="color"
          label={"Cor do Carro"}
          type={"text"}
          name={"color"}
          defaultValue={color}
          {...register("color")}
        />
        <InputEdit
          placeholder="price"
          label={"Preço"}
          type={"number"}
          name={"price"}
          defaultValue={price}
          {...register("price")}
        />
        <InputEdit
          placeholder="description"
          label={"Descrição"}
          type={"text"}
          name={"description"}
          defaultValue={description}
          {...register("description")}
        />
        <WrapperButton>
          <Button type="submit">salvar alteração</Button>
        </WrapperButton>
      </StyledFormEdit>
    </WrapperEdit>
  );
}
