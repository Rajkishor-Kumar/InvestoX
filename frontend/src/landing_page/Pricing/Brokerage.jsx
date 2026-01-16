export default function Brokerage() {
    return (
        <div className="container mt-5 ">
            <div className="row mt-5 text-center">
                <div className="col-8 p-4 mt-3">
                    <a href="" style={{ textDecoration: "none" }}><h3 className="fs-5">Brokrage calculator</h3></a>
                    <ul style={{textAlign:"left", lineHeight:"2.5", fontSize:"14px"}} className="text-muted">
                        <li>
                            Call & Trade and RMS auto-squareoff: Additional charges of 50rs + GST per order.
                        </li>
                        <li>Digital contract notes will sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charges rs20 per contract note. couries charges apply.</li>
                        <li>For NRl account(non-pls), 0.5% rs 100 per executed order for equity (which ever is lower).</li>
                        <li>For NRl account(non-pls), 0.5% rs 200 per executed order for equity (which ever is lower).</li>
                        <li>If the account is in debit balance, any order will be placed on a charge rs 40 per executed order installed of rs 20 per execute order.</li>
                    </ul>
                </div>
                <div className="col-4 p-4">
                    <a href="" style={{ textDecoration: "none" }}> <h3 className="fs-5">List of charges</h3></a>
                </div>
            </div>

        </div>

    )
}