import { StyleSheet, Text, View, Modal, SectionList, ScrollView } from 'react-native';
import { ButtonGroup, Button, Card, Image } from '@rneui/themed';
import { useEffect, useState } from 'react';

Home = () => {

  let [modal, setModalVisible] = useState(false);
  let [estado, setEstado] = useState(require('..//assets/cat-blink.gif'));
  let [publicaciones, setPublicaciones] = useState([]);

  const closeModal = () => {
    setModalVisible(false);
  }

  const openModal = (img) => {
    setEstado(img);
    setModalVisible(true);
  }


  useEffect(() => {
    const newData = [
      { name: "Miguel", img: require('../assets/cameraman.jpg'), perfil: require('../assets/perfil/perfil02.jpg') },
      { name: "Angel", img: require('../assets/wallpaper1.jpg'), perfil: require('../assets/perfil/perfil03.jpg') },
      { name: "Gaby", img: require('../assets/wallpaper2.jpg'), perfil: require('../assets/perfil/perfil04.jpg') }
    ];

    setPublicaciones(newData);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.img} source={require('../assets/perfil/perfil01.jpg')} onLongPress={() => openModal(require("../assets/hola-gatito.gif"))} onPressOut={closeModal} />
        <Image style={styles.img} source={require('../assets/perfil/perfil02.jpg')} onLongPress={() => openModal(require("../assets/cat-blink.gif"))} onPressOut={closeModal}/>
        <Image style={styles.img} source={require('../assets/perfil/perfil03.jpg')} onLongPress={() => openModal(require("../assets/cat.gif"))} onPressOut={closeModal} />
        <Image style={styles.img} source={require('../assets/perfil/perfil04.jpg')} onLongPress={() => openModal(require("../assets/shocked-cat.gif"))} onPressOut={closeModal} />
      </View>

    <ScrollView>
      {
        publicaciones.map((item, index) => {
            return (
              <Card key={item.name + index} containerStyle={{backgroundColor: 'black', borderRadius: 20, marginBottom: 25, display: 'flex'}} >
                <Card.Title style={{alignSelf: 'flex-start'}}> 
                  <View style={styles.publi}>
                    <Image style={styles.img2} source={item.perfil} /> 
                    <Text style={{ color: 'white', marginLeft: 10, fontWeight: 'bold', width: 'auto'}}>{item.name}</Text>
                  </View>
                </Card.Title>        
                <Card.Divider />
                
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
                <Image style={styles.imagen} source={item.img}/>
                <Card.Divider />                     
                </View>
                <Card.Divider />

                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Image style={styles.tools} source={require('../assets/perfil/amor.png')} /> 
                  <Image style={styles.tools} source={require('../assets/perfil/comentario.png')} /> 
                  <Image style={styles.tools} source={require('../assets/perfil/enviar.png')} /> 
                  </View>

                  <Image style={styles.tools} source={require('../assets/perfil/guardar.png')} /> 
                </View>

            </Card>
            );
        })
      }
    </ScrollView>

      <Modal visible={modal} animationType='fade' transparent>
        <View style={styles.modal}>
          <Image style={styles.estado} source={estado} />
        </View>
      </Modal>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  header: {
    height: 85,
    flexDirection: 'row',
    borderWidth: 1,
    borderBottomColor: 'purple',
    marginTop: 40
  },
  img: {
    width: 80,
    height: 80,
    borderColor: 'red',
    borderRadius: 100,
    borderWidth: 4,
    marginLeft: 18
  },
  img2: {
    width: 60,
    height: 60,
    borderColor: 'purple',
    borderRadius: 100,
    borderWidth: 3,
    marginLeft: 18
  },
  modal: {
    width: '100%',
    marginTop: 200,
    backgroundColor: 'white'
  },
  estado: {
    width: '100%',
    height: 400,
    paddingTop: 100
  },
  imagen: {
    width: 190,
    height: 220
  },
  publi: {
    color: 'white', 
    alignSelf: 'flex-start', 
    height: 60, 
    flexDirection: 'row', 
    alignItems: 'center'
  }, 
  tools: {
    width: 30,
    height: 30,
    tintColor: 'white',
    marginLeft: 10
  }
});
