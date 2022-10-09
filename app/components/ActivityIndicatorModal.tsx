import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import Modal from 'react-native-modal';
import { COLORS } from '../theme';

interface Props {
  loading: boolean;
  color?: ActivityIndicatorProps['color'];
}

const ActivityIndicatorModal = ({ loading, color = COLORS.primary }: Props): React.ReactElement => {
  return (
    <Modal
      isVisible={loading}
      style={{ margin: 0, flex: 1 }}
      animationIn="fadeIn"
      animationOut="fadeOut"
      statusBarTranslucent
      backdropColor="#00000FC"
    >
      <ActivityIndicator size="large" color={color} />
    </Modal>
  );
};

export default ActivityIndicatorModal;
