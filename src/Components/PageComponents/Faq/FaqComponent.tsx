import React, { FC } from 'react';
import { Collapse } from 'antd';
import { useTranslation } from 'react-i18next';

interface IFAQ {
  id: string;
  question: string;
  answer: string;
}

const { Panel } = Collapse;

const FaqComponent: FC = () => {
  const { t } = useTranslation();

  return (
    <Collapse bordered={false} defaultActiveKey={['1']}>
      {FAQ.map(({ answer, id, question }) => (
        <Panel header={`${t(question)}`} key={id}>
          {t(answer)}
        </Panel>
      ))}
    </Collapse>
  );
};

const FAQ: IFAQ[] = [
  {
    id: '1',
    question: 'questionFirst',
    answer: 'answerFirst',
  },
  {
    id: '2',
    question: 'questionSecond',
    answer: 'answerFirst',
  },
  {
    id: '3',
    question: 'questionThird',
    answer: 'answerFirst',
  },
  {
    id: '4',
    question: 'questionFour',
    answer: 'answerFirst',
  },
  {
    id: '5',
    question: 'questionFive',
    answer: 'answerFirst',
  },
];

export default FaqComponent;
