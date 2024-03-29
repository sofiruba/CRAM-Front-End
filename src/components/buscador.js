import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const Buscador = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
      <Searchbar
        placeholder="Buscar..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.buscador}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buscador: {
    width: 340,
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    ocapacity: '80%',
    marginTop: 20,
    marginBottom: 0,
  }
});

export default Buscador;