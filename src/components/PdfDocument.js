import React from 'react'
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
  } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff"
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
})

function PdfDocument() {
    return (
        <Document>
            <Page style={styles.page}>
                <View>
                    <Text>PDF de prueba</Text>
                </View>
            </Page>
            
        </Document>
    )
}

export default PdfDocument
