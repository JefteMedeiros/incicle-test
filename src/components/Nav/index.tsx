import React from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import AddBoxIcon from '@mui/icons-material/AddBox';

import { Button } from '@mui/material';
import { NavButtons, NavContainer, NavTitle } from '../../styles/Nav';

const filterSelection = ['Evento', 'Publicação', 'Comunicado'];

type Props = {
  onFilterChange: (filters: string) => void;
  filters: string[];
};

const Nav: React.FC<Props> = ({ onFilterChange, filters }) => {
  const handleChange = (event: SelectChangeEvent<typeof filters>) => {
    const {
      target: { value },
    } = event;

    onFilterChange(String(value));
  };

  return (
    <NavContainer sx={{ flexDirection: { sm: 'row' } }}>
      <NavTitle variant="h4">Endomarketing</NavTitle>
      <NavButtons>
        <FormControl sx={{ minWidth: '287px' }}>
          <InputLabel id="multiple-checkbox-label">Tipo</InputLabel>
          <Select
            labelId="multiple-checkbox-label"
            id="multiple-checkbox"
            multiple
            value={filters}
            onChange={handleChange}
            renderValue={selected => selected.join(', ')}
            input={<OutlinedInput label="Tag" />}
          >
            {filterSelection.map(filter => (
              <MenuItem key={filter} value={filter}>
                <Checkbox checked={filters.indexOf(filter) > -1} />
                <ListItemText primary={filter} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button endIcon={<AddBoxIcon />} variant="contained">
          Criar
        </Button>
      </NavButtons>
    </NavContainer>
  );
};

export default Nav;
