import { Button } from '@mui/material';

type InputProps = {
  buttonText: string;
  handleClick: () => void;
}

const ButtonAtom = ({buttonText, handleClick} : InputProps) => {
  return <Button onClick={handleClick} variant="contained">{buttonText}</Button>
}

export default ButtonAtom;
