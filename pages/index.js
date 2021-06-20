import Head from "next/head";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import Bus from "../components/Bus";
import Streetcar from "../components/Streetcar";
import Subway from "../components/Subway";

export default function Home() {
  const [data, setData] = useState({
    station: 0,
    direction: null,
    choice: "subway",
  });
  const { station, direction, choice } = data;
  const handleClick = (station, direction) => {
    setData({
      station,
      direction,
    });
  };
  const handleChoice = (choice) => {
    setData({
      ...data,
      choice,
    });
  };
  return (
    <>
      <Head>
        <title>TTC Ride - No fare necessary</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/8/87/TTC.svg"
        />
      </Head>

      {station === 0 && direction === null ? (
        <main>
          <h1>Please pick your ride of choice...</h1>
          <span>
            This application allow users to take a virtual ride on a bus,
            streetcar or subway run by TTC. This application may be useful for
            accessibility purposes.
          </span>
          <nav>
            <a
              className={choice === "bus" ? "a--active" : null}
              onClick={() => handleChoice("bus")}
            >
              Bus
            </a>
            <a
              className={choice === "streetcar" ? "a--active" : null}
              onClick={() => handleChoice("streetcar")}
            >
              Streetcar
            </a>
            <a
              className={choice === "subway" ? "a--active" : null}
              onClick={() => handleChoice("subway")}
            >
              Subway
            </a>
          </nav>
          <div className="lines">
            {choice === "bus" ? (
              <Bus handleClick={handleClick} />
            ) : choice === "streetcar" ? (
              <Streetcar handleClick={handleClick} />
            ) : choice === "subway" ? (
              <Subway handleClick={handleClick} />
            ) : (
              false
            )}
          </div>
          <footer>
            <small>
              If you liked the application or would like to make a contribution,
              please head to{" "}
              <a
                href="https://github.com/tpkahlon/ttc-ride"
                target="_blank"
                rel="noopener noreferrer"
              >
                repository
              </a>
              .
            </small>
          </footer>
        </main>
      ) : (
        <main className="video">
          <ReactPlayer
            url={`./${station}-${direction}.mp4`}
            controls
            playing
            width="100vw"
            height="100vh"
          />
        </main>
      )}
    </>
  );
}
