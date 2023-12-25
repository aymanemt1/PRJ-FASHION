import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function Paginate(props) {

  const handleChange = (event, value) => {
    props.handlePageChange(event, value);
  };

  return (
  
    <div className='paginateshop'>


    <Stack spacing={2}>
      <Pagination
        count={props.totalPages}
        variant="outlined"
        color="primary"
        page={props.currentPage}
        onChange={handleChange}
      />
    </Stack>
</div>

  );
}
