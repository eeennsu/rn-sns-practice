import { FC } from 'react';
import { Text } from 'react-native';

import { style } from './styles';

interface IProps {
  title: string;
}

const MainTitle: FC<IProps> = ({ title }) => {
  return <Text style={style.title}>{title}</Text>;
};

export default MainTitle;
