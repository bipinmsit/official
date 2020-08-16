import React, {useEffect} from 'react'

const ImportantLink = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <>
            <div className="container importantLink">
                <div className="row">
                    <div className="col-lg-8">
                    <h3 className="mb-3"> Important Links </h3>
                        <div>
                            <p className="h6 mb-3" style={{color:"red"}}><span className="h5" style={{color:"blue"}}><u>Useful Articles</u> :<span style={{color:"orange"}}> GIS   </span></span> Must read & upgrade your knowledge</p>
                            <ul>
                                <li>
                                    <a href="https://monde-geospatial.com/">Monde-Geospatial </a>
                                </li>
                                <li>
                                    <a href="https://automating-gis-processes.github.io/site/">GIS Automation </a>
                                </li>
                                <li>
                                    <a href="https://pcjericks.github.io/py-gdalogr-cookbook/">GDAL/OGR </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="h6 mb-3" style={{color:"red"}}><span className="h5" style={{color:"blue"}}><u>My Favorite Books</u> :<span style={{color:"orange"}}> Stock Market   </span></span> Click on the book link to BUY the book</p>
                            <ol>
                                <li>
                                    <a href="https://amzn.to/2GDgdUY">
                                    How to Day Trade for a Living – Andrew Aziz
                                    </a>
                                </li>
                                <li>
                                    <a href="https://amzn.to/2x05x3s">
                                    Technical Analysis of the Financial Markets – John J Murphy
                                    </a>
                                </li>
                                <li>
                                    <a href="https://amzn.to/2KIfx39">
                                    Stock Investing For Beginners – John Roberts
                                    </a>
                                </li>
                                <li>
                                    <a href="https://amzn.to/2s0dJLp">
                                    How to Make Money in Stocks – William J O’Neil
                                    </a>
                                </li>
                                <li>
                                    <a href="https://amzn.to/2x15vIw">
                                    One Up On Wall Street – Peter Lynch
                                    </a>
                                </li>
                                <li>
                                    <a href="https://amzn.to/2GHrgwM">
                                    The Little Book of Common Sense Investing – John C Bogle
                                    </a>
                                </li>
                                <li>
                                    <a href="https://amzn.to/2GDkZSD">
                                    The intelligent Investor – Benjamin Graham
                                    </a>
                                </li>
                                <li>
                                    <a href="https://amzn.to/2ICgRbj">
                                    Understanding Options 2E – Michael Sincere
                                    </a>
                                </li>
                                <li>
                                    <a href="https://amzn.to/2wZhWET">
                                    Bear Market Trading Strategies – Matthew R Kratter
                                    </a>
                                </li>
                                <li>
                                    <a href="https://amzn.to/2s0QQra">
                                    The Complete Penny Stock Course – Jamil Ben Alluch/Timothy Sykes
                                    </a>
                                </li>
                            </ol>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default ImportantLink