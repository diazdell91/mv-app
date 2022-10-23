//

import { StyleSheet, View } from 'react-native';
import { Input, Header } from '../../../components';
import { ScrollView } from 'react-native-gesture-handler';
import User from './components/User';
import { COLORS } from '../../../theme';
import { ALL_USERS } from '../../../graphql/user.graphql';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

const StaffScreen = ({ navigation }: any) => {
  const { data, loading, error } = useQuery(ALL_USERS);
  const [filtered, setFiltered] = useState<any[]>([]);

  useEffect(() => {
    const onCompleted = (data: any) => {
      setFiltered(data.allUsers);
    };
    const onError = (error: any) => {};

    if (onCompleted || onError) {
      if (onCompleted && !loading && !error) {
        onCompleted(data);
      } else if (onError && !loading && error) {
        onError(error);
      }
    }
  }, [loading, data, error]);

  if (data) {
    const { allUsers } = data;

    const onSearch = (val: string) => {
      const result = allUsers.filter(
        (item: any, index: number) =>
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          item.name.toLowerCase().includes(val.toLocaleLowerCase()) ||
          item.email.toLowerCase().includes(val.toLocaleLowerCase()),
      );

      setFiltered(result);
    };
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
            onChangeText={onSearch}
          />
        </Header>

        <ScrollView>
          <View style={{ marginHorizontal: 8 }}>
            {filtered.map((user: any) => (
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
