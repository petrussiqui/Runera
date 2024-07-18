import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ButtonBase from '@mui/material/ButtonBase';
import styled from '@mui/material/styles/styled';
// UTILS
import { isDark, secondarySideBarGap, secondarySideBarWidth } from 'utils/constants';

// ==============================================================

// ==============================================================
// FOR DASHBOARD HEADER
export const DashboardHeaderRoot = styled(AppBar)(({
  theme
}) => ({
  boxShadow: 'none',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  backgroundImage: 'none',
  backdropFilter: 'blur(6px)',
  backgroundColor: 'transparent',
  color: theme.palette.text.primary
}));
export const StyledToolBar = styled(Toolbar)({
  '@media (min-width: 0px)': {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: 'auto'
  }
});

// FOR SIDEBAR
export const MainMenu = styled('div')(({
  theme
}) => ({
  left: 0,
  width: 0,
  height: '100%',
  position: 'fixed',
  boxShadow: theme.shadows[2],
  transition: 'left 0.3s ease',
  zIndex: theme.zIndex.drawer + 11,
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down('md')]: {
    left: -0
  },
  '.navigation-list': {
    paddingInline: '1rem'
  }
}));

export const MobileSidebarWrapper = styled('div', {
  shouldForwardProp: prop => prop !== 'show'
})(({
  theme,
  show
}) => ({
  '.main-list': {
    width: 0,
    height: '100%',
    position: 'fixed',
    boxShadow: theme.shadows[1],
    transition: 'transform 0.3s',
    zIndex: theme.zIndex.drawer + 3,
    backgroundColor: theme.palette.background.paper,
    transform: show ? 'translateX(0)' : 'translateX(-100%)',
    '.navigation-list': {
      paddingInline: '1rem',
      paddingBottom: '.75rem'
    }
  },
  '.backdrop': {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'fixed',
    zIndex: theme.zIndex.drawer,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
}));
export const NavItemButton = styled(ButtonBase, {
  shouldForwardProp: prop => prop !== 'active'
})(({
  theme,
  active
}) => ({
  height: 48,
  width: '100%',
  marginBottom: 8,
  borderRadius: '8px',
  padding: '10px 10px',
  '.MuiSvgIcon-root': {
    fontSize: 20,
    color: active ? theme.palette.primary.main : theme.palette.text.secondary
  },
  ...(active && {
    backgroundColor: isDark(theme) ? theme.palette.action.hover : theme.palette.primary[25]
  }),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    '.MuiSvgIcon-root': {
      color: theme.palette.primary.main
    }
  }
}));