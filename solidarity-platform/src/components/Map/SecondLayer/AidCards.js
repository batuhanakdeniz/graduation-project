import React, { useMemo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AidCard from "../ThirdLayer/AidCard";
import { FixedSizeList as List } from "react-window";

export const AidCards = ({ seachContent }) => {
	const aidData = useSelector((state) => state.aidLocations.locations);
	const [filteredData, setFilteredData] = useState([]);
	const [listHeightCounter, setListHeightCounter] = useState(0);
	useEffect(() => {
		setFilteredData(
			(prev) =>
				(prev = aidData.filter((aid) => aid.emergencyLevel == seachContent))
		);

		setListHeightCounter((prev) => prev + 1);

		if (seachContent == 10) {
			setListHeightCounter((prev) => (prev /= 2));
		}
		if (seachContent.length === 0 || !seachContent.trim()) {
			setListHeightCounter((prev) => (prev = 0));
		}
	}, [seachContent]);
	// eslint-disable-next-line

	const memo = useMemo(() => (
		<List
			className="List"
			height={
				filteredData && listHeightCounter * 200 <= 700 && aidData.length <= 4
					? listHeightCounter * 200
					: 700
			}
			itemCount={filteredData ? filteredData.length : aidData.length}
			itemSize={200}
			width={400}
		>
			{({ index, style }) => (
				<div
					className={index % 2 ? "ListItemOdd" : "ListItemEven"}
					style={style}
				>
					{!filteredData ? (
						<AidCard aid={aidData[index]} />
					) : (
						<AidCard aid={filteredData[index]} />
					)}
				</div>
			)}
		</List>
	));
	return memo;
};
