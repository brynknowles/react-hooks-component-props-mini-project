
function About({ aboutImg = "https://via.placeholder.com/215", aboutTxt }) {
    console.log("image in About: ", aboutImg)

    return (
        <aside>
            <img src={aboutImg} alt="blog logo" />
            <p>{aboutTxt}</p>
        </aside>
    )
}

export default About;