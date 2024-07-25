import mintel from '../../assets/images/svg/mintel.svg'
import minty from '../../assets/images/svg/minty.svg'
import contact from '../../assets/images/svg/list-contacts.svg'
import arrow from '../../assets/images/svg/arrow-green.svg'
import linked from '../../assets/images/svg/linked-in.svg'
import recruiter from '../../assets/images/svg/inrecruiter.svg'
import sales from '../../assets/images/svg/sales-navigater.svg'
import hub from '../../assets/images/png/hub-spot.png'
import monday from '../../assets/images/png/monday.png'
import pipe from '../../assets/images/png/pipe-drive.png'
import sfdc from '../../assets/images/png/sfdc.png'
import salesloft from '../../assets/images/png/sales-loft.png'
import reach from '../../assets/images/png/out-reach.png'
import am from '../../assets/images/png/brands-logo.png'
import cultivado from '../../assets/images/png/cautivado.png'
import sos from '../../assets/images/png/sos.png'
import { ContactData, CrossbowIcon, FocusSelling, SalesPersonIcon, SaveTime, SearchIcon, StreamLined } from './SvgIcons'

export const KnowList = [
    {
        icon: <SearchIcon />,
        title: 'Daily, 2/8 hours are spent searching for decision makers.'
    },
    {
        icon: <CrossbowIcon />,
        title: 'Over 90% report low accuracy in contact data, leading to missed opportunities.'
    },
    {
        icon: <SalesPersonIcon />,
        title: 'Lost productivity costs $18,000 per salesperson annually.'
    },
]



export const prospectingList = [
    {
        img: mintel,
        description: "Mintel.ai learns & understands your Ideal customer profile from your CRM, Website Visitors & Intent Sources",
        img2: arrow,
    },
    {
        img: contact,
        description: "Generates list of contacts based on your ICP with the most accurate contact information.",
        img2: arrow
    },
    {
        img: minty,
        description: "Provides minty fresh, qualified leads daily to your salespeople"
    },
]

export const compatibleList = [
    {
        img: recruiter
    },
    {
        img: linked
    },
    {
        img: sales
    },
]


export const mintelizeList = [
    {
        icon: <SaveTime />,
        title: "Save Time on Prospecting"
    },
    {
        icon: <ContactData />,
        title: "Accurate Contact Data",
        description: "Don't miss out on potential buyers. Our waterfall enrichment allows you to tap into 15+ top data providers.",
        data: " If you can't find the contact info, no one can."
    },
    {
        icon: <StreamLined />,
        title: "Streamlined Lead Distribution",
        description: "Our smart lead routing system ensures leads are quickly and efficiently assigned to the right sales rep,",
        data: "fostering better team collaboration."
    },
    {
        icon: <FocusSelling />,
        title: "Focus on Selling, Not Searching",
        description: "Redirect the time saved from manual prospecting towards engaging with prospects, nurturing leads, and",
        data: " closing deals for increased revenue."
    },
]

export const installList = [
    {
        img: pipe,
        href: "https://www.pipedrive.com/",
    },
    {
        img: hub,
        href: "https://www.hubspot.com/"
    },
    {
        img: sfdc,
        href: "https://login.salesforce.com/?locale=in"
    },
    {
        img: reach,
        href: "https://outreach.com/"
    },
    {
        img: salesloft,
        href: "https://www.salesloft.com/"
    },
    {
        img: monday,
        href: "https://monday.com/"
    },
]

export const timeList = [

    {
        time: '100 h'
    },
    {
        time: '50 h'
    },
    {
        time: '10 h'
    },
    {
        time: '1 h'
    },
    {
        time: '30 m'
    },
    {
        time: '15 m'
    },
    {
        time: '10 m'
    },
    {
        time: '5 m'
    },
    {
        time: '1 m'
    },
    {
        time: '0 m'
    }
]
export const brandsList = [
    {
        img: am,
    },
    {
        img: cultivado,
    },
    {
        img: sos,
    },
    {
        img: am,
    },
    {
        img: cultivado,
    },
    {
        img: sos,
    },
]