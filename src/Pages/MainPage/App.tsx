import Layout from "./../../Shared/ui/layout/Layout.tsx";
import Section from "./../../Widgets/section/section.tsx";
// import Logo from "./../../Widgets/Header/Logo/Logo.tsx";
// import Navigation from "./../../Shared/ui/navigation/Navigation.tsx";
import Header from "./../../Widgets/Header/header.tsx";
import ThemeWrapper from "./../../Shared/ui/ThemeWrapper/ThemeWrapper.tsx";
// import Hero from "./../../Widgets/Hero/Hero.tsx";
import Footer from './../../Widgets/Footer/Footer.tsx'
import {ThemeProvider} from "../../Shared/context/themeContext/ThemeContextProvider.tsx";
// import {Projects} from "../../Widgets/Projects/Projects.tsx";
import FooterContent from "../../Widgets/FooterContent/FooterContent.tsx";
import Logo from "../../Widgets/Header/Logo/Logo.tsx";
import Navigation from "../../Shared/ui/navigation/Navigation.tsx";
import Hero from "../../Widgets/Hero/Hero.tsx";
import {Projects} from "../../Widgets/Projects/Projects.tsx";
import ImageBackground from "../../Shared/ui/ImageBackground/ImageBackground.tsx";
import Gradient from "../../Shared/ui/Gradient/Gradient.tsx";

function App() {
  return (
      <ThemeProvider>
         <ThemeWrapper>
             <Header>
                  <Logo/>
                  <Navigation list={['Мои работы', 'Обо мне']}/>
             </Header>
             <Layout>
                 <Section height={100} classname={'section__hero'}>
                     <Hero/>
                     <ImageBackground/>
                 </Section>
                 <Gradient classname='hero-projects'/>
                 <Section height={100} title='Проекты' classname={'section__projects'}>
                     <Projects/>
                 </Section>
             </Layout>
             <Gradient classname='projects-footer'/>
             <Footer>
                 <FooterContent/>
             </Footer>
          </ThemeWrapper>
      </ThemeProvider>
  )
}

export default App
