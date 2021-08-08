import React, { useState } from 'react';
import Wrapper from "../../hoc/Wrapper/Wrapper";
import logo from '../../img/logo.png'
import classes from './Header.module.css'
import HeaderNavItem from './HeaderNav/HeaderNavItem';

export default function Header (props) {

    const [headerNav,setHeader] =useState([
        {id:1,isActive:true,title:'Home',num:0},
        {id:2,isActive:false,title:'Explore',num:0},
        {id:3,isActive:false,title:'Classes',num:0},
        {id:4,isActive:false,title:'About Us'},
        {id:5,isActive:false,title:'Privacy'},
        {id:6,isActive:false,title:'Services'},
      ])
    function toggleActive(id){
        setHeader(
            headerNav.map(item => {
                if(item.isActive){
                    item.isActive=false
                }
                if(item.id===id){
                    item.isActive=!item.isActive
                }
                return item
            })
        )
    }
    return(
            <Wrapper>
                <div className={classes.Header}>
                    <img src={logo} alt="" />   
                    <ul>
                        {
                            headerNav.map((item, index) => {
                                return(
                                    <HeaderNavItem 
                                    title={item.title} 
                                    key={index} 
                                    isActive={item.isActive}
                                    onClickActive={()=>toggleActive(item.id)}
                                />
                                )
                            })
                        }
                    </ul>
                </div>
            </Wrapper>
    )
}