import { Fade, Stack, Typography, useTheme } from "@mui/material";
import AppTable from "components/AppTable";

const data = [
  {
    id: 1,
    createdAt: "2022-12-12 12:12:12",
    address: "0x0000000000000000000000000000000000000000",
    amount: 1000,
  },
  {
    id: 2,
    createdAt: "2022-12-12 12:12:12",
    address: "0x0000000000000000000000000000000000000000",
    amount: 1000,
  },
  {
    id: 3,
    createdAt: "2022-12-12 12:12:12",
    address: "0x0000000000000000000000000000000000000000",
    amount: 1000,
  },
  {
    id: 4,
    createdAt: "2022-12-12 12:12:12",
    address: "0x0000000000000000000000000000000000000000",
    amount: 1000,
  },
];
export default function LeaderBoard() {
  const theme = useTheme();
  const rowHeight = 50;
  const defaultHeader = [
    {
      field: "id",
      minWidth: 30,
      headerName: "#",
    },
    {
      field: "address",
      flex: 1,
      headerName: "Wallet",
      renderCell: ({ row }) => (
        <Typography color={"primary.main"}>{row.address}</Typography>
      ),
    },
    {
      field: "xp",
      minWidth: 100,
      headerName: "XP",
      renderCell: ({ row }) => <Typography>{row.amount} XP</Typography>,
    },
  ];
  return (
    <Fade in={true}>
      <Stack gap={2}>
        <AppTable
          columns={defaultHeader}
          data={data}
          rowHeight={rowHeight}
          rowSpacing={false}
          defaultPageSize={10}
          // onPageChange={(page) => setPage(page + 1)}
          // itemCount={total}
          // loading={loading}
          disableRowHover={true}
          sx={{
            "& .MuiDataGrid-cell": {
              display: "flex",
              alignItems: "center",
              width: "100%",
              border: "none",
              borderBottom: `1px solid ${theme.palette.divider} !important`,
              padding: "0px 0.7rem !important",
              background: "none !important",
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
              background: "#1D1D1D",
              height: "45px !important",
              // borderRadius: "0.5rem!important",
            },
            "& .MuiDataGrid-columnSeparator": {
              display: "none",
            },
          }}
        />
      </Stack>
    </Fade>
  );
}
