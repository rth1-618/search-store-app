export const randomInteger = (min: number, max: number): number => {
    return  Math.floor(Math.random() * (max - min + 1) + min)
}



export function handleFilterChange<T,Q> (
    e: Q,
    elem: T,
    selectedElems: T[],
    setSelectedElems: (value: React.SetStateAction<T[]>) => void
  ): void {
    let newArray = [...selectedElems, elem];

    if (selectedElems.includes(elem)) {
      newArray = newArray.filter((x) => x !== elem);
    }
    setSelectedElems([...newArray]);
  };