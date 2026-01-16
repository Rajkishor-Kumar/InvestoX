export default function Team() {
    return (
        <div className="container  ">
            <div className="row  ">
                <h2 className=" mt-5 " style={{ textAlign: "center" }}>People</h2>
            </div>

            <div className="row   text-muted" style={{ lineHeight: "1.8", fontSize: "1.2em" }}>

                <div className="col-6 mt-5 p-2 ml-5 text-center mb-4">
                    <img src="media/images/raj.jpg" alt="myimg" style={{ height: "320px", width: "320px",borderRadius:"100%", }} />
                    <h4 className="mt-3 ">Rajkishor Kumar</h4>
                    <h6  >Founder ,CEO</h6>
                </div>
                <div className="col-6 mt-5 p-3 " >
                    <p>Rajkishor kumar and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                      <p>  He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                        <p>Playing basketball is his zen.</p>

                        Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> / <a href="">Twitter</a>
                </div>

            </div>
        </div>
    )
}