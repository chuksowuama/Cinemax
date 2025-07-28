import { configureStore } from "@reduxjs/toolkit";
import reduxstoredprovider from "./Reduxindex"

const Storedmovies=configureStore({
   reducer:{
    stored:reduxstoredprovider
   }
})

export default Storedmovies