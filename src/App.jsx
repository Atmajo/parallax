import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./App.css";
import mahal from "./assets/mahal.png";
import elephant from "./assets/elephant.png";
import auto from "./assets/auto.png";
import tree1 from "./assets/tree1.png";
import tree2 from "./assets/tree2.png";
import fort1 from "./assets/fort1.png";
import fort2 from "./assets/fort2.png";
import ffort1 from "./assets/ffort1.png";
import ffort2 from "./assets/ffort2.png";
import cloud1 from "./assets/cloud1.png";
import cloud2 from "./assets/cloud2.png";
import cloud3 from "./assets/cloud3.png";
import ccloud1 from "./assets/ccloud1.png";
import ccloud2 from "./assets/ccloud2.png";
import tcloud1 from "./assets/tcloud1.png";
import tcloud2 from "./assets/tcloud2.png";
import bird1 from "./assets/bird1.png";
import bird2 from "./assets/bird2.png";
import bird3 from "./assets/bird3.png";
import bird4 from "./assets/bird4.png";
import bird5 from "./assets/bird5.png";
import bird6 from "./assets/bird6.png";
import grass1 from "./assets/grass1.png";
import grass2 from "./assets/grass2.png";
import grass3 from "./assets/grass3.png";
import grass4 from "./assets/grass4.png";
import bottom from "./assets/bottom.png";

function App() {
  const parallaxRef = useRef(null);
  const m = useRef(null);
  const e = useRef(null);
  const a = useRef(null);
  const t1 = useRef(null);
  const t2 = useRef(null);
  const f1 = useRef(null);
  const f2 = useRef(null);
  const ff1 = useRef(null);
  const ff2 = useRef(null);
  const c1 = useRef(null);
  const c2 = useRef(null);
  const c3 = useRef(null);
  const cc1 = useRef(null);
  const cc2 = useRef(null);
  const tc1 = useRef(null);
  const tc2 = useRef(null);
  const c = useRef(null);
  const b1 = useRef(null);
  const b2 = useRef(null);
  const b3 = useRef(null);
  const b4 = useRef(null);
  const b5 = useRef(null);
  const b6 = useRef(null);
  const g1 = useRef(null);
  const g2 = useRef(null);
  const g3 = useRef(null);
  const g4 = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "6000 bottom",
          scrub: true,
          pin: true,
        },
      });
      tl.to(
        m.current,
        {
          y: "-=290",
        },
        0
      );
      tl.to(
        e.current,
        {
          x: "+=590",
        },
        0
      );
      tl.to(
        a.current,
        {
          x: "-=590",
        },
        0
      );
      tl.to(
        cc1.current,
        {
          x: "+=570",
        },
        0
      );
      tl.to(
        cc2.current,
        {
          x: "-=570",
        },
        0
      );
      tl.to(
        tc1.current,
        {
          x: "+=370",
        },
        0.5
      );
      tl.to(
        tc2.current,
        {
          x: "-=370",
        },
        0.5
      );
      tl.to(
        c1.current,
        {
          y: "+=60",
        },
        0
      );
      tl.to(
        c2.current,
        {
          x: "+=670",
        },
        0.5
      );
      tl.to(
        c3.current,
        {
          x: "-=670",
        },
        0.5
      );
      tl.to(
        ff1.current,
        {
          y: "-=340",
        },
        0.5
      );
      tl.to(
        ff2.current,
        {
          y: "-=340",
        },
        0.5
      );
      tl.to(
        c.current,
        {
          y: "-360%",
          opacity: 1,
        },
        0.75
      );
      tl.to(
        b1.current,
        {
          y: "+=50",
          opacity: 1,
        },
        0.3
      )
      tl.to(
        b2.current,
        {
          x: "+=50",
          opacity: 1,
        },
        0.3
      )
      tl.to(
        b3.current,
        {
          x: "+=50",
          opacity: 1,
        },
        0.3
      )
      tl.to(
        b4.current,
        {
          y: "+=50",
          opacity: 1,
        },
        0.3
      )
      tl.to(
        b5.current,
        {
          x: "+=50",
          opacity: 1,
        },
        0.3
      )
      tl.to(
        b6.current,
        {
          y: "+=50",
          opacity: 1,
        },
        0.3
      )
      tl.to(
        g1.current,
        {
          y: "-=50",
        },
        0.3
      )
      tl.to(
        g2.current,
        {
          y: "-=50",
        },
        0.3
      )
      tl.to(
        g3.current,
        {
          y: "-=50",
        },
        0.3
      )
      tl.to(
        g4.current,
        {
          y: "-=50",
        },
        0.3
      )
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="parallax-outer">
      <div ref={parallaxRef} className="parallax">
        <img ref={m} className="mahal" src={mahal} alt="" />
        <img ref={e} className="elephant" src={elephant} alt="" />
        <img ref={a} className="auto" src={auto} alt="" />
        <img ref={t1} className="tree1" src={tree1} alt="" />
        <img ref={t2} className="tree2" src={tree2} alt="" />
        <img ref={f1} className="fort1" src={fort1} alt="" />
        <img ref={f2} className="fort2" src={fort2} alt="" />
        <img ref={ff1} className="ffort1" src={ffort1} alt="" />
        <img ref={ff2} className="ffort2" src={ffort2} alt="" />
        <img ref={c1} className="cloud1" src={cloud1} alt="" />
        <img ref={c2} className="cloud2" src={cloud2} alt="" />
        <img ref={c3} className="cloud3" src={cloud3} alt="" />
        <img ref={cc1} className="ccloud1" src={ccloud1} alt="" />
        <img ref={cc2} className="ccloud2" src={ccloud2} alt="" />
        <img ref={tc1} className="tcloud1" src={tcloud1} alt="" />
        <img ref={tc2} className="tcloud2" src={tcloud2} alt="" />
        <img ref={b1} className="bird1" src={bird1} alt="" />
        <img ref={b2} className="bird2" src={bird2} alt="" />
        <img ref={b3} className="bird3" src={bird3} alt="" />
        <img ref={b4} className="bird4" src={bird4} alt="" />
        <img ref={b5} className="bird5" src={bird5} alt="" />
        <img ref={b6} className="bird6" src={bird6} alt="" />
        <img ref={g1} className="grass1" src={grass1} alt="" />
        <img ref={g2} className="grass2" src={grass2} alt="" />
        <img ref={g3} className="grass3" src={grass3} alt="" />
        <img ref={g4} className="grass4" src={grass4} alt="" />
        <img className="bottom" src={bottom} alt="" />
        <div ref={c} className="copy">
          <h1>ECSTASIA' 24</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
