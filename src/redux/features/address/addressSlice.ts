import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Address = {
  id: string; 
  userId: string;
  firstName: string;
  lastName: string;
  companyName?: string;
  countryName: string;
  streetAddress: string;
  apartment?: string;
  town: string;
  postCode: number;
  phone: number;
  isDefault: boolean;
};

type AddressState = {
  defaultAddress?: Address | null;
};

const initialState: AddressState = {
  defaultAddress: null,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    updateDefaultAddress: (state, action: PayloadAction<Address>) => {
      const address = action.payload;
      if (address.isDefault) {
        state.defaultAddress = address;
      } else if (
        !address.isDefault &&
        state.defaultAddress?.id === address.id
      ) {
        state.defaultAddress = null;
      }
    },

    clearDefaultAddress: (state) => {
      state.defaultAddress = null;
    },
  },
});

export const { updateDefaultAddress, clearDefaultAddress } =
  addressSlice.actions;

export default addressSlice.reducer;
