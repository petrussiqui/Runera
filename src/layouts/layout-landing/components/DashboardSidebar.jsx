import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Scrollbar from 'components/scrollbar';
import { navigation } from '../context/navigation';
import { LogoBox, MainMenu, NavItemButton, MobileSidebarWrapper } from '../styles';
import useLayout from '../context/useLayout';
export default function LayoutSideBar() {
  const {
    active,
    downMd,
    showMobileSideBar,
    handleActiveMainMenu,
    handleCloseMobileSidebar,
  } = useLayout();
  const MAIN_SIDEBAR_CONTENT = <Fragment>
    <Scrollbar style={{
      maxHeight: 'calc(100% - 50px)'
    }}>
      <div className="navigation-list">
        {navigation.map((nav, index) => <Tooltip title={nav.name} placement="right" key={index}>
          <NavItemButton disableRipple active={active === nav.name} onClick={handleActiveMainMenu(nav)}>
            <nav.Icon />
          </NavItemButton>
        </Tooltip>)}
      </div>
    </Scrollbar>
  </Fragment>;

  if (downMd) {
    return <MobileSidebarWrapper show={showMobileSideBar}>
      <div className="main-list">{MAIN_SIDEBAR_CONTENT}</div>

      {showMobileSideBar && <div onClick={handleCloseMobileSidebar} className="backdrop" />}

    </MobileSidebarWrapper>;
  }
  return <Fragment>
    <MainMenu>{MAIN_SIDEBAR_CONTENT}</MainMenu>
  </Fragment>;
}