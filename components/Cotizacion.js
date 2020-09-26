import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Cotizacion = ({ resultado }) => {

    if (Object.keys(resultado).length === 0) return null

    return (
        <View style={styles.resultado}>
            <Text style={[styles.texto, styles.precio]}>
                <Text style={styles.span}>
                    {resultado.PRICE}
                </Text>
            </Text>
            <Text style={styles.texto}>
                Highest price of the day:{' '}
                <Text style={styles.span}>
                    {resultado.HIGHDAY}
                </Text>
            </Text>
            <Text style={styles.texto}>
                Lowest price of the day:{' '}
                <Text style={styles.span}>
                    {resultado.LOWDAY}
                </Text>
            </Text>
            <Text style={styles.texto}>
                Last update:{' '}
                <Text style={styles.span}>
                    {resultado.LASTUPDATE}
                </Text>
            </Text>
        </View>
    )
}

export default Cotizacion

const styles = StyleSheet.create({
    resultado: {
        backgroundColor: '#5E49E2',
        padding: 20
    },
    texto: {
        color: 'white',
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        marginBottom: 10
    },
    precio: {
        fontSize: 38
    },
    span: {
        fontFamily: 'Lato-Black',
    }
})
