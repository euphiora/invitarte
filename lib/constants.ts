import { CategoriaType, ProductoType } from "@/types";

export const CATEGORIAS: CategoriaType[] = [
  {
    id: 1,
    name: "Cumpleaños Infantiles",
    isSelected: false,
  },
  {
    id: 2,
    name: "Cumpleaños Adultos",
    isSelected: false,
  },
  {
    id: 3,
    name: "Baby Shower",
    isSelected: false,
  },
  {
    id: 4,
    name: "Bodas",
    isSelected: false,
  },
];

export const PRODUCTOS: ProductoType[] = [
  {
    name: "Invitación Baby Shower Osito",
    imageUrl: "/images/babyshower1.jpg",
    categoryId: 3,
  },
  {
    name: "Invitación Baby Shower Naranja",
    imageUrl: "/images/babyshower2.jpg",
    categoryId: 3,
  },
  {
    name: "Invitación Cumpleaños Adultos Wine",
    imageUrl: "/images/bd1.jpg",
    categoryId: 2,
  },
  {
    name: "Invitación Cumpleaños Adultos Con Foto",
    imageUrl: "/images/bd2.jpg",
    categoryId: 2,
  },
  {
    name: "Invitación Cumpleaños Infantil Zoo",
    imageUrl: "/images/bdk1.jpg",
    categoryId: 1,
  },
  {
    name: "Invitación Cumpleaños Infantil Animalitos",
    imageUrl: "/images/bdk2.jpg",
    categoryId: 1,
  },
  {
    name: "Invitación Boda Gatitos Cool",
    imageUrl: "/images/wedding2.jpg",
    categoryId: 4,
  },
  {
    name: "Invitación Boda Flores Vintage",
    imageUrl: "/images/wedding1.jpg",
    categoryId: 4,
  },
];

export const LINK_WHATSAPP = 'https://wa.me/+5493447542735';