import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { postSchema } from "../modules/product/product.schema";
import axios from "axios";
import { useRouter } from "next/router";


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
    <div className="w-full">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(handleForm)}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nome do Produto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Digite o nome do produto"
            label={"Nome do produto"}
            type={"text"}
            name={"carName"}
            {...register("carName")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Marca do produto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Digite a marca do produto"
            label={"Marca"}
            type={"text"}
            name={"brand"}
            {...register("brand")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Ano
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Digite o ano"
            label={"Ano"}
            type={"number"}
            name={"year"}
            {...register("year")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Pre??o
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Digite o pre??o"
            label={"Pre??o"}
            type={"number"}
            name={"price"}
            {...register("price")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Cor
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Cor do produto"
            label={"Cor do Carro"}
            type={"text"}
            name={"color"}
            {...register("color")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Descri????o
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Descri????o"
            label={"Descri????o"}
            type={"text"}
            name={"description"}
            {...register("description")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Imagem
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Imagem do produto"
            label={"Foto do Carro"}
            type={"text"}
            name={"image"}
            {...register("image")}
          />
        </div>
        <div className="flex items-center justify-between">
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Criar Anuncio
      </button>
    </div>
      </form>
    </div>
  );
}
