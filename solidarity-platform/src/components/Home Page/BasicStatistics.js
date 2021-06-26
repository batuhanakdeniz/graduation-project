import {
	Box,
	chakra,
	Flex,
	SimpleGrid,
	Stat,
	StatLabel,
	StatNumber,
	useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegUser } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { fetchNumberOfAids } from "../../redux/actions/aboutpage/numberOfAidsActions";
import { fetchNumberOfUsers } from "../../redux/actions/aboutpage/numberOfUsersActions";
import { fetchNumberOfHelpedAids } from "../../redux/actions/aboutpage/numberOfHelpedAidsActions";

function StatsCard(props) {
	const { title, stat, icon } = props;
	return (
		<Stat
			px={{ base: 2, md: 4 }}
			py={"5"}
			shadow={"xl"}
			border={"1px solid"}
			borderColor={useColorModeValue("gray.800", "gray.500")}
			rounded={"lg"}
		>
			<Flex justifyContent={"space-between"}>
				<Box pl={{ base: 2, md: 4 }}>
					<StatLabel fontWeight={"medium"} isTruncated>
						{title}
					</StatLabel>
					<StatNumber fontSize={"2xl"} fontWeight={"medium"}>
						{stat}
					</StatNumber>
				</Box>
				<Box
					my={"auto"}
					color={useColorModeValue("gray.800", "gray.200")}
					alignContent={"center"}
				>
					{icon}
				</Box>
			</Flex>
		</Stat>
	);
}

export default function BasicStatistics() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchNumberOfAids());
		dispatch(fetchNumberOfUsers());
		dispatch(fetchNumberOfHelpedAids());
		// eslint-disable-next-line
	}, []);

	const numberOfAids = useSelector((state) => state.numberOfAids);
	const numberOfHelpedAids = useSelector((state) => state.numberOfHelpedAids);
	const numberOfUsers = useSelector((state) => state.numberOfUsers);

	return (
		<Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
			<chakra.h1
				textAlign={"center"}
				fontSize={"4xl"}
				py={10}
				fontWeight={"bold"}
			>
				Our platform is expanding, do you want to help ?
			</chakra.h1>
			<SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
				<StatsCard
					title={"Kullanıcı Sayısı"}
					stat={
						!numberOfUsers.loading
							? numberOfUsers.error !== ""
								? numberOfUsers.error
								: numberOfUsers.numberOfUsers
							: "Yükleniyor.."
					}
					icon={<FaRegUser size={"3em"} />}
				/>
				<StatsCard
					title={"Yardım edilen lokasyon sayısı"}
					stat={
						!numberOfHelpedAids.loading
							? numberOfHelpedAids.error !== ""
								? numberOfHelpedAids.error
								: numberOfHelpedAids.numberOfHelpedAids
							: "Yükleniyor.."
					}
					icon={<FaHandsHelping size={"3em"} />}
				/>
				<StatsCard
					title={"Yardım Sayısı"}
					stat={
						!numberOfAids.loading
							? numberOfAids.error !== ""
								? numberOfAids.error
								: numberOfAids.numberOfAids
							: "Yükleniyor.."
					}
					icon={<GoLocation size={"3em"} />}
				/>
			</SimpleGrid>
		</Box>
	);
}
