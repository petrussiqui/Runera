import { LoadingButton } from "@mui/lab";
import {
  Modal,
  OutlinedInput,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import { t } from "i18next";
import { useEffect, useState } from "react";
import AppTable from "../components/AppTable";
import FlexBetween from "../components/flexbox/FlexBetween";
import Iconify from "../components/Iconify";
import useAxios from "../hooks/useAxios";
import { fCurrency } from "../utils/format";

export const Dashboard = () => {
  const theme = useTheme();
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState("");
  const [passCode, setPassCode] = useState("");
  const { callApi } = useAxios();
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const handleLogin = () => {
    if (passCode == 9955) {
      setAuth(true);
      setError("");
    } else {
      setError("Pass code invalid");
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await callApi("get", "/dashboard/top-ref");
        setData(
          data.map((d) => {
            return {
              ...d,
              id: d?.user?.id,
              userName: d?.user?.userName,
              count: d?.topRefQuery?.count,
              amount: d?.sumTonQuery?.sum,
            };
          }),
        );
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const defaultHeader = [
    {
      field: "userName",
      headerName: t("User"),
      flexGrow: 1,
      minWidth: 200,
      renderCell: ({ row }) => <Typography>{row?.userName}</Typography>,
    },
    {
      field: "id",
      headerName: t("ID"),
      flexGrow: 1,
      renderCell: ({ row }) => <Typography>{row?.id}</Typography>,
    },
    {
      field: "count",
      headerName: t("Count"),
      flexGrow: 1,
      renderCell: ({ row }) => (
        <Typography>{fCurrency(row?.count || 0, 2)}</Typography>
      ),
    },
    {
      field: "amount",
      headerName: `${t("Amount")} (TON)`,
      flexGrow: 1,
      minWidth: 150,
      renderCell: ({ row }) => (
        <Typography>{fCurrency(row?.sumTonQuery?.sum ?? 0, 4)} TON</Typography>
      ),
    },
    {
      field: "tonBalance",
      headerName: `${t("TON Balance")}`,
      flexGrow: 1,
      minWidth: 150,
      renderCell: ({ row }) => <Typography>{fCurrency(0, 4)}</Typography>,
    },
    {
      field: "notBalance",
      headerName: `${t("NOT Balance")}`,
      flexGrow: 1,
      minWidth: 150,
      renderCell: ({ row }) => <Typography>{fCurrency(0, 4)}</Typography>,
    },
    {
      field: "tnxBalance",
      headerName: `${t("TNX Balance")}`,
      flexGrow: 1,
      minWidth: 150,
      renderCell: ({ row }) => <Typography>{fCurrency(0, 4)}</Typography>,
    },
  ];

  const filterData = data?.filter((item) =>
    `${item?.userName}${item?.id}`
      .toLowerCase()
      .includes(searchKey?.toLowerCase()),
  );

  return (
    <>
      <Modal open={!auth}>
        <Stack
          p={2}
          spacing={1}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            width: "100vw",
            height: "100vh",
            background: theme.palette.background.default,
          }}>
          <Stack maxWidth={400} spacing={1} width={"100%"}>
            <Typography width={"100%"}>Pass code</Typography>
            <OutlinedInput
              type='number'
              placeholder={"code"}
              size='small'
              fullWidth
              onChange={(e) => setPassCode(e.target.value)}
            />
            {error && <Typography color={"error.main"}>{error}</Typography>}
            <LoadingButton
              onClick={handleLogin}
              sx={{ marginTop: "2rem !important" }}
              fullWidth>
              Confirm
            </LoadingButton>
          </Stack>
        </Stack>
      </Modal>
      <Stack
        p={2}
        sx={{
          width: "100vw",
          height: "calc(100vh - 10px)",
          background: theme.palette.background.default,
          overflowY: "hidden",
        }}>
        <FlexBetween sx={{ pb: 2 }}>
          <Typography fontWeight={500} variant='h5'>
            {t("Top ref")}
          </Typography>
          <SearchInput
            size='small'
            placeholder='Search by username, id'
            startAdornment={<Iconify icon={"gg:search"} size={25} />}
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </FlexBetween>
        <AppTable
          columns={defaultHeader}
          data={filterData}
          rowHeight={40}
          rowSpacing={false}
          defaultPageSize={100}
          height={window.innerHeight - 130}
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
              background: theme.palette.background.paper,
              height: "45px !important",
            },
            "& .MuiDataGrid-columnSeparator": {
              display: "none",
            },
          }}
        />
      </Stack>
    </>
  );
};

const SearchInput = styled(OutlinedInput)(({ theme }) => ({
  "& input": {
    padding: "0px 1rem",
    height: 35,
    lineHeight: 35,
  },
}));
