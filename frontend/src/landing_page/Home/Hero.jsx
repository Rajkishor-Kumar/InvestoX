export default function Hero() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="/media/images/homeHero.png" alt="heroimage"  className="mb-2" style={{width:"70%", margin:"auto"}}/>
                <h1 className="mt-5">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <form action="/signup">
                <button className="p-2 btn btn-primary fs-5" style={{width:"20%" , margin:"auto"}}>Sign up for free</button>
                </form>

            </div>
        </div>

    )
}