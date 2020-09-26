import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios'

import Header from './components/Header'
import Form from './components/Form'
import Cotizacion from './components/Cotizacion'

const App = () => {

    const [moneda, setMoneda] = useState('')
    const [cryptomoneda, setCryptomoneda] = useState('')
    const [cosnsultarAPI, setConsultarAPI] = useState(false)
    const [resultado, setResultado] = useState({})
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        const cotizarCriptomoneda = async () => {
            if (cosnsultarAPI) {
                // consultar API para obtener la cotizacion
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}`
                const result = await axios.get(url)

                setCargando(true)

                setTimeout(() => {
                    // hide spinner and show result
                    setResultado(result.data.DISPLAY[cryptomoneda][moneda])
                    setConsultarAPI(false)
                    setCargando(false)
                }, 3000)
            }
        }
        cotizarCriptomoneda()
    }, [cosnsultarAPI])

    // show spinner
    const component = cargando ? <ActivityIndicator size='large' color='#5E49E2' /> : <Cotizacion resultado={resultado} />

    return (
        <>
            <ScrollView>
                <Header />
                <Image
                    style={styles.imagen}
                    source={require('./assets/img/cryptomonedas.png')}
                />
                <View style={styles.container}>
                    <Form
                        moneda={moneda}
                        cryptomoneda={cryptomoneda}
                        setMoneda={setMoneda}
                        setCryptomoneda={setCryptomoneda}
                        setConsultarAPI={setConsultarAPI}
                    />
                </View>
                <View style={{ marginTop: 40 }}>
                    {component}
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    imagen: {
        width: '100%',
        height: 150,
        marginHorizontal: '2.5%'
    },
    container: {
        marginHorizontal: '2.5%'
    }
});

export default App;
