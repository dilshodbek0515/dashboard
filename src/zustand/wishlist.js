import { create } from 'zustand'

export const useWishlist = create((set) => ({
  wishlist: [],
  addWishlist: (payload) => set((state)=> ([...state.wishlist, payload])),
}))
