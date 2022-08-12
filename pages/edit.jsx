import { joiResolver } from "@hookform/resolvers/joi";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button from "../components/button/button";
import { Input } from "../components/inputEdit/inputEdit.styles";
import { postSchema } from "../modules/product/product.schema";
import { StyledForm } from "./form.styles";

export default function Edit({
  image,
  carName,
  brand,
  year,
  color,
  price,
  description,
  id,
  onSave
}) {
const router = useRouter()
  const {
    register,
    handleSubmit,
  } = useForm({
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
            onSave()
            
        }
    } catch (error) {}
  };
  return (
    <div>
      <StyledForm onSubmit={handleSubmit(editSave)}>
      <Input
          placeholder="digite a url da imagem"
          label={"Foto do Carro"}
          type={"text"}
          name={"image"}
          defaultValue={image}
          {...register("image")}
        />
        <Input
          placeholder="carName"
          label={"Nome do Carro"}
          type={"text"}
          name={"carName"}
          defaultValue={carName}
          {...register("carName")}
        />
        <Input
          placeholder="brand"
          label={"Marca"}
          type={"text"}
          name={"brand"}
          defaultValue={brand}
          {...register("brand")}
        />
        <Input
          placeholder="year"
          label={"Ano"}
          type={"number"}
          name={"year"}
          defaultValue={year}
          {...register("year")}
        />
        <Input
          placeholder="color"
          label={"Cor do Carro"}
          type={"text"}
          name={"color"}
          defaultValue={color}
          {...register("color")}
        />
        <Input
          placeholder="price"
          label={"Preço"}
          type={"number"}
          name={"price"}
          defaultValue={price}
          {...register("price")}
        />
        <Input
          placeholder="description"
          label={"Descrição"}
          type={"text"}
          name={"description"}
          defaultValue={description}
          {...register("description")}
        />
        <Button type="submit">salvar alteração</Button>
      </StyledForm>
    </div>
  );
}
