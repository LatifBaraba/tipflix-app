import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Panel } from 'rsuite'
import { fetchMovie } from '../../store/movie'
import { fetchTv } from '../../store/tv'

const HomeList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTv())
        dispatch(fetchMovie())
    }, [])

    const dataTv = useSelector(state => state.tv.data)
    const dataMovie = useSelector(state => state.movie.data)
    console.log(dataTv, 'dtv')
    const listTv = dataTv ?? dataTv.results.slice(0, 4).map((value, index) => {
        return (
            <Col xs={6} key={index}>
                <Panel shaded bordered bodyFill>
                    <img src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} alt="" width="100%" height="500px" />
                    <Panel header={value.name}>
                        <p>
                            <small>{value.name}</small>
                        </p>
                    </Panel>
                </Panel>
            </Col>
        )
    })

    // const listMovie = dataMovie?.results.slice(0, 4).map((value, index) => {
    //     return (
    //         <Col xs={6} key={index}>
    //             <Panel shaded bordered bodyFill>
    //                 <img src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} alt="" width="100%" height="500px" />
    //                 <Panel header={value.original_title}>
    //                     <p>
    //                         <small>{value.original_title}</small>
    //                     </p>
    //                 </Panel>
    //             </Panel>
    //         </Col>
    //     )
    // })

    return (
        <div className="topTv">
            <div className="top-title">
                <h4>List Tv Series</h4>
                <Link>See More</Link>
            </div>
            <div className="listTv">
                <Grid fluid>
                    <Row className="show-grid">{listTv}</Row>
                </Grid>
            </div>
            <div className="top-title">
                <h4>List Movie</h4>
                <Link>See More</Link>
            </div>
            <div className="listTv">
                <Grid fluid>
                    {/* <Row className="show-grid">{listMovie}</Row> */}
                </Grid>
            </div>
        </div>
    )
}

export default HomeList
