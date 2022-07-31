import * as React from 'react';
import {
  Avatar,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { IRank } from 'types/rank';
import { common } from '@mui/material/colors';
import { formatTime } from '../../../utils';

interface RankTableProps {
    ranks: IRank[];
}

const TableContainerWrapper = styled(Paper)`
  width: 100%;
  margin: 20px auto;
  max-width: 500px;
`;

const RankTable: React.FC<RankTableProps> = ({ ranks }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainerWrapper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                key="avatar"
                align="center"
                width="50px"
              />
              <TableCell
                key="name"
                align="left"
              >
                Name
              </TableCell>
              <TableCell
                key="score"
                align="center"
              >
                Score
              </TableCell>
              <TableCell
                key="time"
                align="center"
              >
                Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ranks.sort((a, b) => (a.score > b.score ? -1
              : a.score < b.score ? 1
                : a.time < b.time ? -1 : 1))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((rank) => (
                <TableRow
                  hover
                  key={rank.id}
                >
                  <TableCell
                    align="center"
                    width="50px"
                  >
                    <Avatar src={rank.avatar} sx={{ bgcolor: common.white, padding: 1 }} />
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                  >
                    {rank.name}
                  </TableCell>
                  <TableCell align="center">{rank.score}</TableCell>
                  <TableCell align="center">{formatTime(rank.time)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={ranks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainerWrapper>
  );
};

export default RankTable;
