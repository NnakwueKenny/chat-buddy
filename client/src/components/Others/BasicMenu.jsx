import React, { useState } from 'react';

import { Menu, MenuItem, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const BasicMenu = ({ menuItems, color }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <IconButton
          size='small' component="button"
          sx={{ color: color, zIndex: 999999999 }} aria-label="go to home page"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          component='div'
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem>menuItem.text</MenuItem>
          {
              menuItems.map((menuItem) => (
                <MenuItem
                  key={menuItem.text}
                  onClick={() => { handleClose(); menuItem.action()}}
                >
                  {menuItem.text}
                </MenuItem>
              ))
          }
        </Menu>
      </>
    );
}

export default BasicMenu;