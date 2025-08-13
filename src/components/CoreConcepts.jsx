import { CORE_CONCEPTS } from '../data'
import CoreConcept from '../components/CoreConcept'
import Section from './Section'

export default function CoreConcepts(){
    return (
      <Section title='Core Concepts' id='core-concepts'>
        <ul>
          {CORE_CONCEPTS.map((i) => (
            <CoreConcept key={i.title} {...i} />
          ))}
          {/* <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept 
          title={CORE_CONCEPTS[2].title}
          description={CORE_CONCEPTS[2].description}
          image={CORE_CONCEPTS[2].image}/>
          <CoreConcept 
          title={CORE_CONCEPTS[3].title}
          description={CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image}/> */}
        </ul>
      </Section>
    )
}