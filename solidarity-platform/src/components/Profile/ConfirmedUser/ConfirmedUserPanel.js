import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import LoggedUsersActiveAids from "../LoggedUsersActiveAids";
import LoggedUsersPendingAids from "../LoggedUsersPendingAids";
import LoggedUsersActiveComments from "../LoggedUsersActiveComments";
import LoggedUsersPendingComments from "../LoggedUsersPendingComments";

function ConfirmedUserPanel() {
	return (
		<div className="adminPanel">
			<Tabs isFitted variant="enclosed" isLazy>
				<TabList>
					<Tab _selected={{ color: "white", bg: "green.400" }}>
						Aktif Yardımlarım
					</Tab>
					<Tab _selected={{ color: "white", bg: "pink.400" }}>
						Onay Bekleyen Yardımlarım
					</Tab>
					<Tab _selected={{ color: "white", bg: "red.400" }}>
						Aktif Yorumlarım
					</Tab>
					<Tab _selected={{ color: "white", bg: "orange.400" }}>
						Onay Bekleyen Yorumlarım
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<LoggedUsersActiveAids />
					</TabPanel>
					<TabPanel>
						<LoggedUsersPendingAids />
					</TabPanel>
					<TabPanel>
						<LoggedUsersActiveComments />
					</TabPanel>
					<TabPanel>
						<LoggedUsersPendingComments />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	);
}

export default ConfirmedUserPanel;
