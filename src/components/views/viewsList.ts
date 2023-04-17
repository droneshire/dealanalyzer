

import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HouseIcon from "@mui/icons-material/House";
import NewDealView from './NewDealView';

export interface ViewProps {
    key: string;
    label: string;
    component: React.FC;
    icon: typeof HouseIcon;
}

export const dashboardViewList: ViewProps[] = [
    {
        key: "newDeal",
        label: "New Deal",
        component: NewDealView,
        icon: HouseIcon,
    },
    {
        key: "addedDeals",
        label: "Added Deals",
        component: NewDealView,
        icon: AttachMoneyIcon,
    },
    {
        key: "contact",
        label: "Contact",
        component: NewDealView,
        icon: AddIcCallIcon,
    },
]
