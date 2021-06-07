import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import PendingUsers from "./PendingUsers";
import PendingAids from "./PendingAids";
import AllAidsList from "./AllAidsList";
import AllUserList from "./AllUserList";
function AdminPanel() {
	return (
		<div className="adminPanel">
			<Tabs isFitted variant="enclosed" isLazy>
				<TabList>
					<Tab _selected={{ color: "white", bg: "red.400" }}>
						Bütün Yardımlar
					</Tab>
					<Tab _selected={{ color: "white", bg: "orange.500" }}>
						Bütün Kullanıcılar
					</Tab>
					<Tab _selected={{ color: "white", bg: "blue.500" }}>
						Onay Bekleyen Kullanıcılar
					</Tab>
					<Tab _selected={{ color: "white", bg: "green.400" }}>
						Onay Bekleyen Yardımlar
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<AllAidsList />
					</TabPanel>
					<TabPanel>
						<AllUserList />
					</TabPanel>
					<TabPanel>
						<PendingUsers />
					</TabPanel>
					<TabPanel>
						<PendingAids />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	);
}

export default AdminPanel;
