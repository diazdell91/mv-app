//

import { StyleSheet, View } from 'react-native';
import { Input, Header } from '../../../components';
import { ScrollView } from 'react-native-gesture-handler';
import User from './components/User';
import { COLORS } from '../../../theme';
import { ALL_USERS } from '../../../graphql/user.graphql';
import { useQuery } from '@apollo/client';

const StaffScreen = ({ navigation }: any) => {
  const { data, loading, error } = useQuery(ALL_USERS);

  if (loading) return null;
  if (error) return null;

  if (data) {
    const { allUsers } = data;

    console.log(allUsers);

    return (
      <View style={styles.container}>
        <Header
          iconRightName="plus-circle"
          iconRightColor={COLORS.placeHolder}
          iconRightPress={() => {
            navigation.navigate('CreateUser');
          }}
        >
          <Input
            placeholder="Buscar..."
            autoFocus={false}
            iconLeft="magnify"
            iconLeftColor={COLORS.white}
            inputStyle={{
              borderRadius: 56,
              backgroundColor: COLORS.placeHolder,
              color: COLORS.white,
            }}
            style={{ borderRadius: 56, marginHorizontal: 8, backgroundColor: COLORS.placeHolder }}
          />
        </Header>

        <ScrollView>
          <View style={{ marginHorizontal: 8 }}>
            {allUsers.map((user: any) => (
              <User key={user.id} {...user} />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }

  return null;
};

export default StaffScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.gradient,
  },
});
