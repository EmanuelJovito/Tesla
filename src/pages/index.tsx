import { DefaultOverlayContent } from "../components/DefaultOverlayContent";
import { ModelsSection, ModelsWrapper } from "../components/model";
import { Container } from "../styles";

export default function Home() {
  return (
   <Container>
     <ModelsWrapper>
       <div>
        {[
          'Model S',
          'Model Y',
          'Model 3',
          'Model X',
          'lowest Cost Solar Panels in America',
          'Solar for New Roofs',
          'Accessories',
        ].map(modelName => (
          <ModelsSection 
            key={modelName}
            className='colored'
            modelName={modelName}
            overlayNode={
              <DefaultOverlayContent 
                label={modelName}
                description='Order Online for Delivery'
              />
            }
          />
        ))}
       </div>
     </ModelsWrapper>
   </Container>
  )
}
