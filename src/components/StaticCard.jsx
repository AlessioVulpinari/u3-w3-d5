import { useEffect } from "react"
import { ADD_TO_PLAYLIST, artistCard, getSongsAction } from "../Redux/Actions"
import { useDispatch, useSelector } from "react-redux"

const StaticCard = () => {
  const dispatch = useDispatch()
  const playlist = useSelector((state) => state.playlist.content)

  useEffect(() => {
    dispatch(getSongsAction("Queen", ADD_TO_PLAYLIST))
    dispatch(getSongsAction("Eminem", ADD_TO_PLAYLIST))
    dispatch(getSongsAction("ACDC", ADD_TO_PLAYLIST))
  }, [])

  return (
    <>
      {playlist.length === 3 &&
        playlist.map((singleArtist) => singleArtist.data.slice(0, 4)).map((singleArtist, i) => artistCard(singleArtist, i))}
    </>
  )
}

export default StaticCard
