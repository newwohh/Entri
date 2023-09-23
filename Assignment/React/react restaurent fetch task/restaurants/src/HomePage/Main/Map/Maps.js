import "./map.css";

const Maps = (props) => {
  let mapURL = `//maps.google.com/maps?q=${props.lat},${props.lng}&z=15&output=embed`;

  return (
    <div className="map">
      <iframe src={mapURL}></iframe>
    </div>
  );
};

export default Maps;
