import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import ButtonAtoms from '../../../../atoms/button/Button.Atoms';
import { ButtonAtomsProps } from '../../../../atoms/button/Button.type';
import '../ButtonRound.css';
import './RoundLikeButton.Ions.css';

interface ButtonProps extends ButtonAtomsProps {
  numOflikes: number;
  selected?: boolean;
}

const RoundLikeButtonIons: React.FC<ButtonProps> = React.memo((props) => {
  return (
    <ButtonAtoms
      {...props}
      className={`button-round-ions round-like-button-ions ${props.selected ? 'selected' : ''} `}
    >
      <FavoriteIcon />
      <span>いいね</span>
      <span
        className={`like-button-ions-num-of-likes ${props.disabled ? 'disabled' : props.selected ? 'selected' : ''}`}
      >
        {props.numOflikes}
      </span>
    </ButtonAtoms>
  );
});

export default RoundLikeButtonIons;
