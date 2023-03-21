import React                  from 'react';
import { Button, Typography } from "@mui/material";
import city                   from '../../assets/city.jpg'
import './home.styles.css'

function Home(props) {
	
	return (
		<>
			<div style={ { position: 'relative' } }>
				<img src={ city } className={ 'cityImg' }/>
				<div className={ 'overlayText' }>
					<Typography
						variant={ 'h1' } className={ "homeText" }
					>FIND YOUR <span style={ { color: 'green' } }>NEXT PROPERTY</span> ON
						THE LBREP
						WEBSITE</Typography>
					<Button
						variant={ 'contained' } style={ {
						fontSize       : '3.5rem',
						borderRadius   : '15px',
						backgroundColor: 'green',
						marginTop      : '2rem',
						boxShadow      : '3px 3px 3px white'
					}
					}
					>SEE ALL PROPERTIES</Button>
				</div>
			</div>
		</>
	);
}

export default Home;
