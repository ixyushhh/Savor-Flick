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
                <Button>${food.price.toFixed(2)}</Button>
                </div>
            </FoodCard>
        ))}
    </FoodCards>
    </FoodContainer>
    )
}

export default SearchResult


const FoodContainer = styled.section`
// height: calc(100vh - 222px);
height: 100vh;
background-image: url("/bg.png");
background-size: cover;
`;

const FoodCards = styled.div`
display: flex;
flex-direction: row;
gap: 16px;
flex-wrap: wrap;
justify-content: center;
`;

const FoodCard = styled.div`
margin-top: 18px;
border: 1px solid white;
width: 300px;
height: 150px;
display: flex;
flex-direction: row;
justify-content: center;
padding: 6px;
border-radius: 18px;
gap: 12px;


      background: rgba(255, 255, 255, 0.1); 
      backdrop-filter: blur(2px);     
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

h1{
    font-size: 20px;
    margin-top: 6px;
}

p{
    font-size: 10px;
    margin-top: 6px;
}

Button{
    margin-top: 10px;
    font-size: 10px;
}

`;