import React, { FC, useState, useEffect, useMemo } from 'react';
import i18n from '../../../Utils/i18n';
import styles from './lang-btn.module.scss';
import './langbtn.scss';

const LangBtn: FC = () => {
  const [active, setActive] = useState<string>('');
  const onChange = (event: React.MouseEvent<HTMLInputElement>) => {
    const btn = event.target as HTMLInputElement;
    i18n.changeLanguage(btn.value);
    setActive(i18n.language);
  };

  const uaACtive = useMemo(
    () => (active === 'ua' ? 'ua' : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [active]
  );

  const engActive = useMemo(
    () => (active === 'en' ? 'en' : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [active]
  );

  useEffect(() => {
    setActive(i18n.language);
  }, [active]);

  return (
    <div className={styles.language__btns}>
      <input
        type='button'
        value='ua'
        className={`${styles.language__btn} ${uaACtive}`}
        onClick={onChange}
      />
      <input
        type='button'
        value='en'
        className={`${styles.language__btn} ${engActive}`}
        onClick={onChange}
      />
    </div>
  );
};

export default LangBtn;
