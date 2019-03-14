export default (state = [], action) => {
  //return 132; //must return any value besides 'undefined'
  /*if (action.type === "FETCH_POST") {
      return action.payload;
  }
  return state;*/
  switch (action.type){
      case 'FETCH_POST':
        return action.payload;
      default:
      return state;  
  }
};
