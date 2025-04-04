import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './../features/themeSlice';
import basicSlice from './../features/basicSlice';

const store = configureStore({
  reducer: {
    theme: themeSlice,
    pageData : basicSlice,
  },
});

export default store;
