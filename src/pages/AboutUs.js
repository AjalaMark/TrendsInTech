import React from "react";
import styled from "styled-components";
import aboutHeader from "../Assets/Images/about-header.jpg";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  position: relative;
  background-image: url("${aboutHeader}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 400px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    z-index: 8;
  }
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

const Head2 = styled.h2`
  font-size: 40px;
  z-index: 20;
  color: white;
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
      <Header>
        <Head2>About Us</Head2>
      </Header>
      <Section>
        <TextContainer>
          <Title>Our Mission</Title>
          <Text>
            At MKSK, we strive to share compelling stories and insights across a
            variety of passions and interests. Our mission is to empower and
            inspire our readers through thought-provoking content that spans
            from innovative technology to lifestyle and beyond.
          </Text>
        </TextContainer>
        <Image src="/assets/images/our-mission.jpg" alt="Blog Mission" />
      </Section>
      <Section>
        <Image src="/assets/images/our-story.jpg" alt="Blog Story" />
        <TextContainer>
          <Title>Our Story</Title>
          <Text>
            Launched in 2013 by Mark, Krithi, Sunnith and Kalpit, MKSK Blog
            began as a small personal project born out of a passion for sharing
            knowledge and connecting like-minded individuals. Today, it has
            grown into a thriving community of readers and contributors who seek
            to uncover new ideas and perspectives.
          </Text>
        </TextContainer>
      </Section>
    </PageContainer>
  );
};

export default AboutUs;
