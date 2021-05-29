
function Card(props){
  const {name, country, city, address} = props;
  return <div className="main-div">
  <h3 className="heading3">Name: {name}</h3>
  <h4>Country: {country}</h4>
  <h5>City: {city}</h5>
  <h5>Address: {address}</h5>
</div>
}
export default Card;