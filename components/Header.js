import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'

const Header = () => (
    <Text style={styles.encabezado}>CryptoCoins</Text>
)

export default Header

const styles = StyleSheet.create({
    encabezado: {
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        fontFamily: 'Lato-Black',
        backgroundColor: '#5E49E2',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        color: 'white',
        marginBottom: 30
    }
})
