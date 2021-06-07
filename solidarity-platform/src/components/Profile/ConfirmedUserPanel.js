import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import PendingAids from "./PendingAids";
import AllAidsList from "./AllAidsList";
function ConfirmedUserPanel() {
	return (
		<div className="adminPanel">
			<Tabs isFitted variant="enclosed" isLazy>
				<TabList>
					<Tab _selected={{ color: "white", bg: "green.400" }}>
						Onay Bekleyen Yardımlar
					</Tab>
					<Tab _selected={{ color: "white", bg: "red.400" }}>
						Bütün Yardımlar
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<PendingAids />
					</TabPanel>
					<TabPanel>
						<AllAidsList />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	);
}

export default ConfirmedUserPanel;
