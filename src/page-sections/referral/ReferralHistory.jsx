import { Fade, Stack, Typography, useTheme } from "@mui/material";
import AppTable from "components/AppTable";
import { fAddress, fDateTime } from "../../utils/format";

const data = [
  {
    id: 1,
    createdAt: "2022-12-12 12:12:12",
    address: "0x0000000000000000000000000000000000000000",
    commission: 0.0012,
  },
  {
    id: 2,
    createdAt: "2022-12-12 12:12:12",
    address: "0x0000000000000000000000000000000000000000",
    commission: 0.0012,
  },
  {
    id: 3,
    createdAt: "2022-12-12 12:12:12",
    address: "0x0000000000000000000000000000000000000000",
    commission: 0.0012,
  },
  {
    id: 4,
    createdAt: "2022-12-12 12:12:12",
    address: "0x0000000000000000000000000000000000000000",
    commission: 0.0012,
  },
  {
    id: 5,
    createdAt: "2022-12-12 12:12:12",
    address: "0x0000000000000000000000000000000000000000",
    commission: 0.0012,
  },
  {
    id: 6,
    createdAt: "2022-12-12 12:12:12",
    address: "0x0000000000000000000000000000000000000000",
    commission: 0.0012,
  },
];
export default function ReferralHistory() {
  const theme = useTheme();
  const rowHeight = 50;
  const defaultHeader = [
    {
      field: "createdAt",
      minWidth: 100,
      headerName: "TIME",
      renderCell: ({ row }) => (
        <Typography>{fDateTime(row.createdAt, "MMM dd")}</Typography>
      ),
    },
    {
      field: "address",
      flex: 1,
      headerName: "USER WALLET",
      renderCell: ({ row }) => (
        <Typography>{fAddress(row.address, 8)}</Typography>
      ),
    },
    {
      field: "commission",
      minWidth: 150,
      headerName: "COMMISSION REWARD",
      renderCell: ({ row }) => (
        <Typography textAlign={"right"}>{row.commission} ETH</Typography>
      ),
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
