const initialWagonState ={
    supplies: 100,
      distance: 0,
      days: 0,
      cash: 200
  }
    
    const gameEmptyReducer = (state = initialWagonState, action) => {
  switch(action.type){
    case 'gather': {
  return { ...state,
            supplies: state.supplies + 15,
            distance: state.distance,
            days:  state.days + 1 
  };
    }
     case 'travel': {
     if(state.supplies - 20 * action.payload <= 0){
         return state
       } else {
         return {
           ...state,
              supplies: state.supplies - (action.payload * 20),
              distance: state.distance + (action.payload * 10),
              days: state.days +  (1 * action.payload)
         }
       } 
        if((state.supplies < 0) * action.payload ){
         return 
           state
         }
       }
  
   case 'tippedWagon': {
     return {
       ...state,
              supplies: state.supplies -30,
              distance: state.distance,
              days: state.days + 1
     }
   }
      case "sell": {
              return {
                  ...state,
                  supplies: state.supplies - 20,
                  cash: state.cash + 5,
              };
          }
      case "buy": {
              return {
                  ...state,
                  supplies: state.supplies + 25,
                  cash: state.cash - 15,
              };
          }
  
          case "theft": {
              return {
                  ...state,
                  cash: state.cash / 2,
              };
          }
        default: {
          return state;
         }
  }
  
    };
     let wagon = gameEmptyReducer(undefined, {})
    console.log(wagon);
  
    wagon = gameEmptyReducer(wagon, {type: 'travel', payload: 1})
    console.log(wagon);
  
    wagon = gameEmptyReducer(wagon, {type:'gather', payload: 0})
    console.log(wagon);
    
    wagon = gameEmptyReducer(wagon, {type: 'tippedWagon', payload: 0})
    console.log(wagon)
  
    wagon = gameEmptyReducer(wagon, {type: 'travel', payload: 3})
    console.log(wagon)
  
  
  
  
  
  
  
  