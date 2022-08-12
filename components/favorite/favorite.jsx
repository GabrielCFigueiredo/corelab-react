import { Image, Wrapper } from "./favorite.styles";

export default function FavoriteCard({
  image,
  carName,
  brand,
  year,
  color,
  price,
  description,
  id,
}) {
  return (
    
      <Wrapper>
        <div>
          <Image src={id} alt="nome carro" />
          <p>{carName}</p>
        </div>
        <div>
          <span>{brand}</span>
        </div>
        <div>
          <span>{year}</span>
        </div>
        <div>
          <span>{color}</span>
        </div>
        <div>
          <span>{price}</span>
        </div>
        <div>
          <span>{description}</span>
        </div>
      </Wrapper>
  
  );
}
