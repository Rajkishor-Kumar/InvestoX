export default function Awards(){
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col mt-5 p-5">
                    <img src="/media/images/largestBroker.svg" alt="" />
                    
                </div>
                <div className="col mt-5 p-5">
                    <h1>Largest stock broker in India</h1>
                    <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all reatil order volumes in India daily by treding and investing in.</p>
                    <div className="row">
                        <div className="col-6 ">
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6 ">
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutul Funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" style={{width:"90%"}} alt="" />
                </div>
            </div>
        </div>
    )
}