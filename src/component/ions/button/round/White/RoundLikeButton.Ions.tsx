import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import ButtonAtoms from '../../../../atoms/button/Button.Atoms';
import { ButtonSizeTypeAtoms } from '../../../../atoms/button/Button.type';
import '../ButtonRound.css';
import './RoundLikeButton.Ions.css';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  isMobile?: boolean;
  numOflikes: number;
  size?: ButtonSizeTypeAtoms;
  selected?: boolean;
}

const RoundLikeButtonIons: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonAtoms
      onClick={props.onClick}
      disabled={props.disabled}
      isMobile={props.isMobile}
      className={`button-round round-like-button-ions ${props.selected ? 'selected' : ''} `}
      size={props.size}
    >
      <FavoriteIcon />
      <span className="like-button-text">いいね</span>
      <span
        className={`num-of-likes ${props.disabled ? 'disabled' : props.selected ? 'selected' : ''}`}
      >
        {props.numOflikes}
      </span>
    </ButtonAtoms>
  );
};

export default RoundLikeButtonIons;
