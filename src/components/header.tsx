"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.webp";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: { title: string; href: string }[] = [
    {
      title: "Sobre",
      href: "#About",
    },
    {
      title: "Servicios",
      href: "#Services",
    },
    {
      title: "Abogados en Jujuy",
      href: "/abogados-en-jujuy",
    },
    {
      title: "Artículos",
      href: "/articulos",
    },
    {
      title: "Contacto",
      href: "#Contact",
    },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="sticky top-0 z-50 bg-white/80 py-2 shadow-sm backdrop-blur-md"
      maxWidth="full"
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <Link href="#Home">
          <NavbarBrand>
            <Image
              src={Logo}
              alt="Logo de Estudio Jurídico Baiud"
              sizes="100vw"
              height={0}
              width={0}
              className="h-auto w-52 object-cover"
            />
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              className="text-slate-700 transition-colors duration-300 hover:text-slate-950"
              href={item.href}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <div className="flex cursor-pointer items-center justify-center gap-2">
          <NavbarItem>
            <Button
              as={Link}
              color="warning"
              href="https://www.facebook.com/profile.php?id=100089098967597"
              variant="light"
              isIconOnly
              target="_blank"
              startContent={
                <FaFacebookF
                  size={40}
                  className="rounded-full border border-amber-400/60 bg-amber-400/30 p-2 text-slate-900 transition hover:bg-amber-400/60"
                />
              }
            />
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="warning"
              href="https://api.whatsapp.com/send/?phone=%2B543884881609&text&type=phone_number&app_absent=0"
              variant="light"
              isIconOnly
              target="_blank"
              startContent={
                <FaWhatsapp
                  size={40}
                  className="rounded-full border border-amber-400/60 bg-amber-400/30 p-2 text-slate-900 transition hover:bg-amber-400/60"
                />
              }
            />
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarMenu className="bg-white/95 pt-10 backdrop-blur-md">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link className="w-full" href={item.href} size="lg">
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
