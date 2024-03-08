import { Input } from '@mui/material';

type InputProps = {
  text: string;
  value: string;
  onChange: (arg: string) => void;
  type: string;
};

const InputAtom = ({ text, onChange, type }: InputProps) => {

  return <Input type={type} placeholder={text} onChange={(evt) => onChange(evt.target.value)}  autoComplete='false'/>;
};

export default InputAtom;
