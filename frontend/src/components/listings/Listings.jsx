import React, { useEffect, useState } from 'react';

import {
	MapContainer,
	Marker, Polygon, Polyline,
	Popup,
	TileLayer
} from 'react-leaflet'

import {
	Grid,
	AppBar,
	Typography,
	Button,
	Card,
	CardHeader,
	CardContent,
	CardMedia, CircularProgress
}               from '@mui/material'
import { Icon } from "leaflet"

import houseIconPng     from "../../assets/Mapicons/house.png"
import apartmentIconPng from "../../assets/Mapicons/apartment.png"
import officeIconPng    from "../../assets/Mapicons/office.png"
import img1             from "../../assets/img1.jpg"
import myListings       from "../../assets/Data/Dummydata";

import polygonOne from "../shape/Shape"

import "./listings.styles.css"
import axios, {Axios}     from "axios";

function Listings() {
	
	const [ latitute, setLatitude ] = useState(51.541078280085614)
	const [ longitute, setLongitude ] = useState(-0.15871891189601836)
	
	const houseIcon = new Icon({
		                           iconUrl : houseIconPng,
		                           iconSize: [ 40, 40 ],
	                           })
	
	const apartmentIcon = new Icon({
		                               iconUrl : apartmentIconPng,
		                               iconSize: [ 40, 40 ],
	                               })
	
	const officeIcon = new Icon({
		                            iconUrl : officeIconPng,
		                            iconSize: [ 40, 40 ],
	                            })
	
	function goEast() {
		setLatitude()
		setLongitude()
	}
	
	function goCenter() {
		setLatitude()
		setLongitude()
	}
	
	const polyOne = [
		[ 51.505, -0.09 ],
		[ 51.51, -0.1 ],
		[ 51.51, -0.12 ],
	]
	
	const [ allListings, setAllListings ] = useState([])
	const [ dataIsLoading, setDataIsLoading ] = useState(true)
	
	useEffect(() => {
		const source = axios.CancelToken.source()
		async function GetAllListings() {
			try {
				const response = await axios.get(
					'http://localhost:8000/api/listings/', {cancelToken: source.token})
				setAllListings(response.data)
				setDataIsLoading(false)
			}
			catch ( error ) {
				console.log(error.response)
			}
		}
		
		GetAllListings()
		
		return () => {
			source.cancel()
		}
	}, [])
	
	console.log(allListings[0])
	
	if ( dataIsLoading === false ) {
		console.log(allListings[ 0 ].location)
	}
	
	if ( dataIsLoading === true ) {
		return (
			<Grid
				container justifyContent={ 'center' }
				alignItems={ 'center' }
				style={ { height: '100vh' } }
			>
				<CircularProgress/>
			</Grid>
		)
	}
	
	return (
		<Grid container>
			<Grid item xs={ 4 }>
				{ myListings.map((listing) => {
					return (
						<Card
							key={ listing.id }
							className={ "cardStyle" }
						>
							<CardHeader
								// action={
								// 	<IconButton
								// aria-label="settings">
								// <MoreVertIcon /> </IconButton> }
								title={ listing.title }
							/>
							<CardMedia
								className={ "pictureStyle" }
								component="img"
								image={ listing.picture1 }
								alt={ listing.title }
							/>
							<CardContent>
								<Typography variant="body2">
									{ listing.description.substring(
										0,
										200
									) }...
								</Typography>
							</CardContent>
							{ listing.property_status === "Sale" ? (
								<Typography
									variant="body2"
									className={ "priceOverlay" }
								>
									{ listing.listing_type }:
									${ " " }{ listing.price.toString()
									                 .replace(
										                 /\B(?=(\d{3})+(?!\d))/g,
										                 ","
									                 ) }
								</Typography>
							) : (
								  <Typography
									  variant="body2"
									  className={ "priceOverlay" }
								  >
									  { listing.listing_type }:
									  ${ " " }{ listing.price.toString()
									                   .replace(
										                   /\B(?=(\d{3})+(?!\d))/g,
										                   ","
									                   ) }{ " " } / { listing.rental_frequency }
								  </Typography>
							  ) }
							
							
							{/*<CardActions disableSpacing>*/ }
							{/*	<IconButton aria-label="add to favorites">*/ }
							{/*		<FavoriteIcon />*/ }
							{/*	</IconButton>*/ }
							{/*	<IconButton aria-label="share">*/ }
							{/*		<ShareIcon />*/ }
							{/*	</IconButton>*/ }
							{/*</CardActions>*/ }
						</Card>
					)
				}) }
			</Grid>
			<Grid item xs={ 8 } style={ { marginTop: "0.5rem" } }>
				<AppBar position={ 'sticky' }>
					<div style={ { height: '100vh' } }>
						<MapContainer
							center={ [
								51.541078280085614,
								-0.15871891189601836
							] } zoom={ 16 } scrollWheelZoom={ true }
						>
							<TileLayer
								attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								// url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								url={ "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" }
							/>
							<Polyline
								positions={ polyOne } weight={ 10 }
								color={ "green" }
							/>
							<Polygon
								positions={ polygonOne }
								color={ "yellow" }
								fillColor={ "blue" }
								fillOpacity={ 0.3 } opacity={ 0 }
							/>
							{ myListings.map((listing) => {
								function IconDisplay() {
									if ( listing.listing_type
									     === 'House' ) {
										return houseIcon
									}
									else if ( listing.listing_type
									          === 'Apartment' ) {
										return apartmentIcon
									}
									else if ( listing.listing_type
									          === 'Office' ) {
										return officeIcon
									}
								}
								
								return (
									<Marker
										key={ listing.id }
										icon={ IconDisplay() }
										position={ [
											listing.location.coordinates[ 0 ],
											listing.location.coordinates[ 1 ]
										] }
									>
										<Popup>
											
											<Typography
												variant={ "h5" }
											>{ listing.title }</Typography>
											<img
												src={ listing.picture1 }
												style={ {
													height: "14rem",
													width : "18rem"
												} }
											/>
											<Typography
												variant={ "body1" }
											>{
												listing.description.substring(
													0,
													150
												)
											}</Typography>
											<Button
												variant={ "contained" }
												fullWidth
											>Details</Button>
										</Popup>
									</Marker>
								)
							})
							}
							{/*<Marker*/ }
							{/*	icon={ houseicon } position={ [*/ }
							{/*	latitute,*/ }
							{/*	longitute*/ }
							{/*] }*/ }
							{/*>*/ }
							{/*	<Popup>*/ }
							{/*		*/ }
							{/*		<Typography variant={ "h5" }>A*/ }
							{/*			Title</Typography>*/ }
							{/*		<img*/ }
							{/*			src={ img1 } style={ {*/ }
							{/*			height: "14rem",*/ }
							{/*			width : "18rem"*/ }
							{/*		} }*/ }
							{/*		/>*/ }
							{/*		<Typography variant={ "body1" }>This*/ }
							{/*			is some text below the*/ }
							{/*			title</Typography>*/ }
							{/*		<Button*/ }
							{/*			variant={ "contained" }*/ }
							{/*			fullWidth*/ }
							{/*		>A Link</Button>*/ }
							{/*	</Popup>*/ }
							{/*</Marker>*/ }
						</MapContainer>
					</div>
				</AppBar>
			</Grid>
		</Grid>
	);
}

export default Listings;
