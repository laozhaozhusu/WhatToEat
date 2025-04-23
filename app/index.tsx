import { Link, Stack } from 'expo-router';
import { Alert, Button, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { fetchEatWhat } from '@/api/fetchEatWhat';


export default function index() {
    const [loading, setLoading] = useState(false)
    const [content, setContent] = useState('')
    const onPress = async () => {
        setLoading(true)
        fetchEatWhat().then(res => {
            setContent(res)
        }).catch(e => {
            console.log(e);
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <>
            <Stack.Screen options={{ title: '今天吃什么？' }} />
            <ThemedView style={styles.title}>
                <ThemedText type="title">今天吃什么？</ThemedText>
            </ThemedView>
            <ThemedView style={styles.container}>
                <Link href="/">
                    <ThemedText type="link">{content}</ThemedText>
                </Link>
            </ThemedView>
            <ThemedView style={styles.button}>
                <Button
                    disabled={loading}
                    onPress={onPress}
                    title='今天吃什么'>
                </Button>
            </ThemedView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 20,
    },
    button: {
        // marginTop: 15,
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    }
});
