import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonSlider = (props) => (
    <ContentLoader
        speed={2}
        width={290}
        height={217}
        viewBox="0 0 290 217"
        backgroundColor="#f3f3f3"
        foregroundColor="#fa0000"
        {...props}
    >
        <rect x="0" y="11" rx="0" ry="0" width="253" height="197" />
    </ContentLoader>
)

export default SkeletonSlider
