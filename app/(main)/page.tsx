import HomeBanner from '@/components/ui/banner/HomeBanner'
import CategoryList from '@/components/ui/Category/CategoryList'
import AmazingSlider from '@/components/common/sliders/products/AmazingProductsSlider'
import LatestProductsSlider from '@/components/common/sliders/products/LatestProductsSlider'
import React from 'react'
import { BestProductsSlider, CategoryCartSlider, HeroSlider, HottestProductsSlider, TopArticleSlider } from '@/components/common/sliders/core'
import heroSliderData from "@/data/heroSlider.json"

export default function Home() {
  return (
    <>
    <HeroSlider slides={heroSliderData} />
      <CategoryList />
      <AmazingSlider />
      <LatestProductsSlider />
      <HomeBanner />
      <BestProductsSlider />
      <CategoryCartSlider />
      <HottestProductsSlider />
      <TopArticleSlider />


    </>
  )
}