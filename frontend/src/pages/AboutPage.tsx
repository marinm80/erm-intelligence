import { AboutHero } from '../components/about/AboutHero';
import { MissionVision } from '../components/about/MissionVision';
import { OurFocus } from '../components/about/OurFocus';
import { CoreValues } from '../components/about/CoreValues';

export const AboutPage = () => {

  return (
    <div className="pt-20">
      <AboutHero />
      <MissionVision />
      <OurFocus />
      <CoreValues />
    </div>
  );
};
