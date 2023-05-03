
var initialData={
    products:[],
    menuproduct:[],
    emaildata:"",
    isSuscribe:false
}



const basicReducer=(storeData=initialData,action)=>{
if(action.type==="products"){
    return{
        ...storeData,
        products:action.payLoad
    }
}else if(action.type==="menuproduct"){
    return{
        ...storeData,
        menuproduct:action.payLoad2
    }

}else if(action.type==="email"){
    return{
        ...storeData,
        emaildata:action.emaildata

    }
}else if(action.type==="suscribe"){
    return{
        ...storeData,
        isSuscribe:action.isData
    }
}



    return storeData;
}

export default basicReducer;