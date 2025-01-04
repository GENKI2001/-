import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import ButtonAtoms from '../../../../atoms/button/Button.Atoms';
import '../ButtonCircle.css';
import './CircleFixedPostButton.Ions.css';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  isMobile?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const CircleFixedPostButtonIons: React.FC<ButtonProps> = React.memo((props) => {
  return (
    <ButtonAtoms
      onClick={props.onClick}
      disabled={props.disabled}
      isMobile={props.isMobile}
      className={`button-circle ${props.size ?? 'small'} button-filled-pink post-button-ions`}
      padding={0}
    >
      <EditIcon
        sx={{
          fontSize:
            props.size === 'small' ? 22 : props.size === 'medium' ? 28 : 32,
        }}
      />
      <span className={`post-button-text ${props.size ?? 'small'}`}>
        投稿する
      </span>
    </ButtonAtoms>
  );
});

export default CircleFixedPostButtonIons;
