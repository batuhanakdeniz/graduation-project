import React, { useMemo } from "react";
import AidCard from "../Layer_4/AidCard";
import { FixedSizeList as List } from "react-window";

export const AidCards = ({ seachContent }) => {
	// eslint-disable-next-line
	const memo = useMemo(() => (
		<List
			className="List"
			height={seachContent.length * 150}
			itemCount={seachContent.length}
			itemSize={150}
			width={400}
		>
			{({ index, style }) => (
				<div
					className={index % 2 ? "ListItemOdd" : "ListItemEven"}
					style={style}
				>
					<AidCard aid={seachContent[index]} />
				</div>
			)}
		</List>
	));
	return memo;
};
