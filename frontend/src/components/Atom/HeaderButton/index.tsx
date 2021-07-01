import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

type ButtonProps = {
  page: string
}

const HeaderButton: React.FC<ButtonProps> = ({ page }: ButtonProps) => {
  return (
    <Link to={`/${page}`}>
      <Button color="inherit">
        {page}
      </Button>
    </Link>
  );
}

export default HeaderButton;