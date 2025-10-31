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
  background: linear-gradient(135deg, #fdcb6e 0%, #e17055 100%);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  border-left: 4px solid #fd79a8;
  color: white;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Module5 = () => {
  const handleAction = () => {
    alert("Module 5 analytics generated!");
  };

  return (
    <PageContainer>
      <PageTitle>Module 5 - Analytics & Reporting</PageTitle>
      <PageContent>
        <h2>Data Analytics & Reporting</h2>
        <p>
          Module 5 provides comprehensive analytics and reporting capabilities.
          It offers insights, metrics, and detailed reports for data-driven
          decision making.
        </p>

        <FeatureCard>
          <h3>📈 Analytics Features</h3>
          <ul>
            <li>Real-time data visualization</li>
            <li>Custom dashboard creation</li>
            <li>Performance metrics tracking</li>
            <li>User behavior analysis</li>
          </ul>
        </FeatureCard>

        <FeatureCard>
          <h3>📊 Reporting Tools</h3>
          <ul>
            <li>Automated report generation</li>
            <li>Export functionality (PDF, Excel)</li>
            <li>Scheduled reports</li>
            <li>Interactive charts and graphs</li>
          </ul>
        </FeatureCard>

        <ButtonGroup>
          <Button variant="primary" onClick={handleAction}>
            Generate Report
          </Button>
          <Button variant="outline">View Dashboard</Button>
          <Button variant="danger">Export Data</Button>
        </ButtonGroup>
      </PageContent>
    </PageContainer>
  );
};

export default Module5;
