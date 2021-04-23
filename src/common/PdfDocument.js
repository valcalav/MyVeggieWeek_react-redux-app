import React from 'react'
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image,
    Font
  } from "@react-pdf/renderer";

import foodPlate from '../image/foodPlate.png'
import logo from '../image/myVeggieWeek.png'


const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        padding: 50,
    },
    docTitle: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center",
    },
    image: {
        width: 30
    },
    logo: {
        width: 270,
        margin: 'auto'
    },
    days: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 4,
        padding: 4,
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: '#cccccc'
    },
    recipeTitle: {
        fontSize: 16,
        fontWeight: "bolder",
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    recipeSubtitles: {
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5
    },
    recipeText: {
        fontSize: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 10,
    }
})

function PdfDocument(props) {

    return (
        <Document>
            <Page style={styles.page}>
                <View>
                    <Image style={styles.logo} src={logo}/>
                    <Text style={styles.docTitle}>Meal Plan</Text>
                    <Text style={styles.days}><Image style={styles.image} src={foodPlate}/> Monday</Text>
                    
                </View>
                {props.data ? props.data.map((meal, index) => {
                    if ( meal.day === 'monday') {
                        return (
                            <View key={index} >
                                    <Text style={styles.recipeTitle}>{meal.name}</Text>

                                    <Text style={styles.recipeSubtitles}>INGREDIENTS:</Text>
                                    {
                                        meal.ingredients.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }

                                    <Text style={styles.recipeSubtitles}>INSTRUCTIONS:</Text>
                                    {
                                        meal.instructions.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }

                            </View>
                        );
                    }
                    })
                : ''}

                <View>
                    <Text style={styles.days}>
                        <Image style={styles.image} src={foodPlate}/> Tuesday</Text>

                    {props.data ? props.data.map((meal, index) => {
                    if ( meal.day === 'tuesday') {
                        return (
                            <View key={index} >
                                    <Text style={styles.recipeTitle}>{meal.name}</Text>
                                    

                                    <Text style={styles.recipeSubtitles}>INGREDIENTS:</Text>
                                    {
                                        meal.ingredients.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }

                                    <Text style={styles.recipeSubtitles}>INSTRUCTIONS:</Text>
                                    {
                                        meal.instructions.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }
                            </View>
                        );
                    }
                    })
                : ''}
                </View>

                <View>
                    <Text style={styles.days}>
                        <Image style={styles.image} src={foodPlate}/> Wednesday</Text>

                    {props.data ? props.data.map((meal, index) => {
                    if ( meal.day === 'wednesday') {
                        return (
                            <View key={index} >
                                    <Text style={styles.recipeTitle}>{meal.name}</Text>

                                    <Text style={styles.recipeSubtitles}>INGREDIENTS:</Text>
                                    {
                                        meal.ingredients.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }

                                    <Text style={styles.recipeSubtitles}>INSTRUCTIONS:</Text>
                                    {
                                        meal.instructions.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }
                            </View>
                        );
                    }
                    })
                : ''}
                </View>

                <View>
                    <Text style={styles.days}>
                        <Image style={styles.image} src={foodPlate}/> Thursday</Text>

                    {props.data ? props.data.map((meal, index) => {
                    if ( meal.day === 'thursday') {
                        return (
                            <View key={index} >
                                    <Text style={styles.recipeTitle}>{meal.name}</Text>

                                    <Text style={styles.recipeSubtitles}>INGREDIENTS:</Text>
                                    {
                                        meal.ingredients.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }

                                    <Text style={styles.recipeSubtitles}>INSTRUCTIONS:</Text>
                                    {
                                        meal.instructions.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }
                            </View>
                        );
                    }
                    })
                : ''}
                </View>

                <View>
                    <Text style={styles.days}>
                        <Image style={styles.image} src={foodPlate}/> Friday</Text>
                        
                    {props.data ? props.data.map((meal, index) => {
                    if ( meal.day === 'friday') {
                        return (
                            <View key={index} >
                                    <Text style={styles.recipeTitle}>{meal.name}</Text>

                                    <Text style={styles.recipeSubtitles}>INGREDIENTS:</Text>
                                    {
                                        meal.ingredients.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }

                                    <Text style={styles.recipeSubtitles}>INSTRUCTIONS:</Text>
                                    {
                                        meal.instructions.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }
                            </View>
                        );
                    }
                    })
                : ''}
                </View>

                <View>
                    <Text style={styles.days}>
                        <Image style={styles.image} src={foodPlate}/> Saturday</Text>
                        
                    {props.data ? props.data.map((meal, index) => {
                    if ( meal.day === 'saturday') {
                        return (
                            <View key={index} >
                                    <Text style={styles.recipeTitle}>{meal.name}</Text>

                                    <Text style={styles.recipeSubtitles}>INGREDIENTS:</Text>
                                    {
                                        meal.ingredients.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }

                                    <Text style={styles.recipeSubtitles}>INSTRUCTIONS:</Text>
                                    {
                                        meal.instructions.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }
                            </View>
                        );
                    }
                    })
                : ''}
                </View>

                <View>
                    <Text style={styles.days}>
                        <Image style={styles.image} src={foodPlate}/> Sunday</Text>
                        
                    {props.data ? props.data.map((meal, index) => {
                    if ( meal.day === 'sunday') {
                        return (
                            <View key={index} >
                                    <Text style={styles.recipeTitle}>{meal.name}</Text>

                                    <Text style={styles.recipeSubtitles}>INGREDIENTS:</Text>
                                    {
                                        meal.ingredients.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }

                                    <Text style={styles.recipeSubtitles}>INSTRUCTIONS:</Text>
                                    {
                                        meal.instructions.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }
                            </View>
                        );
                    }
                    })
                : ''}
                </View>

            </Page>
        </Document>
    )
}

export default PdfDocument