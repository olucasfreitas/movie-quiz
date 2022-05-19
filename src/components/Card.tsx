import React from "react"
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";

interface Props {
  filme: {
    Poster: string,
    Title: string,
  },
  fake_title1: string,
  fake_title2: string,
}

const Card = ({filme, fake_title1, fake_title2}: Props) =>  {
  let titles = []

  if (filme!=undefined) {
    titles.push(filme.Title)
    titles.push(fake_title1)

    return (
      <>
        <Image source={{uri: filme.Poster}} style={styles.poster} />
        <TouchableOpacity style={styles.title} >
          <Text style={{color: '#FFFFFF'}}>
            {filme.Title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.title} >
          <Text style={{color: '#FFFFFF'}}>
            {fake_title1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.title} >
          <Text style={{color: '#FFFFFF'}}>
            {fake_title2}
          </Text>
        </TouchableOpacity>
      </>
    )  
  }else{
    return (<></>)
  }
}

const styles = StyleSheet.create({
  poster: {
    width: 300, 
    height: 400,
  },
  title: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#0000FF',
    padding: 10,
  },
})

export default Card;