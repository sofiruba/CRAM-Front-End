import React from 'react';
import {View, Text, Stylesheet} from 'react-native'
import { useTailwind } from 'tailwind-rn';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';

// https://codepen.io/lbebber/pen/pvwZJp

export default function Filtros({navigation}) {
    return (
        <View class="menu">
            <Textinput type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
            <label class="menu-open-button" for="menu-open">
                <Text class="hamburger hamburger-1"></Text>
                <Text class="hamburger hamburger-2"></Text>
                <Text class="hamburger hamburger-3"></Text>
            </label>

            <Text onPress={navigation.navigate('Register')} style={styles.menuitem}> </Text>
            <Text onPress={navigation.navigate('Register')} style={styles.menuitem}>  </Text>
            <Text onPress={navigation.navigate('Register')} style={styles.menuitem}>  </Text>
            <Text onPress={navigation.navigate('Register')} style={styles.menuitem}>  </Text>


        </View>
    )
}

const styles = StyleSheet.create({
      a: {
        color:inherit,
      },
      Texto: {
        margin:"0",
        marginBottom:"10px",
        margintop:"10px",
      },
      h1: {
        fontSize:"3em",
      },
      goo: {
        filter:"url('#shadowed-goo')",
        // debug 
        //background:rgba(255,0,0,0.2);
      },
      ball: {
        background:"$fg",
        borderRadius:"100%",
        width:"80px",
        height:"80px",
        marginLeft:"-40px",
        position:absolute,
        top:"20px",
        color:"white",
        textAlign:"center",
        lineHeight:"80px",
        transform:"translate3d(0,0,0)",
        transition:"transform ease-out 200ms",
      },
      menuOpen: {
        display:"none",
      },
      menuItem: {
        /*@extend %ball,*/
      },
      hamburger: {
        width:"25px",
        height:"3px",
        width:"$width",
        height:"$height",
        background:"white",
        display:"block",
        position:"absolute",
        top:"50%",
        left:"50%",
        marginLeft:"-$width/2",
        marginTop:"-$height/2",
        transition:"transform 200ms",
      },
      hamburgerSpacing:"8px",
      hamburger1: {
        transform:"translate3d(0,-$hamburger-spacing,0)",
      },
      hamburger2: {
        transform:"translate3d(0,0,0)",
      },
      hamburger3: {
        transform:"translate3d(0,$hamburger-spacing,0)",
      },
      .menu-open:checked+.menu-open-button{
        hamburger1: {
          transform:"translate3d(0,0,0) rotate(45deg)", 
        },
        hamburger2: {
          transform:"translate3d(0,0,0) scale(0.1,1)",
        },
        hamburger3: {
          transform:"translate3d(0,0,0) rotate(-45deg)",
        },
      },
      menu: {
        /*@extend %goo,*/
        width:"650px",
        height:"150px",
        position:"absolute",
        left:"50%",
        marginLeft:"-80px",
        paddingTop:"20px",
        paddingLeft:"80px",
        width:"$width",
        height:"$height",
        boxSizing:"border-box",
        fontSize:"20px",
        textAlign:"left",
      },
      
      
      menuItem: {
        &:hover{
          background:white;
          color:$fg;
        }
        @for $i from 1 through $menu-items{
          &:nth-child(#{$i+2}){
            transitionDuration:"180ms",
          }
        }
      },
      
      .menu-open-button{
        @extend %ball;
        z-index:2;
        transition-timing-function:cubic-bezier(0.175, 0.885, 0.320, 1.275);
        transition-duration:400ms;
        transform:scale(1.1,1.1) translate3d(0,0,0);
        cursor:pointer;
      },
      .menu-open-button:hover{
        transform:"scale(1.2,1.2) translate3d(0,0,0)"
      },
      .menu-open:checked+.menu-open-button{
        transition-timing-function:linear;
        transition-duration:200ms;
        transform:scale(0.8,0.8) translate3d(0,0,0);
      },
      
      .menu-open:checked~.menu-item{
        transitionTimingFunction:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        @for $i from 1 through $menu-items{
      
          &:nth-child(#{$i+2}){
            transitionDuration:"90ms+(100ms*$i)",
            transform:"translate3d(110px*$i,0,0)",
          }
        }
      }
      
})