import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PageState {
  query: string
  pageType: string
}

const initialState: PageState = {
  query: ' ',
  pageType: '',
}

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPageType: (state, action: PayloadAction<string>) => {
      state.pageType = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
  },
})

export const { setPageType, setSearchQuery } = pageSlice.actions

export default pageSlice.reducer
