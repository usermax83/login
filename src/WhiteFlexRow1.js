import React from "react";
import styled from "styled-components";
export const WhiteFlexRow1 = ({}) => {
  const ButtonSocialFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const ButtonSocial1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <WhiteFlexRowRoot>
      <BlackFlexColumn>
        <KnotnftLogoTemp
          src={"https://file.rendit.io/n/1wiHshzJPjWJAnr7LHLw.svg"}
        />
      </BlackFlexColumn>
      <FlexRow>
        <BlackFlexRow>
          <FlexColumn>
            <Text1>Curator login</Text1>
            <ButtonSocial
              onClick={(e) => ButtonSocialFunction(e, "ButtonSocial")}
            >
              <IconFacebookbutton
                src={"https://file.rendit.io/n/TpsLZDzuKEGLgAx5uuku.svg"}
              />
              <Label>Facebook </Label>
            </ButtonSocial>
            <Element1>
              <ButtonSocial1
                onClick={(e) => ButtonSocial1Function(e, "ButtonSocial1")}
                top={"0px"}
              >
                <IconFacebookbutton
                  src={"https://file.rendit.io/n/zw1zqM7YlByNKJ0f13Qd.svg"}
                />
                <Label>Google</Label>
              </ButtonSocial1>
              <ButtonSocial1
                onClick={(e) => ButtonSocial1Function(e, "ButtonSocial2")}
                top={"72px"}
              >
                <IconFacebookbutton
                  src={"https://file.rendit.io/n/DgJnWnwFhj5RkMV4Q89C.svg"}
                />
                <Label>Wallet</Label>
              </ButtonSocial1>
            </Element1>
          </FlexColumn>
        </BlackFlexRow>
      </FlexRow>
    </WhiteFlexRowRoot>
  );
};
const WhiteFlexRowRoot = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  min-width: 1200px;
  align-items: center;
`;
const BlackFlexColumn = styled.div`
  height: 800px;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 120px;
`;
const KnotnftLogoTemp = styled.img`
  width: 160px;
  height: 69px;
`;
const FlexRow = styled.div`
  width: 800px;
  background-image: url("https://file.rendit.io/n/g2tERSxjNh6XKVEX980l.png");
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 246px 0px 250px 0px;
`;
const BlackFlexRow = styled.div`
  width: 292px;
  background-color: rgba(0, 0, 0, 0.39);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 30px 0px 27px 0px;
`;
const FlexColumn = styled.div`
  height: 247px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Text1 = styled.div`
  font-size: 20px;
  font-family: Poppins;
  font-weight: 400;
  color: #ffffff;
  margin: 0px 0px 24px 0px;
`;
const ButtonSocial = styled.button`
  border-width: 1px;
  border-color: #444951;
  border-style: solid;
  width: 218px;
  height: 46px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0px 0px 22px 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const Element1 = styled.div`
  height: 50px;
  position: relative;
  min-width: 220px;
`;
const IconFacebookbutton = styled.img`
  width: 24px;
  height: 24px;
`;
const Label = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: Poppins;
  font-weight: 400;
  color: #444951;
  white-space: pre-wrap;
`;
const ButtonSocial1 = styled.button`
  border-width: 1px;
  border-color: #444951;
  border-style: solid;
  width: 218px;
  height: 46px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  left: -1px;
  border-radius: 4px;
  padding: 8px 16px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
  top: ${(props) => props.top};
`;
