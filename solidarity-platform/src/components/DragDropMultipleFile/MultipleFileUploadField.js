import { FormLabel } from "@chakra-ui/form-control";
import React, { useCallback, useEffect, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import FileHeader from "./FileHeader";
import { UploadError } from "./UploadError";

let currentId = 0;

function getNewId() {
	// we could use a fancier solution instead of a sequential ID :)
	return ++currentId;
}
const baseStyle = {
	flex: 1,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "20px",
	borderWidth: 2,
	borderRadius: 2,
	borderColor: "#eeeeee",
	borderStyle: "dashed",
	backgroundColor: "#fafafa",
	color: "#bdbdbd",
	outline: "none",
	transition: "border .24s ease-in-out",
	marginBottom: "1rem",
};

const activeStyle = {
	borderColor: "#2196f3",
};

const acceptStyle = {
	borderColor: "#00e676",
};

const rejectStyle = {
	borderColor: "#ff1744",
};

const thumbsContainer = {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	marginTop: 16,
};

const thumb = {
	display: "inline-flex",
	borderRadius: 2,
	border: "1px solid #eaeaea",
	marginBottom: 8,
	marginRight: 8,
	width: 100,
	height: 100,
	padding: 4,
	boxSizing: "border-box",
	position: "relative",
};

const thumbInner = {
	display: "flex",
	minWidth: 0,
	overflow: "hidden",
};

const img = {
	display: "block",
	width: "auto",
	height: "100%",
};
const deleteButton = {
	position: "absolute",
	top: "0px",
	right: "0px",
};

function MultipleFileUploadField({ files, setFiles, setErrorFiles }) {
	const onDrop = useCallback((accFiles, rejFiles) => {
		const mappedAcc = accFiles.map((file) =>
			Object.assign(
				{ file, errors: [], id: getNewId() },
				{
					preview: URL.createObjectURL(file),
				}
			)
		);
		const mappedRej = rejFiles.map((r) => ({ ...r, id: getNewId() }));
		setFiles((curr) => [...curr, ...mappedAcc, ...mappedRej]);
		setErrorFiles((curr) => [...curr, ...mappedRej]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	function onDelete(file) {
		setFiles((curr) => curr.filter((fw) => fw.file !== file));
		setErrorFiles((curr) => curr.filter((fw) => fw.file !== file));
	}

	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject,
	} = useDropzone({
		onDrop,
		accept: ["image/*", "video/*"],
		maxSize: 8 * 1024 * 1024, // 8MB
	});

	const style = useMemo(
		() => ({
			...baseStyle,
			...(isDragActive ? activeStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {}),
		}),
		[isDragActive, isDragReject, isDragAccept]
	);

	useEffect(
		() => () => {
			// Make sure to revoke the data uris to avoid memory leaks
			files.forEach((file) => URL.revokeObjectURL(file.preview));
		},
		[files]
	);

	return (
		<React.Fragment>
			<div>
				<FormLabel htmlFor={"File"}>Fotoğraf Ekleyin*</FormLabel>
				<div {...getRootProps({ style })}>
					<input {...getInputProps()} />
					<p>Drag 'n' drop some files here, or click to select files</p>
				</div>
			</div>
			<aside style={thumbsContainer}>
				{files.map((fileWrapper) => (
					<div key={fileWrapper.id}>
						{fileWrapper.errors.length ? (
							<UploadError
								file={fileWrapper.file}
								errors={fileWrapper.errors}
								onDelete={onDelete}
								preview={fileWrapper.preview}
								imgStyle={img}
								thumbStyle={thumb}
								thumbInner={thumbInner}
								deleteButton={deleteButton}
								name={fileWrapper.name}
							/>
						) : (
							<FileHeader
								file={fileWrapper.file}
								onDelete={onDelete}
								preview={fileWrapper.preview}
								imgStyle={img}
								thumbStyle={thumb}
								thumbInner={thumbInner}
								deleteButton={deleteButton}
								name={fileWrapper.name}
							/>
						)}
					</div>
				))}
			</aside>
		</React.Fragment>
	);
}

export default MultipleFileUploadField;
