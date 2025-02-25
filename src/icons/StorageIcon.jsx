import { SvgIcon } from '@mui/material';
const StorageIcon = props => {
    const { size } = props
    return <SvgIcon viewBox="0 0 24 24" {...props} sx={{ width: size || 25, height: size || 25 }}>
        <g fill="none">
            <rect width="16" height="18" x="4" y="3" fill="currentColor" fill-opacity="0.25" rx="2" />
            <path fill="currentColor" d="M4 19a2 2 0 0 1 2-2h11c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C20 15.398 20 14.932 20 14v3c0 1.886 0 2.828-.586 3.414C18.828 21 17.886 21 16 21H6a2 2 0 0 1-2-2" />
            <path stroke="currentColor" stroke-width="1.2" d="m9.5 10.5l1.894 1.894a.15.15 0 0 0 .212 0L15.5 8.5" />
        </g>

    </SvgIcon>
};
export default StorageIcon;