import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AllAidsList from "../AllAidsList";
function UnconfirmedUserPanel() {
	return (
		<div className="uncorfimedUserPanel">
			<Tabs isFitted variant="enclosed" isLazy>
				<TabList>
					<Tab _selected={{ color: "white", bg: "red.400" }}>
						Bütün Yardımlar
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<AllAidsList />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	);
}

export default UnconfirmedUserPanel;
