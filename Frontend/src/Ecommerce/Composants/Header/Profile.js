import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { UserContext } from '../../Context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Profile() {
  
  const {user,auth,setuser,setAuth} =React.useContext(UserContext)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const nav = useNavigate()
  
  const handlogout = () => {
    setuser(null);
    setAuth(false);
nav('/')
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2,mr:2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
           {auth === true? (
            <Avatar sx={{ width: 32, height: 32 , bgcolor: 'rgb(123, 31, 162)' }}>M</Avatar>
           ): (
            <Avatar sx={{ width: 32, height: 32 , bgcolor: 'rgb(123, 31, 162)' }} />
           )} 
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       {auth ?  (
   <Box>

    <MenuItem>
    {auth ?  (
      <Box>
        <Link style={{textDecoration:'none',color:'black',opacity:'0.8'}} to='/login'>
            <Avatar sx={{ width: 32, height: 32 ,bgcolor:'rgb(123, 31, 162)'}}>M</Avatar>
            </Link>
    </Box>

           ): (
            
            <Box>

        <Link style={{textDecoration:'none',color:'black',opacity:'0.8'}} to='/profile'>

            <Avatar sx={{ width: 32, height: 32,bgcolor:'rgb(123, 31, 162)' }} />
    </Link>
           </Box>
           )} Profile
    </MenuItem>

    <MenuItem >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handlogout}>
          <ListItemIcon>
            <Logout  fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        </Box>
) : (
 <Box>
 <Link style={{textDecoration:'none',color:'black',opacity:'0.8'}} to='/login'>
  <MenuItem >
   <Avatar /> Login
  </MenuItem>
  </Link>
 

  </Box>
)}
    
       
      </Menu>
    </React.Fragment>
  );
}
