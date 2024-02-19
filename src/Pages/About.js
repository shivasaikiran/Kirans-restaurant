import React from 'react';
import Layout from './../Components/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign: 'center',
        p:2,
         "& h4":{
            textAlign:'bold',
            my:2,
            fontSize:'2rem'
         },
        "& p":{
          textAlign:'justify'
        },
        "@media (max-width:600px)":{
          marginTop:0,
          "& h4":{
            fontSize:'1.5rem'
          
          }
        },
        }}>
        <Typography variant='h4'>
          Welcome To Kirans Restaurant
        </Typography>
        <p>
        Welcome to Kirans Restaurant, where culinary passion meets exceptional dining experience. Nestled in the heart of Hyderabad, our restaurant has been a beloved destination for food enthusiasts since 2001.
       </p>
       <br/>
       <p>
        Kirans Restaurant was founded by Padala Shiva Sai Kiran, a visionary chef with a dream to create a dining establishment that celebrates the art of gastronomy. With a commitment to using only the freshest, locally-sourced ingredients and innovative culinary techniques, Kiran set out to redefine the culinary landscape of Hyderabad.

       </p>


      </Box>
    </Layout>
  )
}

export default About