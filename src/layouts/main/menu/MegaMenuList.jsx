import { Fragment } from 'react';
import styled from '@mui/material/styles/styled';
import clsx from 'clsx';
// CUSTOM COMPONENTS
import Link from 'components/link';
import { H6 } from 'components/typography';
import { FlexBox } from 'components/flexbox';
// CUSTOM DEFINED HOOK
import useLocation from 'hooks/useLocation';

// STYLED COMPONENT
const MenuList = styled(FlexBox)(({
  theme
}) => ({
  alignItems: 'start',
  flexDirection: 'column',
  '& > a': {
    fontSize: 14,
    fontWeight: 400,
    transition: 'all 300ms',
    color: theme.palette.grey[500],
    ':hover': {
      color: theme.palette.grey[300]
    },
    '&.active': {
      color: theme.palette.primary.main
    }
  }
}));

// ==============================================================

// ==============================================================

export default function MegaMenuList({
  title,
  child
}) {
  const {
    pathname
  } = useLocation();
  return <Fragment>
      <H6 fontSize={14}>{title}</H6>

      <MenuList mt={2} gap={2}>
        {child.map(item => <Link className={clsx({
        active: pathname === item.href
      })} href={item.href} key={item.id}>
            {item.title}
          </Link>)}
      </MenuList>
    </Fragment>;
}