import { StyleSheet, View, Modal, Button } from 'react-native';
import { Image, Text } from '@rneui/themed';
import { useState } from 'react';

Perfil = () => {
    return(
        <View style={styles.main}>
            <View style={styles.top}>
                <Image style={styles.image} source={require('../assets/perfil/perfil01.jpg')}/>
                <View style={styles.info}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>2</Text>
                    <Text style={{fontSize: 15, color: 'white'}} >Publicaciones</Text>
                </View>
                <View style={styles.info}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>29</Text>
                    <Text style={{fontSize: 15, color: 'white'}} >Seguidores</Text>
                </View>
                <View style={styles.info}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>16</Text>
                    <Text style={{fontSize: 15, color: 'white'}} >Seguidos</Text>
                </View>
            </View>

            <View style={{display: 'flex', flexDirection: 'row'}}>
                <View style={styles.botones}>
                <   Button title='Editar Perfil' color='#bdb7ac' />
                </View>
                <View style={styles.botones}>
                    <Button title='Compartir Perfil' color='#bdb7ac' />
                </View>
                <View style={styles.agregar}>
                    <Image style={{width: 30, height: 30, marginTop: 2}} source={require('../assets/agregar-usuario.png')} />
                </View>
            </View>
            
        </View>
    );
}

export default Perfil;

const styles = StyleSheet.create({
    main: {
        width: '100%',
        marginTop: 60,
        height: '100%',
        backgroundColor: 'black'
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 100,
        marginLeft: 10
    },
    top: {
        display: 'flex',
        flexDirection: 'row'
    },
    info: {
        marginLeft: 15, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    botones: {
        width: 150,
        height: 'auto',
        marginTop: 20,
        marginLeft: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    agregar: {
        width: 'auto', 
        height: 35, 
        marginLeft: 18, 
        marginTop: 20,
        borderRadius: 3,
        backgroundColor: '#bdb7ac'
    }
});