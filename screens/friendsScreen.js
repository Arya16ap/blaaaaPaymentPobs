import React from 'react';
import{Text,View,StyleSheet,TouchableOpacity,TextInput,Modal,KeyboardAvoidingView,ScrollView}from'react-native';
import PaymentGateway from 'react-native-payment-gateway';


export default class HomeScreen extends React.Component{
    pay = async()=>{
        const optionConect = {
            clientKey: "your client key",
            urlMerchant: "https://www.paypal.com/in/home/"
        }
 
        const transRequest = {
            transactionId: "0001",
            totalAmount: 1
        }
 
        const itemDetails = [
            {id: "001", price: 1000, qty: 4, name: "peanuts"}
        ];
 
        const creditCardOptions = {
            saveCard: false,
            saveToken: false,
            paymentMode: "Normal",
            secure: false
        };
 
        const userDetail = {
            fullName: "jhon",
            email: "jhon@payment.com",
            phoneNumber: "0850000000",
            userId: "U01",
            address: "street coffee",
            city: "yogyakarta",
            country: "IDN",
            zipCode: "59382"
        };
 
        const optionColorTheme = {
            primary: '#c51f1f',
            primaryDark: '#1a4794',
            secondary: '#1fce38'
        }
 
        const optionFont = {
            defaultText: "open_sans_regular.ttf",
            semiBoldText: "open_sans_semibold.ttf",
            boldText: "open_sans_bold.ttf"
        }
 
        const callback = (res) => {
            console.log(res)
        };
 
        PaymentGateway.checkOut(
            optionConect,
            transRequest,
            itemDetails,
            creditCardOptions,
            userDetail,
            optionColorTheme,
            optionFont,
            callback
        );
    }
    render(){
        return(
            <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>this.pay()}>
                    <Text>payyyy other wise u aint have ittt...</Text>
                </TouchableOpacity>
            </View>
        )
    }

}