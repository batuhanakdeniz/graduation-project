import React, { useMemo, useState } from "react";
import { Col, Form, FormControl, Row } from "react-bootstrap";
import { useMap } from "react-leaflet";
import { AidCards } from "../Layer_3/AidCards";
import { Button } from "@chakra-ui/button";
import { useDispatch, useSelector } from "react-redux";
import { fetchMapSearchAid } from "../../../redux/actions/aids/MapSearchAidAction";
import { LocationCards } from "../Layer_3/LocationCards";
import { Tooltip } from "@chakra-ui/react";

const searchModes = {
	AID: "AID",
	LOCATION: "LOCATION",
	BASE: "BASE",
};

export const Search = ({ position, zoom }) => {
	const [isSearch, setIsSearch] = useState(false);
	const [searchInput, setSearchInput] = useState("");
	const [toolTipVisible, setToolTipVisible] = useState(false);
	const [toolTip, setToolTip] = useState("");
	const searchedAids = useSelector((state) => state.searchedAids);

	const dispatch = useDispatch();
	const handleSearchBlur = (e) => {
		e.target.value ? setIsSearch(true) : setIsSearch(false);
	};
	const handleSearch = () => {
		if (searchInput) {
			dispatch(fetchMapSearchAid(searchInput));
			!toolTip ? setToolTipVisible(true) : setToolTipVisible(false);
		} else {
			!toolTip ? setToolTipVisible(false) : setToolTipVisible(true);
			return setToolTip((prev) => (prev = "Arama çubuğu boş"));
		}
	};
	const onChangeHandler = (e) => {
		e.target.value ? setIsSearch(true) : setIsSearch(false);
		!toolTip ? setToolTipVisible(true) : setToolTipVisible(false);
		setSearchInput(e.target.value);
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
				onChange={onChangeHandler}
			/>
			<Tooltip
				hasArrow
				label={toolTip && toolTip}
				isOpen={toolTipVisible}
				fontSize="sm"
				placement="right-end"
			>
				<Button
					colorScheme="brand"
					onClick={() => handleSearch()}
					type="button"
				>
					<i className="fas fa-search-location" />
				</Button>
			</Tooltip>
		</Form>
	));
	const [searchShowMode, setSearchShowMode] = useState(searchModes.BASE);
	return (
		<div style={{ marginLeft: "5rem" }} className="search-form">
			<div className="leaflet-control leaflet-bar">{button}</div>
			{isSearch &&
			searchedAids &&
			searchedAids.searchedAidsList &&
			searchedAids.searchedAidsList.helps &&
			searchedAids.searchedAidsList.locations &&
			(searchedAids.searchedAidsList.helps.length > 0 ||
				searchedAids.searchedAidsList.locations.length > 0) ? (
				<div
					className="leaflet-control leaflet-bar"
					style={{ backgroundColor: "white", padding: "0.1rem 0.5rem" }}
				>
					<Row>
						<Col md={12}>
							<Button
								colorScheme="brand"
								onClick={() =>
									setSearchShowMode((prev) => (prev = searchModes.LOCATION))
								}
								variant="link"
							>
								{searchedAids &&
									searchedAids.searchedAidsList &&
									searchedAids.searchedAidsList.locations &&
									searchedAids.searchedAidsList.locations.length}{" "}
								adet Konum bulundu.
							</Button>
							<hr
								style={{
									width: "100%",
									borderWidth: "4px",
									textAlign: "left",
									backgroundColor: "gray",
									marginTop: "0.2rem",
									marginBottom: "0.2rem",
								}}
							/>
						</Col>
						<Col md={12}>
							<Button
								colorScheme="brand"
								variant="link"
								onClick={() =>
									setSearchShowMode((prev) => (prev = searchModes.BASE))
								}
							>
								{searchedAids &&
									searchedAids.searchedAidsList &&
									searchedAids.searchedAidsList.helps &&
									searchedAids.searchedAidsList.helps.length}{" "}
								adet Yardım bulundu.
							</Button>
						</Col>
					</Row>

					{(searchShowMode === searchModes.AID ||
						searchShowMode === searchModes.BASE) && (
						<AidCards
							seachContent={searchedAids.searchedAidsList}
							setSearchShowMode={setSearchShowMode}
							searchModes={searchModes}
						/>
					)}
					{searchShowMode === searchModes.LOCATION && (
						<LocationCards
							seachContent={searchedAids.searchedAidsList}
							setSearchShowMode={setSearchShowMode}
							searchModes={searchModes}
						/>
					)}
				</div>
			) : null}
		</div>
	);
};
