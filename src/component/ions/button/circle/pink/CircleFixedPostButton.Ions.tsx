import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import ButtonAtoms from '../../../../atoms/button/Button.Atoms';
import { ButtonSizeType } from '../../../../atoms/button/Button.type';
import '../ButtonCircle.css';
import './CircleFixedPostButton.Ions.css';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  isMobile?: boolean;
  size?: ButtonSizeType;
}

const CircleFixedPostButtonIons: React.FC<ButtonProps> = React.memo((props) => {
  return (
    <ButtonAtoms
      onClick={props.onClick}
      disabled={props.disabled}
      className={`button-circle-ions ${props.size ?? 'small'} button-filled-pink post-button-ions ${props.isMobile ? 'mobile' : ''}`}
      padding={0}
    >
      <EditIcon className="post-button-ions-icon" />
      <span className={`post-button-ions-text ${props.size ?? 'small'}`}>
        投稿する
      </span>
    </ButtonAtoms>
  );
});

export default CircleFixedPostButtonIons;
