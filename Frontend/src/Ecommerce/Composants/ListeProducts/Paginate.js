import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function Paginate(props) {


  return (
 <div className='paginate'>

    <Stack spacing={2}>
    <Pagination
      count={props.totalPages}
      variant="outlined"
      color="primary"
      
      page={props.currentPage}
      onChange={props.handlePageChange}
    />
  </Stack>
  </div>
  );
}