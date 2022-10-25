/* eslint-disable @typescript-eslint/no-unsafe-return */
import { StyleSheet, View } from 'react-native';
import { Input, Header, RefreshButtom } from '../../../components';
import { FlatList } from 'react-native-gesture-handler';
import User from './components/User';
import { COLORS } from '../../../theme';
import { ALL_USERS } from '../../../graphql/user.graphql';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

const StaffScreen = ({ navigation }: any) => {
  const [filtered, setFiltered] = useState<any[]>([]);

  const { data, refetch } = useQuery(ALL_USERS, {
    onCompleted(data) {
      setFiltered(data.allUsers);
    },
    onError(error) {
      console.log(error);
    },
  });

  if (data) {
    const { allUsers } = data;

    const onSearch = (val: string) => {
      const result = allUsers.filter(
        (item: any) =>
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

        <View style={{ flex: 1, marginHorizontal: 8 }}>
          <FlatList
            data={filtered}
            keyExtractor={(item) => item.id}
            renderItem={({ item: user }) => <User key={user.id} {...user} />}
          />
        </View>
        <RefreshButtom onPress={() => refetch()} />
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
