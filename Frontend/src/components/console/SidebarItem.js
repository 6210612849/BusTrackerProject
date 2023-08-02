import { ListItemButton, ListItemIcon } from "@mui/material";

import { Link } from "react-router-dom";
import colorConfigs from "./config/colorConfigs";




const SidebarItem = (item) => {
    // const { appState } = useSelector((state: RootState) => state.appState);
    console.log(item)

    return (
        item.sidebarProps && item.path ? (
            <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                    "&: hover": {
                        backgroundColor: colorConfigs.sidebar.hoverBg
                    },
                    backgroundColor: "unset",
                    paddingY: "12px",
                    paddingX: "24px"
                }}
            >
                {/* <ListItemIcon sx={{
                    color: colorConfigs.sidebar.color
                }}>
                    {item.sidebarProps.icon && item.sidebarProps.icon}
                </ListItemIcon> */}
                {item.sidebarProps.displayText}
                aaaaa
            </ListItemButton>
        ) : null
    );
};

export default SidebarItem;