import React, { useMemo } from "react";
import AidCard from "../Layer_4/AidCard";
import { FixedSizeList as List } from "react-window";
import { Button } from "@chakra-ui/react";
import { RiArrowLeftCircleLine } from "react-icons/ri";
export const AidCards = ({ seachContent, setSearchShowMode, searchModes }) => {
	// eslint-disable-next-line
	const memo = useMemo(
		() => (
			<>
				{seachContent && seachContent.helps ? (
					<List
						className="List"
						height={
							seachContent && seachContent.helps
								? seachContent.helps.length * 150
								: 0
						}
						itemCount={seachContent.helps.length}
						itemSize={150}
						width={400}
						style={{ marginBottom: "0.5rem" }}
					>
						{({ index, style }) => (
							<div
								className={index % 2 ? "ListItemOdd" : "ListItemEven"}
								style={style}
							>
								<AidCard aid={seachContent.helps[index]} />
							</div>
						)}
					</List>
				) : (
					<h1>Loading</h1>
				)}
			</>
		),
		seachContent.helps
	);
	return memo;
};
