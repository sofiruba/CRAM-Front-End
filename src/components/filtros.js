import React from 'react';
import { View, Text, Stylesheet } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';

// https://codepen.io/lbebber/pen/pvwZJp

export default function Filtros({ navigation }) {
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
  menuOpen: {
    display: "none",
  },
  hamburger: {
    width: "25px",
    height: "3px",
    background: "white",
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: "-$width/2",
    marginTop: "-$height/2",
    transition: "transform 200ms",
  },
  hamburger1: {
    transform: "translate3d(0,-$hamburger-spacing,0)",
  },
  hamburger2: {
    transform: "translate3d(0,0,0)",
  },
  hamburger3: {
    transform: "translate3d(0,$hamburger-spacing,0)",
  },
  /* menuOpen:{
    hamburger1: {
      transform:"translate3d(0,0,0) rotate(45deg)", 
    },
    hamburger2: {
      transform:"translate3d(0,0,0) scale(0.1,1)",
    },
    hamburger3: {
      transform:"translate3d(0,0,0) rotate(-45deg)",
    },
  }, */
  menu: {
    /*@extend %goo,*/
    width: "650px",
    height: "150px",
    position: "absolute",
    left: "50%",
    marginLeft: "-80px",
    paddingTop: "20px",
    paddingLeft: "80px",
    boxSizing: "border-box",
    fontSize: "20px",
    textAlign: "left",
  },
  /* menuItem: { //porque queda vacia
    /* &:hover{ xq no pasas por encima
      background:white,
      color:$fg,
    } */
  /* @for $i from 1 through $menu-items{
    &:nth-child(#{$i+2}){
      transitionDuration:"180ms",
    }
  }
}, */

  menuOpenButton: {
    /* extend %ball; */
    zindex: 2, //Verificar en la guia de estilos de react native como utilizar z index
    /* transition-timing-function:cubic-bezier(0.175, 0.885, 0.320, 1.275);
    transition-duration:400;    clases de movimiento, es unicamnete para que quede mas lindo
    transform:scale(1.1,1.1) translate3d(0,0,0); */
  }
  /* menu-open:checked+.menu-open-button{
    transition-timing-function:linear;
    transition-duration:200ms;
    transform:scale(0.8,0.8) translate3d(0,0,0);
  } */

  /* menu-open:checked~.menu-item{ //son todos efectos que nos van a dificultar mucho mas el codigo 
    transitionTimingFunction:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    @for $i from 1 through $menu-items{
  
      nth-child(#{$i+2}){
        transitionDuration:"90ms+(100ms*$i)",
        transform:"translate3d(110px*$i,0,0)",
      }
    }
  } */

})
