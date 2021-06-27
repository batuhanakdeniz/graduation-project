import React, { useMemo, useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { useMap } from "react-leaflet";
import { AidCards } from "../Layer_3/AidCards";
import { Button } from "@chakra-ui/button";
import { useDispatch, useSelector } from "react-redux";
import { fetchMapSearchAid } from "../../../redux/actions/aids/MapSearchAidAction";

export const Search = ({ position, zoom }) => {
	const [isSearch, setIsSearch] = useState(false);
	const searchedAids = useSelector((state) => state.searchedAids);
	const dispatch = useDispatch();
	const handleSearchBlur = (e) => {
		e.target.value ? setIsSearch(true) : setIsSearch(false);
	};
	const handleSearch = (e) => {
		e.target.value ? setIsSearch(true) : setIsSearch(false);
		dispatch(fetchMapSearchAid(e.target.value));
	};
	// !! do something
	// eslint-disable-next-line
	const parentMap = useMap();
	// eslint-disable-next-line
	const button = useMemo(() => (
		<Form inline>
			<FormControl
				type="text"
				placeholder="Bir Yardım Ara"
				className="mr-sm-2"
				onBlur={handleSearchBlur}
				onChange={handleSearch}
			/>
			<Button colorScheme="brand" type="submit">
				<i className="fas fa-search-location" />
			</Button>
		</Form>
	));

	return (
		<div style={{ marginLeft: "5rem" }} className="search-form">
			<div className="leaflet-control leaflet-bar">{button}</div>
			{isSearch ? (
				<div className="leaflet-control leaflet-bar">
					<AidCards seachContent={searchedAids.searchedAidsList} />
				</div>
			) : null}
		</div>
	);
};
