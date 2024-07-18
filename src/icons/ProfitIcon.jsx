import { SvgIcon } from '@mui/material';
const ProfitIcon = props => {
    const { size, sx } = props
    return <SvgIcon viewBox="0 0 24 24" {...props} sx={{ ...sx, width: size || 25, height: size || 25 }}>
        <path fill="currentColor" d="M11 15H6l7-14v8h5l-7 14z" />
    </SvgIcon>
};
export default ProfitIcon;