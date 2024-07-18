import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import styled from "@mui/material/styles/styled";
// CUSTOM COMPONENTS
import Link from "components/link";
import { FlexBox } from "components/flexbox";
import { Paragraph } from "components/typography";
// CUSTOM UTILS METHOD
import { isDark } from "utils/constants";

// STYLED COMPONENTS
const LinkList = styled("div")(({ theme }) => ({
  gap: 12,
  display: "flex",
  flexDirection: "column",
  a: {
    color: theme.palette.grey[isDark(theme) ? 300 : 700],
  },
}));
export default function Footer() {
  return (
    <Box pt={12}>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FlexBox alignItems='center' gap={1} mb={2}>
              <Box
                alt='logo'
                width={40}
                height={40}
                component='img'
                src='/static/logo/logo-svg.svg'
              />

              <Paragraph fontSize={28} fontWeight={600}>
                Ton
              </Paragraph>
            </FlexBox>

            <Paragraph
              fontSize={16}
              lineHeight={1.7}
              fontWeight={500}
              color='text.secondary'
              pr={{
                lg: 5,
                md: 2,
                xs: 0,
              }}>
              Ton SaaS template is a powerful and versatile software application
              that provides a comprehensive framework for building and
              delivering cloud-based solutions.
            </Paragraph>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Paragraph mb={3} fontSize={20} fontWeight={600}>
              Products
            </Paragraph>

            <LinkList>
              <Link href='#'>Project Management</Link>
              <Link href='#'>Multi-tenancy</Link>
              <Link href='#'>Scalability</Link>
              <Link href='#'>Customization</Link>
              <Link href='#'>Integration</Link>
              <Link href='#'>Mobile accessibility</Link>
              <Link href='#'>Analytics and reporting</Link>
            </LinkList>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Paragraph mb={3} fontSize={20} fontWeight={600}>
              Features
            </Paragraph>

            <LinkList>
              <Link href='#'>User management</Link>
              <Link href='#'>Workflow automation</Link>
              <Link href='#'>API access</Link>
              <Link href='#'>Data visualization</Link>
              <Link href='#'>Version control</Link>
              <Link href='#'>Upgrades</Link>
              <Link href='#'>Billing and invoicing</Link>
            </LinkList>
          </Grid>

          <Grid item xs={12} sm={4} md={2}>
            <Paragraph mb={3} fontSize={20} fontWeight={600}>
              Explore
            </Paragraph>

            <LinkList>
              <Link href='#'>Docs</Link>
              <Link href='#'>Pricing</Link>
              <Link href='#'>Integrations</Link>
              <Link href='#'>Blog</Link>
              <Link href='#'>About</Link>
            </LinkList>
          </Grid>
        </Grid>
      </Container>

      <Divider
        sx={{
          mt: 12,
        }}
      />

      <Paragraph py={5} textAlign='center' fontSize={16} fontWeight={500}>
        Copyright © 2023{" "}
        <a href='https://ui-lib.com' target='_blank' rel='noreferrer'>
          UI Lib
        </a>
        . All rights reserved
      </Paragraph>
    </Box>
  );
}
