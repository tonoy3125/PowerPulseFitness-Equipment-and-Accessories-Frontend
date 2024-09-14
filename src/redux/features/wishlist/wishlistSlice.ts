import { createSlice } from "@reduxjs/toolkit";

interface WishlistState {
  userWishlists: { [userId: string]: string[] }; // Map of userId to product IDs
}

const initialState: WishlistState = {
  userWishlists: {}, // Initialize as an empty object
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const { userId, productId } = action.payload;
      if (!state.userWishlists[userId]) {
        state.userWishlists[userId] = []; // Initialize array for the user if it doesn't exist
      }
      state.userWishlists[userId].push(productId); // Add the product ID to the user's wishlist
    },
    removeFromWishlist: (state, action) => {
      const { userId, productId } = action.payload;
      if (state.userWishlists[userId]) {
        state.userWishlists[userId] = state.userWishlists[userId].filter(
          (item) => item !== productId
        ); // Remove the product ID from the user's wishlist
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const selectWishlist = (
  state: { wishlist: WishlistState },
  userId: string
) => state.wishlist.userWishlists[userId] || []; // Selector to access items for a specific user

export default wishlistSlice.reducer;
