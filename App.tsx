import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Card';
import { getMovies } from "./src/services/Api";

export default function App() {
  const [filmes, setFilmes] = useState([])

  async function getFilmes(params:string) {
    const {data} = await getMovies('matrix');
    setFilmes(data.Search)
  }

  function sortearFilme() {
    return filmes[Math.floor(Math.random()*filmes.length)] 
  }

  useEffect(()=>{
    getFilmes("")
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>QUIZ GAME</Text>
      <Card filme={sortearFilme()} fake_title1="fake1" fake_title2="fake2" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
