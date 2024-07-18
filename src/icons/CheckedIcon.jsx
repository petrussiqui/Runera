import { SvgIcon } from '@mui/material';
const CheckedIcon = props => {
    const { size, sx } = props
    return <SvgIcon viewBox="0 0 24 24" {...props} sx={{ ...sx, width: size || 25, height: size || 25 }}>
        <path fill="currentColor" fill-rule="evenodd" d="M20.207 6.793a1 1 0 0 1 0 1.414l-9.5 9.5a1 1 0 0 1-1.414 0l-4.5-4.5a1 1 0 0 1 1.414-1.414L10 15.586l8.793-8.793a1 1 0 0 1 1.414 0" clip-rule="evenodd" />
    </SvgIcon>
};
export default CheckedIcon;