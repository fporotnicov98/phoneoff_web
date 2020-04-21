const UPDATE_NEW_TITLE = "UPDATE_NEW_TITLE";
const FILTER_NEW_TITLE = "FILTER_NEW_TITLE";

let initial = {
    filterGoods: "",
    goods:
        [
            { id: 1, title: "Apple iPhone XS Max", price: "67 990р", description: "All black", character: { id: 1, color: "black", manufacturer: "Apple", ram: "2gb", intmemory: "128gb", diagonal: "5,5", goodsPhoto: null } },
            { id: 2, title: "Honor Play 8C", price: "27 990р", description: "All blue", character: { id: 1, color: "blue", manufacturer: "Honor", ram: "2gb", intmemory: "128gb", diagonal: "5,5", goodsPhoto: "https://mobile-review.com/news/wp-content/uploads/HonorPlay8C.png" } },
            { id: 3, title: "Huawei Nova 5T", price: "37 990р", description: "All blue", character: { id: 1, color: "blue", manufacturer: "Huawei", ram: "2gb", intmemory: "128gb", diagonal: "5,5", goodsPhoto: "https://www-file.huawei.com/-/media/corporate/images/home/small-banner/2020/nova5t.png?la=en"} },
            { id: 4, title: "Apple iPhone XS Max", price: "67 990р", description: "All black", character: { id: 1, color: "black", manufacturer: "Apple", ram: "2gb", intmemory: "128gb", diagonal: "5,5", goodsPhoto: null } },
            { id: 5, title: "Honor Play 8C", price: "27 990р", description: "All blue", character: { id: 1, color: "blue", manufacturer: "Honor", ram: "2gb", intmemory: "128gb", diagonal: "5,5", goodsPhoto: "https://mobile-review.com/news/wp-content/uploads/HonorPlay8C.png" } },
            { id: 6, title: "Huawei Nova 5T", price: "37 990р", description: "All blue", character: { id: 1, color: "blue", manufacturer: "Huawei", ram: "2gb", intmemory: "128gb", diagonal: "5,5", goodsPhoto: "https://www-file.huawei.com/-/media/corporate/images/home/small-banner/2020/nova5t.png?la=en"} },
            { id: 7, title: "Apple iPhone XS Max", price: "67 990р", description: "All black", character: { id: 1, color: "black", manufacturer: "Apple", ram: "2gb", intmemory: "128gb", diagonal: "5,5", goodsPhoto: null } },
            { id: 8, title: "Honor Play 8C", price: "27 990р", description: "All blue", character: { id: 1, color: "blue", manufacturer: "Honor", ram: "2gb", intmemory: "128gb", diagonal: "5,5", goodsPhoto: "https://mobile-review.com/news/wp-content/uploads/HonorPlay8C.png" } },
            { id: 9, title: "Huawei Nova 5T", price: "37 990р", description: "All blue", character: { id: 1, color: "blue", manufacturer: "Huawei", ram: "2gb", intmemory: "128gb", diagonal: "5,5", goodsPhoto: "https://www-file.huawei.com/-/media/corporate/images/home/small-banner/2020/nova5t.png?la=en"} },
           
        ]
}

const goodsReducer = (state = initial, action) => {
    debugger
    switch (action.type) {
        case "UPDATE_NEW_TITLE":
            state.filterGoods = action.getTitle;
            return {
                ...state,
                goods: state.goods.filter(prod => prod.title.toLowerCase().startsWith(state.filterGoods))  
                

            }
                
            

        default:
            return state;
    }
}



export const updateNewTitleAC = (title) => ({ type: UPDATE_NEW_TITLE, getTitle:title })
export const filterNewTitleAC = () => ({ type: FILTER_NEW_TITLE})

export default goodsReducer