import { useMemo } from "react";
import { useTable as useReactQueryTable } from "react-table";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  TablePagination,
  Button,
  Container,
} from "@mui/material";
import { HeaderBreadcrumbs, Page } from "components";
import { useSettings } from "hooks";
import { Icon } from "@iconify/react";

export default function UserList() {
  const data = useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  );

  const columns: any = useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "col2",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useReactQueryTable({
      columns,
      data,
    });

  const { themeStretch } = useSettings();
  return (
    <Page title="User List | Cawaale ICT">
      <Container maxWidth={themeStretch ? false : "lg"}>
        <HeaderBreadcrumbs
          heading="User List"
          links={[
            { name: "Dashboard", href: "/dashboard" },
            { name: "User List" },
          ]}
          action={
            <Button
              startIcon={<Icon icon={"eva:plus-fill"} />}
              variant="contained"
              color="primary"
            >
              Add User
            </Button>
          }
        />
        <Card>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table {...getTableProps()}>
              <TableHead>
                {headerGroups.map((headerGroup) => (
                  <TableRow {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <TableCell {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <TableRow {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <TableCell {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
    </Page>
  );
}
