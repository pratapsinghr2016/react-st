import styled from "styled-components";
import Button from "../components/Button";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageTitle = styled.h1`
  color: #333;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const PageContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const FeatureCard = styled.div`
  background: linear-gradient(135deg, #d1c4e9 0%, #c5cae9 100%);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  border-left: 4px solid #6c5ce7;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Module4 = () => {
  const handleAction = () => {
    alert("Module 4 API integration started!");
  };

  return (
    <PageContainer>
      <PageTitle>Module 4 - API Integration</PageTitle>
      <PageContent>
        <h2>External API Integration</h2>
        <p>
          Module 4 handles integration with external APIs and services. It
          provides tools for seamless communication with third-party services
          and data sources.
        </p>

        <FeatureCard>
          <h3>🌐 API Features</h3>
          <ul>
            <li>RESTful API integration</li>
            <li>GraphQL support</li>
            <li>WebSocket connections</li>
            <li>API rate limiting and error handling</li>
          </ul>
        </FeatureCard>

        <FeatureCard>
          <h3>🔗 Integration Tools</h3>
          <ul>
            <li>HTTP client configuration</li>
            <li>Request/response interceptors</li>
            <li>API documentation generation</li>
            <li>Testing and monitoring</li>
          </ul>
        </FeatureCard>

        <ButtonGroup>
          <Button variant="primary" onClick={handleAction}>
            Test API Connection
          </Button>
          <Button variant="outline">View API Docs</Button>
          <Button variant="secondary">Monitor APIs</Button>
        </ButtonGroup>
      </PageContent>
    </PageContainer>
  );
};

export default Module4;
