// @ts-check
import { useEffect, useState } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breads, setBreeds] = useState([''])
  const [selectedBreed, setSelectedBreed] = useState('')
  const [dogUrl, setDogUrl] = useState([''])

  const changeBreed = (e) => {
    setSelectedBreed(e.target.value)
  }

  const showDogs = async () => {
    const res = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/`)
    const data = await res.json()
    setDogUrl(Object.keys(data.message))
  }

  useEffect(()=> {
    const fetchBreeds = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/list/all")
      const data = await res.json()
      // Object.keysでオブジェクトのキーを配列で取得
      setBreeds(Object.keys(data.message))
    }
    fetchBreeds()
  },[])

  return (
    <>
      <BreedsSelect breeds={breads} changeBreed={changeBreed} selectedBreed={selectedBreed} />
      <button onClick={showDogs}>表示</button>
      {
        dogUrl.map((image) => {
          return <img src={image} key={image} />
        })
      }
    </>
  )
}