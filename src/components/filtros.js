import React from 'react';

// https://codepen.io/lbebber/pen/pvwZJp

export default function Filtros() {
    return (
        <View class="menu">
            <Textinput type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
            <label class="menu-open-button" for="menu-open">
                <span class="hamburger hamburger-1"></span>
                <span class="hamburger hamburger-2"></span>
                <span class="hamburger hamburger-3"></span>
            </label>

            <Text href="#" class="menu-item"> <i class="fa fa-bar-chart"></i> </Text>
            <Text href="#" class="menu-item"> <i class="fa fa-plus"></i> </Text>
            <Text href="#" class="menu-item"> <i class="fa fa-heart"></i> </Text>
            <Text href="#" class="menu-item"> <i class="fa fa-envelope"></i> </Text>


        </View>
    )
}