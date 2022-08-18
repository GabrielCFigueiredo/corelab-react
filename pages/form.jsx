import { useForm } from "react-hook-form";
import Input from "../components/input/input";
import { joiResolver } from "@hookform/resolvers/joi";
import { postSchema } from "../modules/product/product.schema";
import axios from "axios";
import { useRouter } from "next/router";
import { StyledForm, WrapperButton } from "../components/form.styles/form.style";
import Button from "../components/button/button";
import InputEdit from "../components/inputEdit/inputEdit";

export default function FormAdd() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm({
    resolver: joiResolver(postSchema),
  });

  const handleForm = async (data) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/product/product`,
        data
      );
      router.push("/");
    } catch (error) {}
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(handleForm)}>
        <InputEdit
          placeholder="digite a url da imagem"
          label={"Foto do Carro"}
          type={"text"}
          name={"image"}
          {...register("image")}
        />
        <InputEdit
          placeholder="carName"
          label={"Nome do Carro"}
          type={"text"}
          name={"carName"}
          {...register("carName")}
        />
        <InputEdit
          placeholder="brand"
          label={"Marca"}
          type={"text"}
          name={"brand"}
          {...register("brand")}
        />
        <InputEdit
          placeholder="year"
          label={"Ano"}
          type={"number"}
          name={"year"}
          {...register("year")}
        />
        <InputEdit
          placeholder="color"
          label={"Cor do Carro"}
          type={"text"}
          name={"color"}
          {...register("color")}
        />
        <InputEdit
          placeholder="price"
          label={"Preço"}
          type={"number"}
          name={"price"}
          {...register("price")}
        />
        <InputEdit
          placeholder="description"
          label={"Descrição"}
          type={"text"}
          name={"description"}
          {...register("description")}
        />
        <WrapperButton>
          <Button type="submit">salvar</Button>
        </WrapperButton>
      </StyledForm>
    </div>
  );
}
