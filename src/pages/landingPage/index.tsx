import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import NavBar from "@/layouts/header/navBar";
import LandingPageLayout from "./components/landingPageLayout";


export default function LandingPage() {
  return (
    <>
        <LandingPageLayout/>
    </>
  )
}