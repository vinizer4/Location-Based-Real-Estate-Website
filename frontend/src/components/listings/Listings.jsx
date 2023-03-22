import React from 'react';

import {
	MapContainer,
	Marker,
	Popup,
	TileLayer
} from 'react-leaflet'

import { Grid, AppBar, Typography } from '@mui/material'
import {Icon} from "leaflet"

import houseIconPng from "../../assets/Mapicons/house.png"
import apartmentIconPng from "../../assets/Mapicons/apartment.png"
import officeIconPng from "../../assets/Mapicons/office.png"

function Listings() {
	const houseicon = new Icon({
		iconUrl: houseIconPng,
		iconSize: [40, 40],
	                           })
	
	const apartmentIcon = new Icon({
		                           iconUrl: apartmentIconPng,
		                           iconSize: [40, 40],
	                           })
	
	const officeIcon = new Icon({
		                               iconUrl: officeIconPng,
		                               iconSize: [40, 40],
	                               })
	
	return (
		<Grid container>
			<Grid item xs={4}>
				<Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
			</Grid>
			<Grid item xs={8}>
				<AppBar position={'sticky'}>
					<div style={{height: '100vh'}}>
						<MapContainer center={[-22.951955502815867, -43.210326270667416]} zoom={44} scrollWheelZoom={true}>
							<TileLayer
								attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								// url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
								url={"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"}
							/>
							<Marker icon={houseicon} position={[-22.951955502815867, -43.210326270667416]}>
								{/*<Popup>*/}
								{/*	A pretty CSS3 popup. <br /> Easily customizable.*/}
								{/*</Popup>*/}
							</Marker>
						</MapContainer>
					</div>
				</AppBar>
			</Grid>
		</Grid>
	);
}

export default Listings;
