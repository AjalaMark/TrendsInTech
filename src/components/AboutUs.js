import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Section = styled.section`
  max-width: 1200px;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
`;

const Text = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  border-radius: 10px;
`;

const AboutUs = () => {
  return (
    <PageContainer>
      <Section>
        <TextContainer>
          <Title>Our Mission</Title>
          <Text>
            At [Your Blog Name], we strive to share compelling stories and insights across a variety of passions and interests. Our mission is to empower and inspire our readers through thought-provoking content that spans from innovative technology to lifestyle and beyond.
          </Text>
        </TextContainer>
        <Image src="/assets/images/our-mission.jpg" alt="Blog Mission"/>
      </Section>
      <Section>
        <Image src="/assets/images/our-story.jpg" alt="Blog Story"/>
        <TextContainer>
          <Title>Our Story</Title>
          <Text>
            Launched in [Year] by [Founder's Name], [Your Blog Name] began as a small personal project born out of a passion for sharing knowledge and connecting like-minded individuals. Today, it has grown into a thriving community of readers and contributors who seek to uncover new ideas and perspectives.
          </Text>
        </TextContainer>
      </Section>
    </PageContainer>
  );
};

export default AboutUs;
