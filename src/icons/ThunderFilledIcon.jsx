import { SvgIcon } from "@mui/material";
const ThunderFilledIcon = (props) => {
  const { size, sx } = props;
  return (
    <SvgIcon
      viewBox='0 0 11 14'
      {...props}
      sx={{ ...sx, width: size || 25, height: size || 25 }}>
      <g clip-path='url(#clip0_2318_397)'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M7.00033 1.33398L4.66699 9.33398H8.00033L7.33366 14.6673L12.667 6.66732H9.33366L11.3337 1.33398H7.00033Z'
          fill='#FDA801'
        />
      </g>
      <defs>
        <clipPath id='clip0_2318_397'>
          <rect
            width='16'
            height='16'
            fill='white'
            transform='translate(0.666992)'
          />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
export default ThunderFilledIcon;
