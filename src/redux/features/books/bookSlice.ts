import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IBook {
  title: string;
  image: string;
  author: string;
  genre: string;
  publicationDate: string;
}

const initialState: IBook = {
  title: "",
  image: "",
  author: "",
  genre: "",
  publicationDate: "",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    postBooks: (state, action: PayloadAction<IBook>) => {
      console.log(action.payload);
      state = action.payload;
    },
  },
});

export const { postBooks } = bookSlice.actions;

export default bookSlice.reducer;
