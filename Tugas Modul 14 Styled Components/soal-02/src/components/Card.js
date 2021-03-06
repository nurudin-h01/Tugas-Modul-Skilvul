import { CardContainer, CardImage, CardBody, CardPrice, CardProductName, CardTitle, CardText } from './styles/Card';

import Button from './Button';


const Card = (props) => {
  return (
    <CardContainer width="400px">
      <CardImage src={props.data.imageUrl}/>
      <CardBody>
        <CardPrice>{props.data.price}</CardPrice>
        <CardProductName>{props.data.productName}</CardProductName>
        <Button />
      </CardBody>
    </CardContainer>
  );
}
export default Card;
