import React from "react";
import { Pagination } from "react-bootstrap";

function PaginatationComponent({
	setCurrentPage,
	itemsPerPage,
	totalFoundings,
	currentPage,
}) {
	const pageNumbers = [];
	for (
		let index = 1;
		index <= Math.ceil(totalFoundings / itemsPerPage);
		index++
	) {
		pageNumbers.push(index);
	}

	return (
		<Pagination style={{ marginTop: "1rem", marginBottom: "3rem" }}>
			<Pagination.First
				className="paginationItemStyle"
				onClick={() => setCurrentPage(1)}
			/>
			<Pagination.Prev
				className="paginationItemStyle"
				onClick={() => setCurrentPage((prev) => (prev === 1 ? prev : prev - 1))}
			/>
			{pageNumbers.map((page) =>
				page === 1 ||
				page === currentPage ||
				page === currentPage + 1 ||
				page === currentPage - 1 ||
				page === pageNumbers.length ||
				page === pageNumbers.length - 1 ? (
					<Pagination.Item
						key={page}
						active={currentPage === page}
						className="paginationItemStyle"
						onClick={() => setCurrentPage(page)}
					>
						{page}
					</Pagination.Item>
				) : page === currentPage - 2 || page === currentPage + 2 ? (
					<Pagination.Ellipsis className="paginationItemStyle" key={page} />
				) : null
			)}
			<Pagination.Next
				className="paginationItemStyle"
				onClick={() =>
					setCurrentPage((prev) =>
						prev === pageNumbers.length ? prev : prev + 1
					)
				}
			/>
			<Pagination.Last
				className="paginationItemStyle"
				onClick={() => setCurrentPage(pageNumbers.length)}
			/>
		</Pagination>
	);
}

export default PaginatationComponent;
