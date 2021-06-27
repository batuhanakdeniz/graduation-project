import { Button } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { FixedSizeList as List } from "react-window";
import LocationCard from "../Layer_4/LocationCard";
import { RiArrowLeftCircleLine } from "react-icons/ri";
export const LocationCards = ({
	seachContent,
	setSearchShowMode,
	searchModes,
}) => {
	// eslint-disable-next-line
	const memo = useMemo(
		() => (
			<div className="searchArea">
				<Button
					colorScheme="brand"
					fontSize="x-large"
					mb="0.5rem"
					onClick={() => setSearchShowMode((prev) => (prev = searchModes.BASE))}
				>
					<RiArrowLeftCircleLine />
				</Button>
				{seachContent && seachContent.locations ? (
					<List
						className="List"
						height={
							seachContent && seachContent.locations
								? seachContent.locations.length * 50
								: 0
						}
						itemCount={seachContent.locations.length}
						itemSize={50}
						width={400}
						style={{ marginBottom: "0.5rem" }}
					>
						{({ index, style }) => (
							<div
								className={index % 2 ? "ListItemOdd" : "ListItemEven"}
								style={style}
							>
								<LocationCard location={seachContent.locations[index]} />
							</div>
						)}
					</List>
				) : (
					<h1>Loading</h1>
				)}
			</div>
		),
		seachContent.locations
	);
	return memo;
};
