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

import calendarImg from '../image/calendar.png'


const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        padding: 50,
    },
    docTitle: {
        fontSize: 23,
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center"
    },
    image: {
        height: 15,
        width: 15
    },
    days: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 2
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
    },
    recipeText: {
        fontSize: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 10,
    },
    line: {
        fontSize: 10,
        marginBottom: 5
    }
})

function PdfDocument(props) {

    return (
        <Document>
            <Page style={styles.page}>
                <View>
                    <Text style={styles.docTitle}>MY VEGGIE WEEK - MEAL PLAN</Text>
                    <Text style={styles.days}><Image style={styles.image} src={calendarImg}/> Monday</Text>
                    <Text style={styles.line}>__________________________________________________________________________________________</Text>
                </View>
                {props.data ? props.data.map((plan, index) => {
                    if ( plan.day === 'monday') {
                        return (
                            <View key={index} >
                                    <Text style={styles.recipeTitle}>{plan.name}</Text>

                                    <Text style={styles.recipeSubtitles}>INGREDIENTS:</Text>
                                    {
                                        plan.ingredients.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }

                                    <Text style={styles.recipeSubtitles}>INSTRUCTIONS:</Text>
                                    {
                                        plan.instructions.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }

                            </View>
                        );
                    }
                    })
                : ''}

                <View>
                    <Text style={styles.days}>
                        <Image style={styles.image} src={calendarImg}/> Tuesday</Text>
                        <Text style={styles.line}>__________________________________________________________________________________________</Text>
                    {props.data ? props.data.map((plan, index) => {
                    if ( plan.day === 'tuesday') {
                        return (
                            <View key={index} >
                                    <Text style={styles.recipeTitle}>{plan.name}</Text>

                                    <Text style={styles.recipeSubtitles}>INGREDIENTS:</Text>
                                    {
                                        plan.ingredients.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }

                                    <Text style={styles.recipeSubtitles}>INSTRUCTIONS:</Text>
                                    {
                                        plan.instructions.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }
                            </View>
                        );
                    }
                    })
                : ''}
                </View>

                <View>
                    <Text style={styles.days}>
                        <Image style={styles.image} src={calendarImg}/> Wednesday</Text>
                        <Text style={styles.line}>__________________________________________________________________________________________</Text>
                    {props.data ? props.data.map((plan, index) => {
                    if ( plan.day === 'wednesday') {
                        return (
                            <View key={index} >
                                    <Text style={styles.recipeTitle}>{plan.name}</Text>

                                    <Text style={styles.recipeSubtitles}>INGREDIENTS:</Text>
                                    {
                                        plan.ingredients.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }

                                    <Text style={styles.recipeSubtitles}>INSTRUCTIONS:</Text>
                                    {
                                        plan.instructions.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }
                            </View>
                        );
                    }
                    })
                : ''}
                </View>

                <View>
                    <Text style={styles.days}>
                        <Image style={styles.image} src={calendarImg}/> Thursday</Text>
                        <Text style={styles.line}>__________________________________________________________________________________________</Text>
                    {props.data ? props.data.map((plan, index) => {
                    if ( plan.day === 'thursday') {
                        return (
                            <View key={index} >
                                    <Text style={styles.recipeTitle}>{plan.name}</Text>

                                    <Text style={styles.recipeSubtitles}>INGREDIENTS:</Text>
                                    {
                                        plan.ingredients.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }

                                    <Text style={styles.recipeSubtitles}>INSTRUCTIONS:</Text>
                                    {
                                        plan.instructions.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }
                            </View>
                        );
                    }
                    })
                : ''}
                </View>

                <View>
                    <Text style={styles.days}>
                        <Image style={styles.image} src={calendarImg}/> Friday</Text>
                        <Text style={styles.line}>__________________________________________________________________________________________</Text>
                    {props.data ? props.data.map((plan, index) => {
                    if ( plan.day === 'friday') {
                        return (
                            <View key={index} >
                                    <Text style={styles.recipeTitle}>{plan.name}</Text>

                                    <Text style={styles.recipeSubtitles}>INGREDIENTS:</Text>
                                    {
                                        plan.ingredients.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }

                                    <Text style={styles.recipeSubtitles}>INSTRUCTIONS:</Text>
                                    {
                                        plan.instructions.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }
                            </View>
                        );
                    }
                    })
                : ''}
                </View>

                <View>
                    <Text style={styles.days}>
                        <Image style={styles.image} src={calendarImg}/> Saturday</Text>
                        <Text style={styles.line}>__________________________________________________________________________________________</Text>
                    {props.data ? props.data.map((plan, index) => {
                    if ( plan.day === 'saturday') {
                        return (
                            <View key={index} >
                                    <Text style={styles.recipeTitle}>{plan.name}</Text>

                                    <Text style={styles.recipeSubtitles}>INGREDIENTS:</Text>
                                    {
                                        plan.ingredients.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }

                                    <Text style={styles.recipeSubtitles}>INSTRUCTIONS:</Text>
                                    {
                                        plan.instructions.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }
                            </View>
                        );
                    }
                    })
                : ''}
                </View>

                <View>
                    <Text style={styles.days}>
                        <Image style={styles.image} src={calendarImg}/> Sunday</Text>
                        <Text style={styles.line}>__________________________________________________________________________________________</Text>
                    {props.data ? props.data.map((plan, index) => {
                    if ( plan.day === 'sunday') {
                        return (
                            <View key={index} >
                                    <Text style={styles.recipeTitle}>{plan.name}</Text>

                                    <Text style={styles.recipeSubtitles}>INGREDIENTS:</Text>
                                    {
                                        plan.ingredients.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
                                    }

                                    <Text style={styles.recipeSubtitles}>INSTRUCTIONS:</Text>
                                    {
                                        plan.instructions.map(elm => <Text style={styles.recipeText}>• {elm}</Text>)
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