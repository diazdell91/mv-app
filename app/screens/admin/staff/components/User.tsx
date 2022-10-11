//import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon, Ionicons } from '@expo/vector-icons';
import DashedLine from 'react-native-dashed-line';
import { useNavigation } from '@react-navigation/native';
import StaffProfile from './StaffProfile';
import { Text } from '../../../../components';
import { COLORS } from '../../../../theme';
import moment from 'moment';

export type CustomerProps = {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  lastTask: string;
  disabled: boolean;
  pushToken: string;
  servicesAllowed: [string];
  role: string;
  wallet: {
    id: string;
    balance: number;
    createdAt: string;
    currency: string;
  };
};

const User = (props: CustomerProps) => {
  const { navigate } = useNavigation<any>();
  const { name, wallet, email, phone, disabled, lastTask } = props;
  return (
    <Pressable
      onPress={() => {
        navigate('CustomerDetails', { customer: props });
      }}
      style={styles.container}
    >
      <View style={styles.customer}>
        <StaffProfile name={name} balance={wallet.balance} />
        <View style={{ alignItems: 'flex-end' }}>
          <Text h4>Ultima actividad</Text>
          <Text align="center" h4>
            {moment(lastTask).format('lll')}
          </Text>
        </View>
        <Ionicons
          name={disabled ? 'md-lock-closed-outline' : 'md-lock-open-outline'}
          size={22}
          color={COLORS.gray}
          style={{ marginLeft: 8 }}
        />
      </View>
      <DashedLine
        dashLength={2}
        dashThickness={1}
        dashColor={COLORS.gray}
        style={{ opacity: 0.3 }}
      />
      <View style={styles.info}>
        <Icon name="email-outline" size={22} color={COLORS.gray} />
        <Text size={16} fontFamily={'Poppins-Medium'} style={{ marginStart: 8 }}>
          {email}
        </Text>
      </View>
      <View style={styles.info}>
        <Icon name="phone-dial-outline" size={22} color={COLORS.gray} />
        <Text size={16} fontFamily={'Poppins-Medium'} style={{ marginStart: 8 }}>
          {phone}
        </Text>
      </View>
    </Pressable>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    marginBottom: 16,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  customer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 12,
  },
});
