import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native'
import { Picker } from '@react-native-community/picker'
import axios from 'axios'

const Form = ({ moneda, setMoneda, cryptomoneda, setCryptomoneda, setConsultarAPI }) => {

    const [cryptomonedas, setCryptomonedas] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const result = await axios.get(url)
            setCryptomonedas(result.data.Data)
        }
        fetchAPI()
    }, [])

    // store user's selections
    const getCurrency = (moneda) => {
        setMoneda(moneda)
    }

    const getCryptoCurrency = (crypto) => {
        setCryptomoneda(crypto)
    }

    // cotizando
    const cotizarPrecio = () => {
        if (moneda.trim() === '' || cryptomoneda.trim() === '') {
            mostrarAlerta()
            return
        }
        setConsultarAPI(true)

    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Eres tonto?',
            'Te gusta ser tonto?!',
            [{ text: 'si mi amo' }]
        )
    }

    return (
        <View>
            <Text style={styles.label}>Currency</Text>
            <Picker
                selectedValue={moneda}
                onValueChange={moneda => getCurrency(moneda)}
                itemStyle={{ height: 120 }}
            >
                <Picker.Item label=" - Choose one - " value="" />
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="CAD" value="CAD" />
                <Picker.Item label="EUR" value="EUR" />
                <Picker.Item label="AUD" value="AUD" />
                <Picker.Item label="GBP" value="GBP" />
            </Picker>

            <Text style={styles.label}>CryptoCoin</Text>
            <Picker
                selectedValue={cryptomoneda}
                onValueChange={cryptomoneda => getCryptoCurrency(cryptomoneda)}
                itemStyle={{ height: 120 }}
            >
                <Picker.Item label=" - Choose one - " value="" />
                {cryptomonedas.map(cripto => (
                    <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} />
                ))}
            </Picker>

            <TouchableHighlight
                style={styles.btnCotizar}
                onPress={() => cotizarPrecio()}
            >
                <Text style={styles.txtCotizar}>
                    Cotizar
                </Text>
            </TouchableHighlight>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    label: {
        fontSize: 22,
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        marginVertical: 20
    },
    btnCotizar: {
        backgroundColor: '#5E49E2',
        marginTop: 20,
        padding: 10
    },
    txtCotizar: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
})
