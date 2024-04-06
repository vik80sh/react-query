import { atom } from "jotai";

export const selectedComicsList = atom<{title: string; id: number}[]>([])
export const userInput = atom<string>("")
export const currentPageNumber = atom<number>(1)
export const totalPagesAvailable = atom<number>(0)
export const toggleButton = atom<boolean>(true)
