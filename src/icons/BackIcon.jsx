import { SvgIcon } from '@mui/material';
const BackIcon = props => {
    const { size, sx } = props
    return <SvgIcon viewBox="0 0 24 24" {...props} sx={{ ...sx, width: size || 25, height: size || 25 }}>
        <path fill="currentColor" d="m4 10l-.707.707L2.586 10l.707-.707zm17 8a1 1 0 1 1-2 0zM8.293 15.707l-5-5l1.414-1.414l5 5zm-5-6.414l5-5l1.414 1.414l-5 5zM4 9h10v2H4zm17 7v2h-2v-2zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z" />
    </SvgIcon>
};
export default BackIcon;