import React, { FC } from 'react';
import i18n from '../../../Utils/i18n';

const LangBtn: FC = () => {
  const onChange = (event: React.MouseEvent<HTMLInputElement>) => {
    const btn = event.target as HTMLInputElement;
    i18n.changeLanguage(btn.value);
  };

  return (
    <div className={`language__btns`}>
      <input
        type='button'
        value='ua'
        className={`language__btn language__ua`}
        onClick={onChange}
      />
      <input
        type='button'
        value='en'
        className={`language__btn language__en`}
        onClick={onChange}
      />
    </div>
  );
};

export default LangBtn;
