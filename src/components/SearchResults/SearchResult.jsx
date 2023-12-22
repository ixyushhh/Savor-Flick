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
min-height: 100vh;
background-image: url("/bg.png");
background-size: cover;
`;

const FoodCards = styled.div`
display: flex;
column-gap: 20px;
row-gap: 35px;
flex-wrap: wrap;
justify-content: center;
padding-top: 50px;
`;

const FoodCard = styled.div`
margin-top: 18px;
border: 1px solid white;
width: 340px;
height: 160px;
display: flex;
justify-content: space-between;
padding: 6px;
border-radius: 18px;
gap: 10px;
align-items: top;


      background: rgba(255, 255, 255, 0.1); 
      backdrop-filter: blur(2px);     
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 

h1{
    font-size: 20px;
    font-weight: 600;
    margin-top: 6px;
}

p{
    font-size: 12px;
    margin-top: 6px;
}

Button{
    position: absolute;
    bottom: 20px;
    right: 20px;
    margin-top: 6px;
    font-size: 10px;
}

`;