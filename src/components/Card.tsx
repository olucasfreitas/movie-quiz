import React, { useEffect, useState } from "react";
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";

interface Props {
  opcoes: Filme[];
  update(): void;
  usados(filme: string): void;
}

interface Filme {
  Poster: string;
  Title: string;
}

const Card = ({ opcoes, update, usados }: Props) => {
  let sort: Filme = opcoes[Math.floor(Math.random() * opcoes.length)];
  const [pont, setPont] = useState<number>(0);
  const [rodada, setRodada] = useState<number>(0);

  const escolherFilme = (title: string) => {
    if (title === sort.Title) {
      setPont(pont + 1);
      update();
      usados(sort.Title);
      setRodada(rodada + 1);
    } else {
      update();
      usados(sort.Title);
      setRodada(rodada + 1);
    }
  };

  if (sort != undefined && rodada !== 5) {
    return (
      <>
        <Image source={{ uri: sort.Poster }} style={styles.poster} />
        <TouchableOpacity
          onPress={() => escolherFilme(opcoes[0].Title)}
          style={styles.title}
        >
          <Text style={{ color: "#FFFFFF" }}>{opcoes[0].Title}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => escolherFilme(opcoes[1].Title)}
          style={styles.title}
        >
          <Text style={{ color: "#FFFFFF" }}>{opcoes[1].Title}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => escolherFilme(opcoes[2].Title)}
          style={styles.title}
        >
          <Text style={{ color: "#FFFFFF" }}>{opcoes[2].Title}</Text>
        </TouchableOpacity>
      </>
    );
  } else {
    return (
      <>
        <Text style={{ color: "green", fontSize: 24 }}>The END</Text>
        <Text style={{ color: "green", fontSize: 24 }}>Score: {pont}</Text>
      </>
    );
  }
};

const styles = StyleSheet.create({
  poster: {
    width: 300,
    height: 400,
  },
  title: {
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#0000FF",
    padding: 10,
  },
});

export default Card;
