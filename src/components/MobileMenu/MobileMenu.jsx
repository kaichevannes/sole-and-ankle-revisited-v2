import React from "react";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

import { COLORS } from "../../constants";

import * as Dialog from "@radix-ui/react-dialog";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>
            <VisuallyHidden>Mobile Navigation</VisuallyHidden>
          </Title>
          <Close>
            <Icon id="close" size={24} />
          </Close>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </Content>
        <Dialog.Description>Mobile Navigation</Dialog.Description>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Title = styled(Dialog.Title)`
  position: absolute;
`;

const Overlay = styled(Dialog.Overlay)`
  /* background: hsl(220deg 5% 40% / 0.8); */
  background: hsl(220deg 5% 40% / 0.8);
  position: fixed;
  inset: 0;
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 26px 16px 32px 32px;
`;

const Close = styled(Dialog.Close)`
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  font-size: ${18 / 16}rem;
  text-transform: uppercase;
  color: ${COLORS.gray[900]};
  text-decoration: none;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: ${14 / 16}rem;
  color: ${COLORS.gray[700]};
  text-decoration: none;
`;

export default MobileMenu;
