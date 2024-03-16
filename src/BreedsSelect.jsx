// @ts-check

export const BreedsSelect = (
  { breeds, changeBreed, selectedBreed }
) => {
  console.log(breeds)
  return (
    <>
      <select name="breed" id="breed" value={selectedBreed} onChange={changeBreed}>
        {
          breeds.map((breed) => {
            return <option value={breed} key={breed}>{breed}</option>
          })
        }
      </select>
    </>
  )
}