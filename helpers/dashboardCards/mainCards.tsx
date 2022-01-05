import {IMainCards} from './mainCards.interface';
import ChartIcon from "../cardIcons/icons/chart.svg";
import BlankIcon from "../cardIcons/icons/blank.svg";
import EmailIcon from "../cardIcons/icons/email.svg";
import LeafIcon from "../cardIcons/icons/leaf.svg";

export const mainCards: IMainCards[] = [
    {Icon: <ChartIcon />, renderCase: 'visits' },
    {Icon: <BlankIcon />, renderCase: 'articles' },
    {Icon: <EmailIcon />, renderCase: 'subscriptions' },
    {Icon: <LeafIcon />, renderCase: 'authors' }
]