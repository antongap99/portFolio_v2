import Layout from "./../../ui/layout/Layout.tsx";
import Section from "./../../Widgets/section/section.tsx";
import Logo from "./../../Widgets/Header/Logo/Logo.tsx";
import Navigation from "./../../ui/navigation/Navigation.tsx";
import Header from "./../../Widgets/Header/header.tsx";
import ThemeWrapper from "./../../ui/ThemeWrapper/ThemeWrapper.tsx";
import Hero from "./../../Widgets/Hero/Hero.tsx";
import Footer from './../../Widgets/Footer/Footer.tsx'

function App() {


  return (
    <ThemeWrapper>
        <Header>
            <Logo/>
            <Navigation list={['Мои работы', 'Обо мне']}/>
        </Header>
        <Layout>
            <Section height={100} classname={'section__hero'}>
                <Hero/>
            </Section>
            <Section height={100} title='Проекты' classname={'section__projects'}>
                content
            </Section>
        </Layout>
        <Footer>
            footer
        </Footer>
    </ThemeWrapper>

  )
}

export default App
