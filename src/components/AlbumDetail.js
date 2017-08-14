import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from  './CardSection';
import Button from './Button';

const AlbumDetail = ({ albumProp}) => {

    const { title, artist, thumbnail_image,image,url} = albumProp;
    const {headerContentStyle,imageStyles,thumbnailContainerStyle,
        headerTextStyle,albumArtContainerStyle,buttonTextStyling} = Styles; 
    return(
        <Card>
            <CardSection>
                <View style = {thumbnailContainerStyle} >
                <Image style = {imageStyles}
                source = {{uri : thumbnail_image}}/>
                </View>
                <View style = {headerContentStyle}>
                    <Text style = {headerTextStyle} > {title} </Text>
                    <Text> {artist} </Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style = {albumArtContainerStyle}
                source = {{uri : image}} />
            </CardSection>

            <CardSection>
                <Button onPress = {() => Linking.openURL(url) }>
                   <Text style = {buttonTextStyling}> Buy </Text>
                </Button>
            </CardSection>
             
        </Card>
    );

};

const Styles = {
    headerContentStyle : {
    flexDirection : 'column',
    justifyContent : 'space-around'    
    },

    imageStyles : {
        height : 50,
        width : 50
    },

    thumbnailContainerStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        marginLeft : 10,
        marginRight : 10
    },

    headerTextStyle : {
        fontSize : 18
    
    },
    albumArtContainerStyle : {
        height : 300,
        //width : null,
        flex : 1
    },
    buttonTextStyling : {
        alignSelf : 'center',
        color : '#ECEFF1',
        fontSize : 16,
        fontWeight : '600',
        padding : 10
    }
};



export default AlbumDetail;