import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link, useLocation } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react'

const Page = (props) => {
    
    return(
      <>
        
        <Button as={Link} to='/'>
        Home
        </Button>
        <Button as={Link} to='/about'>
        About
        </Button>
        <Button as={Link} to='/services/1'>
        Service 1
        </Button>
        <Button as={Link} to='/services/2'>
        Service 2
        </Button>
        <Button as={Link} to='/services/3'>
        Service 3
        </Button>
        
      </>
    )
}
export default Page;