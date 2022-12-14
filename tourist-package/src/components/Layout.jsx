import React from 'react'
import { styled } from "@mui/material/styles"

export const Layout = ({children}) => {
  return (
    <CustomLayout>
      {children}
    </CustomLayout>
  ) 
}

const CustomLayout = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
    margin: theme.spacing(2)
}))

