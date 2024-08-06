import { Box, Fade, Stack, Typography, useTheme } from "@mui/material";
import AppTable from "components/AppTable";
import { fAddress, fDateTime, fNumber } from "../../utils/format";
import { ButtonContained } from "../../components/CustomButton";
import { FlexRowAlign } from "../../components/flexbox";

const data = [
  {
    id: 1,
    createdAt: "2022-12-12 12:12:12",
    amount: 1,
    status: "Running",
    hashRate: 10,
    reward: 124492,
  },
  {
    id: 2,
    createdAt: "2022-12-12 12:12:12",
    amount: 1,
    status: "Running",
    hashRate: 10,
    reward: 124492,
  },
  {
    id: 3,
    createdAt: "2022-12-12 12:12:12",
    amount: 1,
    status: "Running",
    hashRate: 10,
    reward: 124492,
  },
  {
    id: 4,
    createdAt: "2022-12-12 12:12:12",
    amount: 1,
    status: "Running",
    hashRate: 10,
    reward: 124492,
  },
];

export default function EmpleTable() {
  const theme = useTheme();
  const rowHeight = 50;
  const defaultHeader = [
    {
      field: "id",
      minWidth: 50,
      headerName: "Emble ID",
    },
    {
      field: "amount",
      flex: 1,
      headerName: "Amount",
      renderCell: ({ row }) => (
        <FlexRowAlign gap={1}>
          <Box component={"img"} src={"/images/key.svg"} alt='' width={16} />

          <Typography color={"text.secondary"}>{row.amount} emble</Typography>
        </FlexRowAlign>
      ),
    },
    {
      field: "status",
      flex: 1,
      headerName: "Status",
      renderCell: ({ row }) => (
        <ButtonContained size='small'>{row.status}</ButtonContained>
      ),
    },
    {
      field: "hashRate",
      flex: 1,
      headerName: "Hash rate",
      renderCell: ({ row }) => (
        <FlexRowAlign gap={1}>
          <Box component={"img"} src={"/images/RUNES.svg"} alt='' width={20} />

          <Typography>{row.hashRate}/s</Typography>
        </FlexRowAlign>
      ),
    },
    {
      field: "reward",
      flex: 1,
      headerName: "Reward",
      renderCell: ({ row }) => (
        <FlexRowAlign gap={1}>
          <Typography>{fNumber(row.reward)}</Typography>
          <Box component={"img"} src={"/images/RUNES.svg"} alt='' width={20} />
        </FlexRowAlign>
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
              // background: "#1D1D1D",
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
