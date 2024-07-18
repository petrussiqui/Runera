// CUSTOM ICON COMPONENT
import { t } from 'i18next';
import HistoryIcon from 'icons/HistoryIcon';
import HomeIcon from 'icons/HomeIcon';
import QuestIcon from 'icons/QuestIcon';
import ReferralIcon from 'icons/ReferralIcon';
export const navigation = [
  {
    name: 'Home',
    Icon: <HomeIcon size={18} />,
    path: ''
  },
  {
    name: 'Quest',
    Icon: <QuestIcon size={18} />,
    path: '/quest'
  },
  {
    name: 'Referral',
    Icon: <ReferralIcon size={18} />,
    path: '/referral'
  },
  {
    name: 'History',
    Icon: <HistoryIcon size={18} />,
    path: '/history'
  },
];