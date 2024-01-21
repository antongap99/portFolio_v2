import Layout from "./components/layout/Layout.tsx";
import Section from "./components/section/section.tsx";
import Header from "./components/header/header.tsx";
import Navigation from "./ui/navigation/Navigation.tsx";
import Logo from "./components/header/Logo/Logo.tsx";
import ThemeWrapper from "./ui/ThemeWrapper/ThemeWrapper.tsx";
import Hero from "./components/Hero/Hero.tsx";


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
    </ThemeWrapper>

  )
}

export default App
