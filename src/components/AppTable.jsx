import { alpha, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, Box, useTheme, Pagination, Backdrop, Typography, Divider, colors, Button, Hidden, CircularProgress, Fade } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { memo, useEffect, useState } from "react";
import { t } from "i18next";
import Iconify from "./Iconify";
import { Avatar } from "antd";

export const DefaultPageSize = 10
export const DefaultPageSizeOptions = [10, 15, 20, 50]

const AppTable = ({
    sx,
    columns = [],
    data = [],
    onLoadMore,
    loading,
    rowHeight,
    height,
    initialState,
    disabledPaging,
    disabledHeader,
    allowOpenDetail,
    renderDetail,
    defaultPageSize,
    onRowClick,
    rowSpacing,
    disableRowHover,
    allowSort,
    disableColumnResize,
    onPageChange,
    itemCount,
    ...props
}) => {
    const theme = useTheme()
    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(defaultPageSize || DefaultPageSize)
    const [itemSelected, setItemSelected] = useState(null)
    const [openDetail, setOpenDetail] = useState(false)

    const handleShowDetail = (item) => {
        setItemSelected(item?.row)
        setOpenDetail(true)
    }

    const handlePageChange = (page) => {
        onPageChange(page)
        setPage(page)
    }

    // const PageSizeOptions = [DefaultPageSize, ...DefaultPageSizeOptions.filter(item => item !== DefaultPageSize)].sort((a, b) => a - b)

    return (
        <Stack sx={{ background: 'inherit', position: 'relative', flexGrow: 1 }}>
            <Box height={height} sx={{
                background: 'inherit',
                minHeight: 300,
                flexGrow: 1
            }}>
                <DataGrid

                    sx={{
                        ...sx,
                        '& *': {
                            scrollBehavior: 'auto'
                        },
                        background: 'inherit',
                        '& .MuiDataGrid-columnHeaders': {
                            display: disabledHeader && 'none !important',
                            position: 'sticky',
                            top: '0px'
                        },
                        '& .MuiDataGrid-columnHeaders > div': {
                            background: 'none !important',
                        },
                        '& .MuiDataGrid-row': {
                            borderBottom: rowSpacing ? `1px solid ${theme.palette.divider}` : '',
                            '&.MuiDataGrid-row--lastVisible': {
                                borderBottom: 'none'
                            },
                            "&:hover": {
                                background: disableRowHover ? 'none !important' : `${theme.palette.action.active} !important`
                            }
                        },
                        [theme.breakpoints.down('md')]: {
                            '& .MuiDataGrid-cell': {
                                padding: 0,
                            }
                        }
                    }}
                    initialState={{
                        pagination: {
                            paginationModel: { page: page, pageSize: disabledPaging ? 10000 : pageSize },
                        },
                    }}
                    rows={data}
                    columns={columns}
                    scrollbarSize={0}
                    disableDensitySelector={true}
                    // pageSizeOptions={PageSizeOptions}
                    paginationModel={{ page: page, pageSize: pageSize }}
                    rowSelection={false}
                    disableColumnMenu={true}
                    disableColumnFilter
                    hideFooterPagination
                    autoHeight={height ? false : true}
                    disableAutosize
                    hideFooter
                    rowHeight={rowHeight}
                    disableVirtualization={true}
                    columnHeaderHeight={disabledHeader ? '0px !important' : 40}
                    slots={{
                        noRowsOverlay: CustomNoRowsOverlay,
                    }}
                />
                <Backdrop open={loading} sx={{ position: 'absolute', zIndex: 10, background: 'none', minHeight: 300 }}>
                    <Fade in={loading}>
                        <Stack sx={{ background: theme.palette.background.paper, borderRadius: 50, padding: '1rem', boxShadow: '0px 0px 5px rgba(0,0,0,0.5)' }}>
                            <CircularProgress sx={{ width: '20px !important', height: '20px !important' }} />
                        </Stack>
                    </Fade>
                </Backdrop>
            </Box>
            {
                data.length >= pageSize && <Pagination
                    count={parseInt(data?.length / pageSize) + ((data?.length % pageSize) > 1 ? 1 : 0)}
                    defaultPage={pageSize}
                    siblingCount={0}
                    page={page + 1}
                    onChange={(e, page) => handlePageChange(page - 1)}
                    color="secondary"
                    sx={{
                        py: 2,
                        '& ul': {
                            alignItems: 'center',
                            justifyContent: 'center'
                        }
                    }}
                />
            }
        </Stack>
    );
};

export default memo(AppTable);

function CustomNoRowsOverlay() {
    const theme = useTheme()
    return <StyledGridOverlay>
        <Iconify icon={'fluent:tab-desktop-search-16-filled'} size={30} sx={{ color: theme.palette.text.secondary, opacity: 0.6 }} />
        <Typography fontWeight={600} mt={1} color={'text.secondary'} variant="body2">{t("No data")}</Typography>
    </StyledGridOverlay>

}

const StyledGridOverlay = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    '& .ant-empty-img-1': {
        fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626',
    },
    '& .ant-empty-img-2': {
        fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959',
    },
    '& .ant-empty-img-3': {
        fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343',
    },
    '& .ant-empty-img-4': {
        fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c',
    },
    '& .ant-empty-img-5': {
        fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
        fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff',
    },
}));

