import styled from 'styled-components'
import { Button, CARD_URL } from '../../App';

const SearchResult = ({data}) => {
  return (
    <FoodContainer>
    <FoodCards>
        {data?.map((food) => (
            <FoodCard key={food.name}>
                <div className='food_image'>
                    <img src={CARD_URL + food.image}/>
                </div>
                <div className='food_info'>
                    <div className='info'>
                        <h1>{food.name}</h1>
                        <p>{food.text}</p>
                    </div>
                </div>
                <Button>${food.price.toFixed(2)}</Button>
            </FoodCard>
        ))}
    </FoodCards>
    </FoodContainer>
    )
}

export default SearchResult


const FoodContainer = styled.section`
height: calc(100vh - 222px);
background-image: url("/bg.png");
background-size: cover;
`;

const FoodCards = styled.div`

`;

const FoodCard = styled.div`

`;