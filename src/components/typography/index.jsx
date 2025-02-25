import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import clsx from "clsx";

// ==============================================================

// ==============================================================

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "ellipsis",
})(({ ellipsis }) => ({
  ...(ellipsis && {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  }),
}));
export const H1 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={48}
      component='h1'
      fontWeight={700}
      ellipsis={ellipsis ? 1 : 0}
      {...(className && {
        className: clsx({
          [className]: true,
        }),
      })}
      {...others}>
      {children}
    </StyledBox>
  );
};
export const H2 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={40}
      component='h2'
      fontWeight={700}
      ellipsis={ellipsis ? 1 : 0}
      {...(className && {
        className: clsx({
          [className]: true,
        }),
      })}
      {...others}>
      {children}
    </StyledBox>
  );
};
export const H3 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={36}
      component='h3'
      fontWeight={700}
      ellipsis={ellipsis ? 1 : 0}
      {...(className && {
        className: clsx({
          [className]: true,
        }),
      })}
      {...others}>
      {children}
    </StyledBox>
  );
};
export const H4 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={32}
      component='h4'
      fontWeight={600}
      ellipsis={ellipsis ? 1 : 0}
      {...(className && {
        className: clsx({
          [className]: true,
        }),
      })}
      {...others}>
      {children}
    </StyledBox>
  );
};
export const H5 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={30}
      component='h5'
      lineHeight={1}
      fontWeight={600}
      ellipsis={ellipsis ? 1 : 0}
      {...(className && {
        className: clsx({
          [className]: true,
        }),
      })}
      {...others}>
      {children}
    </StyledBox>
  );
};
export const H6 = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={28}
      component='h6'
      fontWeight={600}
      ellipsis={ellipsis ? 1 : 0}
      {...(className && {
        className: clsx({
          [className]: true,
        }),
      })}
      {...others}>
      {children}
    </StyledBox>
  );
};
export const Paragraph = (props) => {
  const { ellipsis, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={14}
      component='p'
      fontWeight={400}
      ellipsis={ellipsis ? 1 : 0}
      {...(className && {
        className: clsx({
          [className]: true,
        }),
      })}
      {...others}>
      {children}
    </StyledBox>
  );
};
export const Small = (props) => {
  const { ellipsis = false, children, className, ...others } = props;
  return (
    <StyledBox
      fontSize={12}
      component='small'
      fontWeight={400}
      ellipsis={ellipsis ? 1 : 0}
      {...(className && {
        className: clsx({
          [className]: true,
        }),
      })}
      {...others}>
      {children}
    </StyledBox>
  );
};
export const Span = (props) => {
  const { ellipsis = false, children, className, ...others } = props;
  return (
    <StyledBox
      component='span'
      ellipsis={ellipsis ? 1 : 0}
      {...(className && {
        className: clsx({
          [className]: true,
        }),
      })}
      {...others}>
      {children}
    </StyledBox>
  );
};
export const Tiny = (props) => {
  const { ellipsis = false, children, className, ...others } = props;
  return (
    <StyledBox
      component='p'
      fontSize={10}
      fontWeight={400}
      ellipsis={ellipsis ? 1 : 0}
      {...(className && {
        className: clsx({
          [className]: true,
        }),
      })}
      {...others}>
      {children}
    </StyledBox>
  );
};

export const TypographyGradient = styled(Typography)(({ theme }) => ({
  color: "white",
  display: "initial",
  background: theme.palette.linear.primary,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  lineHeight: "1.3",
}));

export const TypographyPrimary = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
