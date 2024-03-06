import Button from '@mui/material/Button';

export function ButtonComponent() {
  return (
    <Button onClick={() => console.log('test') } variant="contained">Text</Button>
  );
}

export default ButtonComponent;
