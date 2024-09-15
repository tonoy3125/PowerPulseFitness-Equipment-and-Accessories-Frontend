import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WishlistState = {
  userWishlists: { [userId: string]: string[] }; // Store product IDs for each user
};

const initialState: WishlistState = {
  userWishlists: {},
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setUserWishlist: (
      state,
      action: PayloadAction<{ userId: string; wishlist: string[] }>
    ) => {
      const { userId, wishlist } = action.payload;
      console.log("setUserWishlist - userId:", typeof userId, userId);
      state.userWishlists[userId] = wishlist; // Initialize the wishlist for the user
    },
    addToWishlist: (
      state,
      action: PayloadAction<{ userId: string; productId: string }>
    ) => {
      const { userId, productId } = action.payload;
      console.log("addToWishlist - userId:", typeof userId, userId);
      if (!state.userWishlists[userId]) {
        state.userWishlists[userId] = [];
      }
      state.userWishlists[userId].push(productId); // Add product to wishlist
    },
    removeFromWishlist: (
      state,
      action: PayloadAction<{ userId: string; productId: string }>
    ) => {
      const { userId, productId } = action.payload;
      console.log("removeFromWishlist - userId:", typeof userId, userId);
      if (state.userWishlists[userId]) {
        state.userWishlists[userId] = state.userWishlists[userId].filter(
          (id) => id !== productId
        );
      }
    },
    clearWishlist: (state, action: PayloadAction<{ userId: string }>) => {
      const { userId } = action.payload;
      delete state.userWishlists[userId];
    },
  },
});

export const {
  setUserWishlist,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export const selectWishlist = (
  state: { wishlist: WishlistState },
  userId: string
) => state.wishlist.userWishlists[userId] || [];

export default wishlistSlice.reducer;
