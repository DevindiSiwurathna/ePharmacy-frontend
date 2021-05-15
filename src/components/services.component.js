import React,{Component} from 'react';
import { Link } from "react-router-dom";
import Product from "./services/Product";
import Title from './services/Title';
//import { storeProducts } from "./Data/dataFirstaid";
import styled from "styled-components";
import {ProductConsumer} from '../context';
import './css/subpages.css';
import {useState} from 'react';

const FIRSTAID = 'First Aid';
const MOTHER_AND_BABY = 'Mother And Baby';
const SKIN_CARE = 'Skin Care';
const BODY_CARE = 'Body Care';
const HAND_AND_FOOT_CARE = 'Hand And Foot Care';
const NOURISHMENTS = 'Nourishments';
const DIET_AND_NUT5RITION = 'Diet & Nutrition';

export default function Products ({addToCart}){
    const [products] = useState([
        {
            id:1,
            title:"Isopropyl Alcohol",
            img:"img/surgical.jpg",
            company:"Raman & Weil",
            info:"Surgical Spirit - 60ml",
            price:100,
            category: FIRSTAID,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:2,
            title:"Axe Oil",
            img:"img/axeoil.jpg",
            company:"Axe Brand",
            info:"60ml",
            category: FIRSTAID,
            price:40,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:3,
            title:"Medical Gauze",
            img:"img/medicalGauze.jpg",
            company:"Sterile",
            info:"150g",
            category: FIRSTAID,
            price:150,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:4,
            title:"Betadine Solution",
            img:"img/betadine.jpg",
            company:" Maxdine",
            info:"60ml",
            category: FIRSTAID,
            price:100,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:5,
            title:"Detol Plaster",
            img:"img/plaster.jpg",
            company:"Detol",
            info:"10 pieces",
            category: FIRSTAID,
            price:8,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:6,
            title:"Plaster Roll",
            img:"img/plasterroll.jpg",
            company:"China Supplier - Diamond Member Audited Suppliers Wuhan Huawei Technology Co., Ltd",
            info:"80g",
            category: FIRSTAID,
            price:100,
            inCart:false,
            count:0,
            total:0
        },
        
        {
            id:7,
            title:"Cotton Wool",
            img:"img/cottonwool.jpg",
            company:"China Supplier - Gold Member Audited SuppliersYiwu B&D Textile Co., Ltd.",
            info:"400g",
            category: FIRSTAID,
            price:40,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:8,
            title:"Musclegard Gel",
            img:"img/musclegardGel.jpg",
            company:"LINK",
            info:"30g",
            category: FIRSTAID,
            price:100,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:9,
            title:"Jonac Gel",
            img:"img/jonac.jpg",
            company:"JONAC",
            info:"30g",
            category: FIRSTAID,
            price:100,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:10,
            title:"Cerelac Beras Rice",
            img:"img/cerelacberas.jpg",
            company:"NESTLE",
            info:"400g",
            category: MOTHER_AND_BABY,
            price:625,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:11,
            title:"Cerelac Wheat Apple",
            img:"img/cerelacwheatapple.jpg",
            company:"NESTLE",
            info:"400g",
            category: MOTHER_AND_BABY,
            price:625,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:12,
            title:"NANGROW 2-5 Years",
            img:"img/nangrow.jpg",
            company:"NESTLE",
            info:"400g",
            category: MOTHER_AND_BABY,
            price:560,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:13,
            title:"PediaPro 1-2 Years",
            img:"img/pediapro1.jpg",
            company:"Anchor",
            info:"400g",
            category: MOTHER_AND_BABY,
            price:550,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:14,
            title:"PediaPro 2-5 Years",
            img:"img/pediapro2.jpg",
            company:"Anchor",
            info:"400g",
            category: MOTHER_AND_BABY,
            price:550,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:15,
            title:"Pears Baby Soap",
            img:"img/pears.jpg",
            company:"Uniliever",
            info:"100g x 5",
            price:200,
            category: MOTHER_AND_BABY,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:16,
            title:"NIVEA Body Milk",
            img:"img/niveabodymilk.jpg",
            company:"NIVEA",
            info:"200ml",
            category: SKIN_CARE,
            price:200,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:17,
            title:"NIVEA Smooth Milk",
            img:"img/niveasmoothmilk.jpg",
            company:"NIVEA",
            info:"400ml",
            category: SKIN_CARE,
            price:550,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:18,
            title:"NIVEA Extra Whitening",
            img:"img/niveawhitening.jpg",
            company:"NIVEA",
            info:"400ml",
            category: SKIN_CARE,
            price:560,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:19,
            title:"Vaseline Cocoa Radiant",
            img:"img/VaselineCocoa.jpg",
            company:"UNILIEVER",
            info:"400ml",
            category: SKIN_CARE,
            price:450,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:20,
            title:"POND'S Triple Vitamin",
            img:"img/ponds.jpg",
            company:"UNILIEVER",
            info:"200ml",
            category: SKIN_CARE,
            price:250,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:21,
            title:"Eau De Cologne",
            img:"img/enchanteur.jpg",
            company:"Enchanteur",
            info:"200ml",
            category: BODY_CARE,
            price:380,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:22,
            title:"Dream Flower",
            img:"img/powder.jpg",
            company:"Ponds",
            info:"100g",
            category: BODY_CARE,
            price:200,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:23,
            title:"Hand Sinitizin Gel",
            img:"img/sanitizer.jpg",
            company:"Safeguard",
            info:"200ml",
            category: HAND_AND_FOOT_CARE,
            price:675,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:24,
            title:"Nature Secrets Foot Care Cream",
            img:"img/footcream.jpg",
            company:"Nature Secrets",
            info:"Aloe Miracle - 80ml",
            category: HAND_AND_FOOT_CARE,
            price:398,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:25,
            title:"Kumarika Hair Oil",
            img:"img/kumarika.jpg",
            company:"Hemas",
            info:"100ml",
            category: NOURISHMENTS,
            price:150,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:26,
            title:"Link Kesha",
            img:"img/kesha.jpg",
            company:"Link",
            info:"Ayurveda Hair Oil - 100ml",
            category: NOURISHMENTS,
            price:175,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:27,
            title:"Emami Hair Oil",
            img:"img/emami.jpg",
            company:"Emami",
            info:"7 Oils in One - 100ml",
            category: NOURISHMENTS,
            price:200,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:28,
            title:" Sustagen Chocolate Flavor",
            img:"img/sustagen.jpg",
            company:"Nestle",
            info:"Chocolate Flavor - 1kg",
            category: DIET_AND_NUT5RITION,
            price:3995,
            inCart:false,
            count:0,
            total:0
        },
        {
            id:29,
            title:" Sustagen Vanila Flavor",
            img:"img/sustagenvanila.jpg",
            company:"Nestle",
            info:"Vanila Flavor ",
            category: DIET_AND_NUT5RITION,
            price:1900,
            inCart:false,
            count:0,
            total:0
        },
    ]);
    /*state = {
        products: storeProducts
      };*/
    //render(){

    const[category, setCategory]  = useState(FIRSTAID)
    
    const getProductsInCategory = () => {
        return products.filter(product => product.category === category)
    }

        return(
            <React.Fragment>                
                              
                <div className="py-5">
                <Title name="our" title="products"/>
                    <div className="container">
                        
                        Select a Category 
                        <select onChange= {(e) => setCategory(e.target.value)}>
                                <option value = {FIRSTAID}>{FIRSTAID}</option>
                                <option value = {MOTHER_AND_BABY}>{MOTHER_AND_BABY}</option>
                                <option value = {SKIN_CARE}>{SKIN_CARE}</option>
                                <option value = {BODY_CARE}>{BODY_CARE}</option>
                                <option value = {HAND_AND_FOOT_CARE}>{HAND_AND_FOOT_CARE}</option>
                                <option value = {NOURISHMENTS}>{NOURISHMENTS}</option>
                                <option value = {DIET_AND_NUT5RITION}>{DIET_AND_NUT5RITION}</option>
                            </select>                       
                        <div className="row">
                         <ProductConsumer>
                            {value=>{
                              return getProductsInCategory().map( product => {
                                 return <Product key={product.id} product={product}/>; 
                              })
                            }}
                         </ProductConsumer>
                        </div>
                        <Link to= "/ProductList" > <button type="submit" className="btn btn-dark btn-lg btn-block">Add Your Products Here</button></Link>
                    </div>
                </div>
            </React.Fragment>
        );
    //}
}

const ProductWrapper = styled.section``;
