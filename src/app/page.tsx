'use client';
import Tombol_1, { Tombol_2 } from "@/component/button";
import { Tombol_3 } from "@/component/button";
import Gallery from "@/component/gallery";
import Form from "@/component/form";
import { Form_2 } from "@/component/form";
import Accordion from "@/component/accordion";
import { Chat } from "@/component/chat";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <h2>Kuis Kota</h2>
        <Tombol_1 />
        <hr></hr>
        <Tombol_2 isiPesan="Ini Pesanku" namaTombol="Pesan" />
      </div>
      <br></br>
      <div className="bg-red-300" onClick={() => alert('Parent  Element : Div')}>
        <Tombol_3 isiPesan="Child Element : Tombol 1" namaTombol="Tombol-1" />
        <br/>
        <Tombol_3 isiPesan="Child Element : Tombol 2" namaTombol="Tombol-2" />
      </div>
      <br></br>
      <Gallery/>
      <br></br>
      <Form/>
      <br></br>
      <Form_2/>
      <br></br>
      <Accordion/>
      <br></br>
      <Chat/>
    </>
  );
}
