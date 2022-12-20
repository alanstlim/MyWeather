import React from 'react';
import { BlurContainer, Spinner, TextLoading } from './styles';

type LoadingProps = {
  show: boolean;
};
const Loading: React.FC<LoadingProps> = ({ show = false }) => {
  if (!show) return null;

  return (
    <BlurContainer>
      <Spinner size="large" />
      <TextLoading>Loading...</TextLoading>
    </BlurContainer>
  );
};

export default Loading;
