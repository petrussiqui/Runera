import {
  Stack,
  Typography,
  styled,
  useTheme,
  Link,
  Avatar,
  Card,
} from "@mui/material";
import AppTable from "components/AppTable";
import Iconify from "components/Iconify";
import { FlexBetween, FlexRowAlign } from "components/flexbox";
import { t } from "i18next";
import moment from "moment";
import useAxios from "../../hooks/useAxios";

import TNXIcon from "icons/TNXIcon";
import { useEffect, useState } from "react";
import useSettings from "../../hooks/useSettings";
import useUserActivities from "../../hooks/useUserActivities";
import { TypographyGradient } from "../../components/typography";

export default function History() {
  const theme = useTheme();
  const { settings } = useSettings();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const { callApi } = useAxios();
  const rowHeight = 50;
  const defaultHeader = [
    {
      field: "createdAt",
      flex: 1,
      minWidth: 100,
      headerName: t("Time"),
      renderCell: ({ row }) => (
        <Stack>
          <Typography
            color={"text.secondary"}
            fontSize={"1rem!important"}
            noWrap>
            {moment(row.createdAt).format("DD MMM mm:HH")}
          </Typography>
        </Stack>
      ),
    },
    {
      field: "action",
      flex: 1,
      minWidth: 100,
      headerName: t("Type"),
    },
    {
      field: "amount",
      flex: 1,
      minWidth: 100,
      headerName: t("Amount"),
      renderCell: ({ row }) => (
        <FlexRowAlign sx={{ gap: 0.5 }}>
          <Avatar
            src={`/images/${row.token}.svg`}
            sx={{ height: 16, width: 16 }}
          />
          <TypographyGradient>
            {row.amount} {row.token}
          </TypographyGradient>
        </FlexRowAlign>
      ),
    },
  ];

  const { userActivities, fetchUserActivities } = useUserActivities(page);

  useEffect(() => {
    if (!userActivities) return;
    setLoading(true);
    setTotal(userActivities?.total || 0);
    setData(
      userActivities?.data?.map((item) => ({
        ...item,
        id: `${item.createdAt}-${item.transactionHash}`,
      })) || [],
    );
    setLoading(false);
  }, [userActivities]);

  // const handleGetHistory = async (page = 1) => {
  //   try {
  //     setLoading(true);
  //     const res = await callApi(
  //       "get",
  //       `/user/activities?page=${page}&limit=10`
  //     );
  //     setTotal(0);
  //     setData([]);

  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   handleGetHistory();
  // }, []);

  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "0.875rem",
        padding: "2rem",
        boxShadow: "none",
        height: "100%",
      }}>
      <Typography mb={2} variant='h4' fontWeight={700}>
        {t("History")}
      </Typography>
      <AppTable
        columns={defaultHeader}
        data={data}
        rowHeight={rowHeight}
        rowSpacing={false}
        defaultPageSize={10}
        onPageChange={(page) => setPage(page + 1)}
        itemCount={total}
        loading={loading}
        disableRowHover={true}
        sx={{
          "& .MuiDataGrid-cell": {
            display: "flex",
            alignItems: "center",
            width: "100%",
            border: "none",
            borderBottom: `1px solid ${theme.palette.divider} !important`,
            padding: "0px 0.7rem !important",
            background: "#0A0A0A",
          },
          "& .MuiDataGrid-topContainer": {
            "&::after": {
              display: "none !important",
            },
          },
          "& .MuiDataGrid-columnHeaders": {
            borderRadius: "0.5rem !important",
            overflow: "hidden",
          },
          "& .MuiDataGrid-columnHeader": {
            color: theme.palette.text.secondary,
            background: theme.palette.background.card,
            height: "45px !important",
          },
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
        }}
      />
    </Card>
  );
}
