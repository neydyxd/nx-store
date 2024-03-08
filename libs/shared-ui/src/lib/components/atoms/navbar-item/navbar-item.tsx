import { Link } from '@mui/material';

type NavbarItemProps = {
  text: string;
  url: string;
};

const NavbarItem = ({ url, text }: NavbarItemProps) => {
  return (
    <Link fontSize="20px" color="inherit" underline="hover" href={url}>
      {text}
    </Link>
  );
};

export default NavbarItem;
