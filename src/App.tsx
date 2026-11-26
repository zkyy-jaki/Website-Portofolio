import { useState } from 'react';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { ServicesTools } from './components/ServicesTools';
import { LanguageProvider } from './context/LanguageContext';
import type { ProjectCategory } from './types/portfolio';

export function App() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-canvas text-white selection:bg-volt selection:text-ink">
        <Navbar />
        <main>
          <Hero />
          <ServicesTools onSelectCategory={setActiveCategory} />
          <Projects
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
