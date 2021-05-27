import React from 'react';
import { navigate, Link } from '@reach/router';

const HomePage = (props) => {
  const { submitHandler } = props;
  


  return(
    <div>
      <h1>Welcome To SneakerSaga!</h1>
      <br />
      <br />
      <h3>The number one sneaker boutique in the world where you can buy & sell the hottest & most exclusive shoes in the market!</h3>
      <h3><Link to='/signin'>Login</Link>  or signup to enter.</h3>
      <img src="https://media.istockphoto.com/photos/pile-of-new-sports-shoes-picture-id925677656?k=6&m=925677656&s=612x612&w=0&h=A_YJCY10bV5U6_nqY_ViugB4MM4tDePpifyXh4GVfRY=" alt="sneaker-background" />
      <br />
      <form>
        <div>
        <h5>Not a member? Click <Link to='/signup'>here</Link> to signup!</h5>
        </div>
      </form>
    </div>
  )
}

export default HomePage; 