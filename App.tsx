import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./src/components/Card";
import { getMovies } from "./src/services/Api";

interface Filme {
  Poster: string;
  Title: string;
}

export default function App() {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [usados, setUsados] = useState<string[]>([]);
  const films = ["marvel", "harry-potter"];

  async function getFilmes() {
    const { data } = await getMovies(
      films[Math.floor(Math.random() * films.length)]
      // "marvel"
    );
    setFilmes(data.Search);
  }

  function sortearFilme(array: any) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function generateNewArray(array: any) {
    const option = sortearFilme(array);
    const newArray = array.filter(
      (filme: Filme) => filme.Title !== option.Title
    );
    return [option, newArray];
  }

  function gerarOpcoes() {
    usados.forEach((usado) => {
      const index = filmes.findIndex((filme) => filme.Title === usado);
      filmes.splice(index, 1);
    });

    const [option1, newArray1] = generateNewArray(filmes);
    const [option2, newArray2] = generateNewArray(newArray1);
    const [option3] = generateNewArray(newArray2);

    const opcoes = [option1, option2, option3];
    opcoes.sort(() => Math.random() - 0.5);

    return opcoes;
  }

  function atualizarUsados(filme: string) {
    if (!usados.includes(filme)) {
      usados.push(filme);
    }

    console.log(usados);
  }

  useEffect(() => {
    getFilmes();
  }, []);

  return (
    <View style={styles.container}>
      <Text>QUIZ GAME</Text>
      <Card
        opcoes={gerarOpcoes()}
        update={getFilmes}
        usados={atualizarUsados}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
