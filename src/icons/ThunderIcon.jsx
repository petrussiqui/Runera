import { SvgIcon } from '@mui/material';
const ThunderIcon = props => {
    const { size, sx } = props
    return <SvgIcon viewBox="0 0 11 14" {...props} sx={{ ...sx, width: size || 25, height: size || 25 }}>
        <path fill='transparent' d="M1.62848 6.59784L5.62748 1.20784C5.94048 0.785835 6.52648 1.04784 6.52648 1.60984V5.78184C6.52648 6.11784 6.75648 6.39084 7.04048 6.39084H8.98448C9.42648 6.39084 9.66248 7.00884 9.37048 7.40184L5.37148 12.7918C5.05848 13.2138 4.47248 12.9518 4.47248 12.3898V8.21784C4.47248 7.88184 4.24248 7.60884 3.95848 7.60884H2.01448C1.57348 7.60884 1.33748 6.99084 1.62948 6.59784" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
    </SvgIcon>
};
export default ThunderIcon;