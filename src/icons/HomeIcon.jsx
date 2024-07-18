import { SvgIcon } from '@mui/material';
const HomeIcon = props => {
    const { size } = props
    return <SvgIcon viewBox="0 0 17 18" {...props} sx={{ width: size || 25, height: size || 25 }}>
        <path d="M0.75 18V6L8.75 0L16.75 6V18H10.75V11H6.75V18H0.75Z" fill="currentColor" />
    </SvgIcon>
};
export default HomeIcon;