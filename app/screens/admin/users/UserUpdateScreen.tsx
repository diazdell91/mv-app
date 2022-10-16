import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Button, Input, Text } from '../../../components';
import { COLORS } from '../../../theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_USER } from '../../../graphql/user.graphql';
import { PRODUCT_CATEGORYS } from '../../../graphql/products.graphql';
import ServicesCategorys from './components/ServicesCategorys';
import { useNavigation } from '@react-navigation/native';

type Props = {
  navigation: any;
  route: any;
};

export default function UserUpdateScreen(props: Props) {
  const { bottom: paddingBottom } = useSafeAreaInsets();
  const navigation = useNavigation<any>();

  const { route } = props;
  const { user } = route.params;

  const {
    id,
    email: userEmail,
    name: userName,
    phone: userPhone,
    role: userRole,
    servicesAllowed,
  } = user;

  const allServices: any[] = [].concat(servicesAllowed);
  const categories: any[] = [];
  const [updateUser, { data: userData }] = useMutation(UPDATE_USER);
  const { data, loading, error } = useQuery(PRODUCT_CATEGORYS);
  const { productsCategorys } = data;

  productsCategorys.forEach((category: any) => {
    if (!servicesAllowed.map(({ category }: any) => category).includes(category))
      allServices.push({ category, commissionRate: 0 });
  });

  servicesAllowed.forEach((item: any) => {
    categories.push({ ...item });
  });

  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [phone, setPhone] = useState(userPhone);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [role, setRole] = useState(userRole);
  const [selectedCategories, setSelectedCategories] = useState<any[]>(categories);

  const validate = () => {
    if (name.length < 3) {
      return false;
    }
    if (!email.includes('@')) {
      return false;
    }
    if (phone.length < 8 || phone.length > 10) {
      return false;
    }

    if (password !== passwordConfirm) {
      return false;
    }
    return true;
  };

  const handleSelectedCategory = (item: any) => {
    const alreadySelected = selectedCategories.findIndex(
      (category: any) => category.category === item.category,
    );

    if (alreadySelected >= 0) {
      const filteredCategories = selectedCategories.filter(
        (el: any) => el.category !== item.category,
      );
      const newCategories = [...filteredCategories];
      setSelectedCategories(newCategories);
    } else {
      const newCategories = [...selectedCategories, item];
      setSelectedCategories(newCategories);
    }
  };

  const setInputValue = (item: any, text: string) => {
    const element = selectedCategories.find((el) => el.category === item);
    element.commissionRate = parseInt(text);
    setSelectedCategories([...selectedCategories]);
  };

  const handleCreateUser = async () => {
    const user = {
      id,
      name,
      email,
      phone,
      password,
      role,
      servicesAllowed: selectedCategories.map((item: any) => {
        if (item.commissionRate >= 0 && item.commissionRate !== '')
          return {
            commissionRate: item.commissionRate,
            category: item.category,
          };
      }),
    };

    if (password === '') {
      user.password = 'Test2020';
    }
    await updateUser({
      variables: {
        input: user,
      },
      onCompleted: (data) => {
        navigation.navigate('SuccessUser', {
          title: 'Updated',
        });
      },
      onError: (error) => {
        console.log(error);
      },
    });

    console.log(user);
  };

  return (
    <View style={{ ...styles.container, paddingBottom }}>
      <ScrollView keyboardShouldPersistTaps="always">
        <Input
          autoFocus
          placeholder="Nombre Completo"
          iconRight="account"
          iconRightColor={COLORS.black}
          value={name}
          onChangeText={setName}
          maxLength={32}
        />
        <Input
          placeholder="Email"
          iconRight="email"
          iconRightColor={COLORS.black}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Teléfono"
          iconRight="phone"
          iconRightColor={COLORS.black}
          value={phone}
          maxLength={10}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <Input
          placeholder="Contraseña"
          iconRight="lock"
          iconRightColor={COLORS.black}
          value={password}
          onChangeText={setPassword}
          maxLength={32}
          secureTextEntry
        />
        <Input
          placeholder="Confirmar Contraseña"
          iconRight="lock-check"
          iconRightColor={COLORS.black}
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          maxLength={32}
          secureTextEntry
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderColor: COLORS.stornGray,
            borderWidth: 1,
            borderRadius: 56,
          }}
        >
          <Pressable
            onPress={() => setRole('CLIENT')}
            style={{
              ...styles.select,
              backgroundColor: role === 'CLIENT' ? COLORS.caramel : COLORS.white,
            }}
          >
            <Text>Cliente</Text>
          </Pressable>
          <Pressable
            onPress={() => setRole('STAFF')}
            style={{
              ...styles.select,
              backgroundColor: role === 'STAFF' ? COLORS.caramel : COLORS.white,
            }}
          >
            <Text>Operador</Text>
          </Pressable>
        </View>
        {allServices.map((item: any, index: number) => (
          <View
            key={index}
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ServicesCategorys
              onPress={() => {
                handleSelectedCategory(item);
              }}
              category={item.category}
              isAdded={
                selectedCategories.findIndex((el: any) => el.category === item.category) >= 0
              }
            />
            <Input
              placeholder="0%"
              editable={
                selectedCategories.findIndex((el: any) => el.category === item.category) >= 0
              }
              flex
              maxLength={2}
              keyboardType={'numeric'}
              value={selectedCategories
                .find((el) => el.category === item.category)
                ?.commissionRate.toString()}
              onChangeText={(text) => setInputValue(item.category, text)}
            />
          </View>
        ))}
      </ScrollView>
      <Button
        disabled={!validate()}
        title="Actualizar usuario"
        onPress={handleCreateUser}
        style={{
          backgroundColor: !validate() ? COLORS.backgroundAlt : COLORS.primary,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  select: {
    width: '45%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 32,
    marginHorizontal: 8,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
