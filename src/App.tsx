import Container from './components/Container';
import Section from './components/Section';
import Button from './components/Button';
import Heading from './components/Heading';

function App() {
  return (
    <Container>
      <Section>
        <Heading level={1}>Cyber Page</Heading>
        <Button type="button" onClick={() => alert('Clicked!')}>
          Click me
        </Button>
      </Section>
    </Container>
  );
}

export default App;
