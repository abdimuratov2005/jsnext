export default function Video() {
    return (
            <section className=''>
                <video  className="video w-screen h-screen" autoPlay loop muted playsInline>
                    <source src='/video/promo-mapbiz.mp4' type="video/mp4" />
                </video>
            </section>

    )
}