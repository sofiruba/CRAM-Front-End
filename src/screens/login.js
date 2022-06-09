import React from 'react'
import { Image, View, Text, Form , Input} from 'react-native'
import tw from 'tailwind-react-native-classnames'

export default function Login () {
    return (
        <View style={[tw`min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`]}>
            <View style={[tw`max-w-md w-full space-y-8`]}>
                <View>
                    <Image
                        style={[tw`mx-auto h-12 w-auto`]}
                        source={{ uri: "https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" }}
                    />
                </View>
                <View>
                    <Text style={[tw`mt-6 text-center text-3xl font-extrabold text-gray-900`]}>Buenas</Text>
                </View>
                
               
            </View>
            <Form style={[tw`mt-8 space-y-6`]}>
                <Input/>
                <View style={[tw`rounded-md shadow-sm -space-y-px`]}>
                    <View>
                        
                    </View>
                </View>
            </Form>
        </View>
    );
}
