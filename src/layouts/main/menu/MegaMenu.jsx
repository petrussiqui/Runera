import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import styled from '@mui/material/styles/styled';
// CUSTOM COMPONENTS
import { Span } from 'components/typography';
import FlexBox from 'components/flexbox/FlexBox';
import MegaMenuList from './MegaMenuList';
// CUSTOM ICON COMPONENT
import ChevronDown from 'icons/ChevronDown';
// PAGES NAVIGATION
import { PAGES_MENUS } from './navigation';

// STYLED COMPONENTS
const MenusContainer = styled('div')({
  zIndex: 2,
  opacity: 0,
  top: '120%',
  minWidth: 700,
  position: 'absolute',
  visibility: 'hidden',
  transition: 'top 300ms',
  transform: `translate(-50%, 0%)`
});
const MainListItem = styled('li')(({
  theme
}) => ({
  position: 'relative',
  ':hover': {
    '.menu-item': {
      color: theme.palette.primary.main
    },
    '.inner-menu': {
      opacity: 1,
      visibility: 'visible',
      top: '100%'
    }
  }
}));

// ==============================================================

// ==============================================================

export default function MegaMenu({
  isDark
}) {
  return <MainListItem>
      <FlexBox alignItems="center" className="menu-item" color={isDark ? 'white' : 'text.primary'} sx={{
      cursor: 'pointer'
    }}>
        <Span>Pages</Span> <ChevronDown sx={{
        fontSize: 19,
        ml: 0.3
      }} />
      </FlexBox>

      <MenusContainer className="inner-menu">
        <Card sx={{
        px: 3,
        py: 4,
        mt: 1.5,
        width: '100%'
      }}>
          <Grid container spacing={3}>
            {PAGES_MENUS.map(({
            id,
            title,
            child
          }) => <Grid item xs={4} key={id}>
                <MegaMenuList title={title} child={child} />
              </Grid>)}
          </Grid>
        </Card>
      </MenusContainer>
    </MainListItem>;
}