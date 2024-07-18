import { SvgIcon } from '@mui/material';
const ArrowRightIcon = props => {
    const { size, sx } = props
    return <SvgIcon viewBox="0 0 24 24" {...props} sx={{ ...sx, width: size || 25, height: size || 25 }}>
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 17l5-5l-5-5" />
    </SvgIcon>
};
export default ArrowRightIcon;