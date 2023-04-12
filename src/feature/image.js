import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CategoryBarData: [
        {
            imageSrc:
                "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/178cf5a874cd697a.png?q=100",
            category: "Top Offers",
        },
        {
            imageSrc:
                "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/e2268d56d09df684.png?q=100",
            category: "Mobiles & Tablets",
        },
        {
            imageSrc:
                "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/6e3e1efa83bc56c3.png?q=100",
            category: "Electronics",
        },
        {
            imageSrc:
                "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/b3e1225e6bda1c9e.png?q=100",
            category: "TVs & Appliances",
        },
        {
            imageSrc:
                "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5f09b2d254acb48a.png?q=100",
            category: "Beauty",
        },
        {
            imageSrc:
                "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5972d5da375c81c7.png?q=100",
            category: "Home & Furniture",
        },
        {
            imageSrc:
                "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/1cfc2d91f717510a.png?q=100",
            category: "Flights",
        },
        {
            imageSrc:
                "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d154c0b4d536c1cf.png?q=100",
            category: "Grocery",
        },
    ],
    CarouselData: [
        {
            id: 1,
            Imgsrc:
                "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/61c104839324e184.jpg?q=50",
        },
        {
            id: 2,
            Imgsrc:
                "https://androidjunglee.com/wp-content/uploads/2015/06/big-app-shoppings-android-phones.jpg",
        },
        {
            id: 3,
            Imgsrc:
                "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/13d4b7ac61ff30ee.jpg?q=50",
        },
        {
            id: 4,
            Imgsrc:
                "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/61c104839324e184.jpg?q=50",
        },
    ],
    Electronics: [
        {
            ImgSrc:
                "https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
            CategoryName: "Top Mirrorless Cameras",
            Brand: "Canon,Sony",
            id: 1,
            qu: 1,
            price: 50000
        },
        {
            ImgSrc:
                "https://rukminim1.flixcart.com/image/200/200/l1pc3gw0/power-bank/e/u/y/-original-imagd7dzan7sakt2.jpeg?q=70",
            CategoryName: "Premium PowerBanks",
            Brand: "Mi & Realme",
            id: 2,
            qu: 1,
            price: 70000
        },
        {
            ImgSrc:
                "https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
            CategoryName: "Printers",
            Brand: "HP",
            id: 3,
            qu: 1,
            price: 10000
        },
        {
            ImgSrc:
                "https://rukminim1.flixcart.com/image/200/200/ks7tuvk0/gimbal/v/z/7/0-43-om4-se-dji-original-imag5u6rgsdh6k4g.jpeg?q=70",
            CategoryName: "Top Deals of Camera Accessories",
            Brand: "Tripods,Gimbals,Bags",
            id: 4,
            qu: 1,
            price: 90000
        },
        {
            ImgSrc:
                "https://rukminim1.flixcart.com/image/200/200/xif0q/monitor/9/b/n/va249he-23-8-inch-eye-care-fhd-full-hd-23-8-90lm02w1-b01310-asus-original-imaghfhmyvwz9x53.jpeg?q=70",
            CategoryName: "Asus Monitors",
            Brand: "Top Rated",
            id: 5,
            qu: 1,
            price: 500000
        },
        {
            ImgSrc:
                "https://rukminim1.flixcart.com/image/200/200/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=70",
            CategoryName: "Best of Hair Dryers",
            Brand: "Philips,Nova,Havells & more",
            id: 6,
            qu: 1,
            price: 500
        },
        {
            ImgSrc:
                "https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
            CategoryName: "Moniters",
            Brand: "Dell",
            id: 7,
            qu: 1,
            price: 50
        },
    ],
    total: 0,
    save: [],
    view: []
};

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        savecart: (state, action) => {
            state.save = [...state.save, action.payload]
            state.total += action.payload.price
        },
        remove: (state, action) => {
            const { price, id, qu } = action.payload
            // const find = state.save.findIndex(item => item.id === id)
            // state.save.splice(find, 1)
            console.log(id);
        },
        view: (state, action) => {
            state.view = action.payload
        }
    }
})
export const { savecart, view, remove } = imageSlice.actions

export default imageSlice.reducer;  