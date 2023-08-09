import Artist from './home.js'
import PropType from 'prop-types';

Artist.defaultProps = {
  name: "inconnu",
  bio:"no bio"
}

Artist.propsType = {
  name: PropType.string,
  bio:PropType.string
}

export default class app extends React.Component {
  render()
  {
    const atisYo = [
      {
        name: "Emeline Michel",
        bio: "Yon atis fanm"
      },
      {
        name: "Bélo",
        bio: "Yon atis gason"
      }
    ] // sa se tablo atis yo

    return (
      <div>
        <h1>Ayibobo tout moun</h1>
        {/* <Artist/> */}
        <hr /> 
        <h1>Men atis yo</h1>
        {atisYo.map((atis) => {
          // nap presize transfòmasyon an, ansanm ak tout atribi ki lesansyèl yo
          return <Artist name={atis.name} bio={atis.bio} />
        })}
      </div>
    )
  }
}
