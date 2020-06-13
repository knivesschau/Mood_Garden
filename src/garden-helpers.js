export const findRose = (roses=[], id) => 
    roses.find(rose => rose.id+'' === id)