import React from "react";
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

import Header from "./components/Header";
import Banner from "./components/Banner";
import Products from "./components/Products";
import { Readmap } from "./components/Readmap";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import Light from "./components/Light";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './App.scss';

function getLibrary(provider) {
  return new Web3(provider)
}

function App() {

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">

        <Header />

        <Banner />

        <Products />

        <div className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 position-relative">
                <h2 className="text-white title">1914 translation by H. Rackham</h2>
                <div className="col-lg-10">
                  <h5 className="text-white mb-4">The Post-Apocalyptic</h5>
                  <p>The Post-Apocalyptic
                    The future: maybe a long time off, maybe sooner than you think. The landscape of this arid post-apocalyptic world has been divided into different quadrants where 10,000 Armored Warriors battle each other for survival. Within these 10,000 Armored Warriors, there are a limited number of military personnel trying to maintain order against different organized factions who are fighting each other—and anyone who stands in their way—for supplies, for territory, and just for kicks. These factions include the Kesseks, the Mondrils, and the Golems. (Oh, and did we mention the atomic-mutated dragons who can strike without warning? Because that’s what you also have in a post-apocalyptic world.) In the middle of all this: Ellis Ulton, a battle-scarred Bounty Hunter who is just trying to make a living as he navigates between the military personnel he once belonged to and the Kesseks, the Mondrils, and the Golems who really call the shots now. Ellis is reluctantly hired for a job which will force him to come up against the dreaded Kesseks, the most vicious faction within the 10,000 Armored Warriors. So he brings together his own team of nine Bounty Hunters: some veterans, some total newbies. Along the way to the quadrant where the Kesseks operate, Ellis encounters his old friend Andres, now the head of military personnel, whose loyalties are only swayed by money. Ellis also takes Bohler, a young, brash female-wannabe Bounty Hunter, under his wing while he and his team of nine Bounty Hunters have to figure out ways to battle the Kesseks, the Mondrils, and the Golems, and deal with the always-changing shifts of power in this dangerous universe.</p>
                </div>
                <div className="about-bg">
                  <img src="./about-bg.png" />
                </div>
              </div>
              <div className="col-lg-6">
                  <div className="position-relative">
                    <img src="./about.png" />
                    <Light
                      url="./lights/light4.png"
                      left="auto"
                      top={-300}
                      right={-300}
                      bottom="auto"
                      index={-1}
                    />
                  </div>
                  <div className="col-lg-7 offset-lg-2">
                    <h5 className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h5>
                  </div>
              </div>
            </div>
          </div>

          <Light
            url="./lights/light5.png"
            left={100}
            top="auto"
            right="auto"
            bottom={-800}
            index={-1}
          />
        </div>

        <Readmap />

        <Teams />

        <div className="community bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <h2 className="text-black mb-5">Join the community</h2>
                <p className="text-dark">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
                <div className="text-center text-lg-start">
                  <button>Join our Discord</button>
                </div>
              </div>
              <div className="col-lg-7">
                <img src="./community.png" />
              </div>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    </Web3ReactProvider>
  );
}

export default App;