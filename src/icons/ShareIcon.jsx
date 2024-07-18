import { SvgIcon } from '@mui/material';
const ShareIcon = props => {
    const { size, sx } = props
    return <SvgIcon viewBox="0 0 48 48" {...props} sx={{ ...sx, width: size || 25, height: size || 25 }}>
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m26 4l18 18l-18 17V28C12 28 6 43 6 43c0-17 5-28 20-28z" />
    </SvgIcon>
};
export default ShareIcon;