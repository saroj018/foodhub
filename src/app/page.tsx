"use client"

import CategoryCard from "@/components/category-card/category-card";
import Wrapper from "@/components/wrapper/wrapper";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import backeryImg from '../assets/bakery.png';
import heroSectionImg from '../assets/hero-section-image.png';
import nonVegImg from '../assets/non-veg-resturant.png'
import veGImg from '../assets/veg-resturant.png'


export default function Home() {
  return (
    <main>
      <Carousel autoPlay={true} className="my-2" showThumbs={false}>
        <div><Image src={heroSectionImg} width={500} height={500} alt="Food Hub" /></div>
        <div><Image src={heroSectionImg} width={500} height={500} alt="Food Hub" /></div>
      </Carousel>
      <Wrapper>
        <h2 className="text-2xl font-bold my-2">Shop By Categories</h2>
        <p className="text-gray-500">We've Got Something For Everyone</p>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </Wrapper>
    </main>
  )
}
