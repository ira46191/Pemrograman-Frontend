function Hello(props) {
    return (
      // <div>
      //   <h1>Ira Kusuma Wardani</h1>
      //   <p>Teknik Informatika</p>
      // </div>

      // make props biar lebih dinamis
      <div>
        <h2>{props.nama}</h2>
        <p>{props.jurusan}</p>
      </div>
    );
  }
  export default Hello;