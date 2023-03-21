import React                                   from 'react';
import {link, useNavigate }                     from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import './header.styles.css'

function Header(props) {
	const navigate = useNavigate()
	
	return (
		<AppBar position="static">
			<Toolbar>
				<div className={ 'leftNav' }>
					<Button color="inherit" onClick={() => navigate("/")}>
						<Typography
							variant='h4'
						>LBREP
						</Typography>
					</Button>
				</div>
				<div>
					<Button
						color="inherit"
						style={ { marginRight: '2rem' } }
						onClick={() => navigate("/listings")}
					>
						<Typography
							variant='h6'
						>Listings
						</Typography>
					</Button>
					
					<Button
						color="inherit"
						style={ { marginRight: '2rem' } }
					>
						<Typography
							variant='h6'
						>Agencies
						</Typography>
					</Button>
				</div>
				<div
					className={ 'rightNav' }
				>
					<Button
						style={ {
							backgroundColor: 'green',
							color          : 'white',
							width          : '15rem',
							fontSize       : '1.1rem',
							marginRight    : '1rem'
						} }
					>
						Add Property
					</Button>
					<Button
						style={ {
							backgroundColor: 'white',
							color          : 'black',
							width          : '15rem',
							fontSize       : '1.1rem',
							marginRight    : '1rem'
						} }
						onClick={() => navigate("/login")}
					>
						Login
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
