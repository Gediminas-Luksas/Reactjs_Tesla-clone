import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Deliwery"
                backgroundImage="model-s.jpg"
                leftBtnText="Costom order"
                rightBtnText="Exixting inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Deliwery"
                backgroundImage="model-y.jpg"
                leftBtnText="Costom order"
                rightBtnText="Exixting inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Deliwery"
                backgroundImage="model-3.jpg"
                leftBtnText="Costom order"
                rightBtnText="Exixting inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Deliwery"
                backgroundImage="model-x.jpg"
                leftBtnText="Costom order"
                rightBtnText="Exixting inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImage="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
             <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Then a New Roof Plus Solar Panels"
                backgroundImage="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImage="accessories.jpg"
                leftBtnText="Shop now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
