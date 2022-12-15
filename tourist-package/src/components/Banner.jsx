import React from 'react'
import { styled } from "@mui/material/styles"
import  Paper  from '@mui/material/Paper'
import  banner  from '../images/banner.png'
export const Banner = () => {
  return (
    <>
      <CustomBanner>

      </CustomBanner>
    </>
  )
}


const CustomBanner = styled(Paper)(({ theme }) => ({
    width: "inherit",
    height: "55vh",
    backgroundImage:`url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    color: "#fff",
    fontWeight: "bold",
    position: "relative"
}))

const CustomTitle = styled()(({ theme }) => ({
    background: "#000",
    opacity: 0.8,
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    position: 'absolute',
}))

 
