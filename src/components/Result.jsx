/* eslint-disable  */

function Result(props) {
   // eslint-disable-next-line react/prop-types
   const boxes = props.mvs.map((item) => {
     return (
       <Box
         image={item.poster_path}
         title={item.title}
         rating={item.vote_average}
       />
     );
   });
  return (
    <div className="">
      
      {boxes}
    </div>
  );
}

export default Result

const Box = (props) => {
      const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  return <div className="row" style={{}}>
    <img src={IMGPATH + props.image} />
    <span>{ props.title}</span>
     
  </div>
}

