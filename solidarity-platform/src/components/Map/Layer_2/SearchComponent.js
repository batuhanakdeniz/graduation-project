import React, { useMemo, useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { useMap } from "react-leaflet";
import { AidCards } from "../Layer_3/AidCards";
import { POSITION_CLASSES } from "../PositionClass";
import { Button } from "@chakra-ui/button";

export const Search = ({ position, zoom }) => {
	const [isSearch, setIsSearch] = useState(false);
	const [seachContent, setSeachContent] = useState("");
	const handleSearchBlur = (e) => {
		e.target.value ? setIsSearch(true) : setIsSearch(false);
	};
	const handleSearch = (e) => {
		e.target.value ? setIsSearch(true) : setIsSearch(false);
		setSeachContent(e.target.value);
	};
	// !! do something
	// eslint-disable-next-line
	const parentMap = useMap();
	// eslint-disable-next-line
	const button = useMemo(() => (
		<Form inline>
			<FormControl
				type="text"
				placeholder="Search"
				className="mr-sm-2"
				onBlur={handleSearchBlur}
				onChange={handleSearch}
			/>
			<Button colorScheme="brand">
				<i class="fas fa-search-location" />
			</Button>
		</Form>
	));

	const positionClass =
		(position && POSITION_CLASSES[position]) || POSITION_CLASSES.bottomleft;
	return (
		<div style={{ marginLeft: "5rem" }} className="search-form">
			<div className="leaflet-control leaflet-bar">{button}</div>
			{isSearch ? (
				<div className="leaflet-control leaflet-bar">
					<AidCards seachContent={seachContent} />
				</div>
			) : null}
		</div>
	);
};
