import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import { TextAtomsProps } from '../../../atoms/text/Text.type';
import './TagText.Ions.css';

export const TagTextIons: React.FC<TextAtomsProps> = React.memo((props) => (
  <TextAtoms
    {...props}
    size={props.size || 'small'}
    color="purple"
    text={'# ' + props.text}
    className="tag-text-ions"
  />
));
