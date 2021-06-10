import React from 'react';
import { Link } from '@reach/router';

const HomePage = () => {
  
  return(
    <div>
      <h1>Welcome To SneakerSaga!</h1>
      <br />
      <br />
      <h3>The only place you need to look for the history of all retro'd Air Jordans by one of the greatest basketball players and entrepreneurs of all time, Michael Jordan.</h3>
      <h3>To get started, please <Link to='/signin'>login</Link>  or <Link to='/signup'>signup</Link> to enter.</h3>
      <img src="https://content.sportslogos.net/news/2015/01/Jumpman-Logo-Lawsuit.png" alt="sneaker-background" />
      <br />
      <div>
        <p>
          Click <Link to='/about'>here</Link> to learn about us!
        </p>
      </div>
    </div>
  )
}

export default HomePage; 