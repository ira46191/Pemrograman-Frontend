import { useParams } from "react-router-dom";
import DetailMovie from "../../components/Detail.Movie/DetailMovie";
import { useEffect} from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constans/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../feature";

function Detail() {
  const params = useParams();
  const dispatch = useDispatch();
  

  useEffect(() => { 
    getRecommendationMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]); 

  async function getRecommendationMovies(){
  const response = await axios(ENDPOINTS.RECOMMENDATIONS(params.id));
  dispatch(updateMovie(response.data.results));
  }

  return (
    <>
      <DetailMovie />
      <Movies title="Recommendations Movie"/>
    </>
  );
}

export default Detail;
