import React, { useMemo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AidCard from "../Layer_4/AidCard";
import { FixedSizeList as List } from "react-window";

export const AidCards = ({ seachContent }) => {
	console.log("seachContent", seachContent);

	const memo = useMemo(() => (
		<List
			className="List"
			height={seachContent.length * 200}
			itemCount={seachContent.length}
			itemSize={200}
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
