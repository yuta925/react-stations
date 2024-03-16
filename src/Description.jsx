// @ts-check
import {useState} from 'react'
import { DogImage } from './DogImage'
export const Description = () => {

  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')
  const fetchDog = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await res.json()
    setDogUrl(data.message)
  }

  return (
    <>
      <div className='randomDog'>
        <h3>犬の画像を表示するサイトです</h3>
        <DogImage imageUrl={dogUrl} />
        <button onClick={fetchDog}>更新</button>
      </div>
    </>
  )
}

export default Description
