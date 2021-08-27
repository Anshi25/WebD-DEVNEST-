const todoReducer=(state=[],actions)=>{
    if(actions.type==="ADD_ITEM")
    {
        return [...state,actions.payload];
    }
    else if(actions.type==="REMOVE_ITEM")
    {
        return state.filter((item,index)=>index!==actions.payload);
    }
    return state;
}

export default todoReducer;