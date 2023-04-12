import React from 'react'
import classes from './Home.module.css'
import { useSelector } from 'react-redux'
import Categorybar from '../../component/category/Categorybar'
import Banercarousel from '../../component/banner/Banercarousel'
import Productcarousel from '../../component/product/Productcarousel'

const Home = () => {
    const { CategoryBarData, CarouselData, Electronics } = useSelector(state => state.image);
    return (
        <div className={classes.home}>
            <div className={classes.homecontainer}>
                <div className={classes.homecarousel}>
                    {
                        CarouselData.map((item) => {
                            return (
                                <Banercarousel key={item.id}
                                    img={item.Imgsrc} />
                            )
                        })
                    }
                </div>
            </div>
            <div className={classes.categorycontainer}>
                <div className={classes.categorybar}>
                    {
                        CategoryBarData.map((item, index) => {
                            return (
                                <Categorybar key={index}
                                    imagesrc={item.imageSrc}
                                    categoryname={item.category}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className={classes.productcantainer}>
                <div className={classes.electronic}>
                    {
                        Electronics.map((item, index) => {
                            return (
                                <Productcarousel key={index}
                                    // imgsrc={item.ImgSrc}
                                    // categoryname={item.CategoryName}
                                    // brand={item.Brand}
                                    // price={item.price}
                                    id={index}
                                    all={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
