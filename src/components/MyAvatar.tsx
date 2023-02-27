// hooks
//
import { MAvatar } from './@material-extend';
import { createAvatar } from '../utils';

export default function MyAvatar({
  name,
  photoURL,
  sx,
  ...other
}: {
  name?: string;
  photoURL?: string;
  sx?: any;
}) {
  return (
    <MAvatar
      src={photoURL}
      alt={name}
      sx={sx}
      color={photoURL ? 'default' : createAvatar(name as string).color}
      {...other}
    >
      {createAvatar(name as string).name}
    </MAvatar>
  );
}
