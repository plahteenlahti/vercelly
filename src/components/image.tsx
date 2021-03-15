import Img, { FluidObject, GatsbyImageProps } from "gatsby-image"
import React, { FC } from "react"
import styled from "styled-components"

type Props = {
  image: FluidObject
}

const Image: FC<Props> = ({ image }) => {
  if (!image) {
    return <div>Picture not found</div>
  }

  return <ImageContent fluid={image} />
}

export default Image

const ImageContent = styled(Img)<GatsbyImageProps>`
  max-width: 100%;
  object-fit: contain;
`
